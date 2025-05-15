using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DataAccess.Context;
using DataAccess.DTOs;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace DataAccess.Repository
{
    public class MessagesRepository : IMessagesRepository
    {
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _context;
        private readonly ILogger<MessagesRepository> _logger;

        public MessagesRepository(ApplicationDbContext context, IMapper mapper, ILogger<MessagesRepository> logger)
        {
            _context = context;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<int> AddMessageAsync(MessagesDto messagesDto)
        {
            try
            {
                _logger.LogInformation("Yeni mesaj ekleniyor: {@MessageData}", messagesDto);

                var message = _mapper.Map<Messages>(messagesDto);
                message.SendAt = DateTime.UtcNow;
                message.UserId = null; // UserId'yi null olarak ayarla

                await _context.Messages.AddAsync(message);
                var result = await _context.SaveChangesAsync();

                _logger.LogInformation("Mesaj başarıyla eklendi. ID: {MessageId}, Etkilenen satır: {AffectedRows}", message.Id, result);

                return message.Id;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Mesaj eklenirken hata oluştu: {ErrorMessage}", ex.Message);

                if (ex.InnerException != null)
                {
                    _logger.LogError("İç hata: {InnerErrorMessage}", ex.InnerException.Message);
                }

                throw new Exception($"Mesaj eklenirken bir hata oluştu: {ex.Message}", ex);
            }
        }

        public async Task<bool> DeleteMessageAsync(int messagesId)
        {
            try
            {
                _logger.LogInformation("Mesaj siliniyor. ID: {MessageId}", messagesId);

                var message = await _context.Messages.FindAsync(messagesId);
                if (message == null)
                {
                    _logger.LogWarning("Silinecek mesaj bulunamadı. ID: {MessageId}", messagesId);
                    return false;
                }

                _context.Messages.Remove(message);
                var result = await _context.SaveChangesAsync();

                _logger.LogInformation("Mesaj silindi. ID: {MessageId}, Etkilenen satır: {AffectedRows}", messagesId, result);

                return result > 0;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Mesaj silinirken hata oluştu. ID: {MessageId}", messagesId);
                throw new Exception($"Mesaj silinirken bir hata oluştu (ID: {messagesId}): {ex.Message}", ex);
            }
        }

        public async Task<List<Messages>> GetAllMessagesAsync()
        {
            try
            {
                _logger.LogInformation("Tüm mesajlar getiriliyor");

                var messages = await _context.Messages
                    .OrderByDescending(m => m.SendAt)
                    .ToListAsync();

                _logger.LogInformation("Toplam {MessageCount} mesaj getirildi", messages.Count);

                return messages;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Mesajlar listelenirken hata oluştu");
                throw new Exception($"Mesajlar listelenirken bir hata oluştu: {ex.Message}", ex);
            }
        }
    }
}