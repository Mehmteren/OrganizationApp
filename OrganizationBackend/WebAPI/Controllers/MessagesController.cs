using Business.Services;
using DataAccess.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class MessagesController : ControllerBase
{
    private readonly IMessagesService _messagesService;
    private readonly ILogger<MessagesController> _logger;

    public MessagesController(IMessagesService messagesService, ILogger<MessagesController> logger)
    {
        _messagesService = messagesService;
        _logger = logger;
    }

    // Kullanıcıların mesaj göndermesi için endpoint - kimlik doğrulama GEREKMİYOR
    [HttpPost]
    [AllowAnonymous]
    public async Task<IActionResult> SendMessage([FromBody] MessagesDto messageDto)
    {
        _logger.LogInformation("Mesaj gönderme isteği alındı: {@MessageData}", messageDto);

        try
        {
            var messageId = await _messagesService.AddMessageAsync(messageDto);
            _logger.LogInformation("Mesaj başarıyla eklendi. ID: {MessageId}", messageId);

            return Ok(new { success = true, messageId, message = "Mesajınız başarıyla gönderildi" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Mesaj eklenirken hata oluştu");
            return BadRequest(new { success = false, message = ex.Message });
        }
    }

    // Admin mesaj yönetimi için endpointler
    [HttpGet]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> GetAllMessages()
    {
        try
        {
            var messages = await _messagesService.GetAllMessagesAsync();
            return Ok(messages);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Mesajlar listelenirken hata oluştu");
            return StatusCode(500, new { message = "Mesajlar listelenirken bir hata oluştu", error = ex.Message });
        }
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = "Admin")]
    public async Task<IActionResult> DeleteMessage(int id)
    {
        try
        {
            var result = await _messagesService.DeleteMessageAsync(id);
            if (!result)
                return NotFound(new { message = "Mesaj bulunamadı veya silinemedi" });
            return Ok(new { message = "Mesaj başarıyla silindi" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Mesaj silinirken hata oluştu. ID: {MessageId}", id);
            return StatusCode(500, new { message = "Mesaj silinirken bir hata oluştu", error = ex.Message });
        }
    }
}