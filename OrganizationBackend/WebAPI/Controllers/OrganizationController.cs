using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Business.Abstract;
using DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class OrganizationController : ControllerBase
    {
        private readonly IOrganizationService _organizationService;

        public OrganizationController(IOrganizationService organizationService)
        {
            _organizationService = organizationService;
        }

        // General Organization Endpoint (using OrganizationDto)
        [HttpPost]
        public async Task<IActionResult> AddOrganization([FromBody] OrganizationDto organizationDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                await _organizationService.ProcessOrganizationDtoAsync(organizationDto, userId);
                return Ok(new { message = $"{organizationDto.OrganizationType} bilgileri başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // Specific Endpoints for Each Organization Type

        // Dugun Endpoints
        [HttpPost("dugun")]
        public async Task<IActionResult> AddDugun([FromBody] DugunDto dugunDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                await _organizationService.AddDugunAsync(dugunDto, userId);
                return Ok(new { message = "Düğün bilgileri başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("dugun")]
        public async Task<IActionResult> GetUserDugunler()
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var dugunler = await _organizationService.GetDugunsByUserIdAsync(userId);
                return Ok(dugunler);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("dugun/{id}")]
        public async Task<IActionResult> GetDugunById(int id)
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var dugun = await _organizationService.GetDugunByIdAsync(id);

                if (dugun == null)
                    return NotFound(new { message = "Düğün bilgisi bulunamadı." });

                if (dugun.UserId != userId)
                    return Forbid();

                return Ok(dugun);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // EvlilikTeklifi Endpoints
        [HttpPost("evlilik-teklifi")]
        public async Task<IActionResult> AddEvlilikTeklifi([FromBody] EvlilikTeklifiDto evlilikTeklifiDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                await _organizationService.AddEvlilikTeklifiAsync(evlilikTeklifiDto, userId);
                return Ok(new { message = "Evlilik teklifi bilgileri başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("evlilik-teklifi")]
        public async Task<IActionResult> GetUserEvlilikTeklifleri()
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var evlilikTeklifleri = await _organizationService.GetEvlilikTeklifleriByUserIdAsync(userId);
                return Ok(evlilikTeklifleri);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("evlilik-teklifi/{id}")]
        public async Task<IActionResult> GetEvlilikTeklifiById(int id)
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var evlilikTeklifi = await _organizationService.GetEvlilikTeklifiByIdAsync(id);

                if (evlilikTeklifi == null)
                    return NotFound(new { message = "Evlilik teklifi bilgisi bulunamadı." });

                if (evlilikTeklifi.UserId != userId)
                    return Forbid();

                return Ok(evlilikTeklifi);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // Kina Endpoints
        [HttpPost("kina")]
        public async Task<IActionResult> AddKina([FromBody] KinaDto kinaDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                await _organizationService.AddKinaAsync(kinaDto, userId);
                return Ok(new { message = "Kına bilgileri başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("kina")]
        public async Task<IActionResult> GetUserKinalar()
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var kinalar = await _organizationService.GetKinalarByUserIdAsync(userId);
                return Ok(kinalar);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("kina/{id}")]
        public async Task<IActionResult> GetKinaById(int id)
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var kina = await _organizationService.GetKinaByIdAsync(id);

                if (kina == null)
                    return NotFound(new { message = "Kına bilgisi bulunamadı." });

                if (kina.UserId != userId)
                    return Forbid();

                return Ok(kina);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
        [HttpPost("nisan")]
        public async Task<IActionResult> AddNisan([FromBody] NisanDto nisanDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                // Daha detaylı hata yakalama için
                var nameId = User.FindFirst(ClaimTypes.NameIdentifier);
                if (nameId == null)
                {
                    return BadRequest("Token içinde kullanıcı ID'si bulunamadı");
                }

                Console.WriteLine($"Bulunan kullanıcı ID claim: {nameId.Value}");

                var userId = int.Parse(nameId.Value);

                // Daha spesifik yakalama için try-catch bloğu
                try
                {
                    await _organizationService.AddNisanAsync(nisanDto, userId);
                }
                catch (Exception innerEx)
                {
                    Console.WriteLine($"AddNisanAsync hatası: {innerEx.Message}");
                    Console.WriteLine($"Inner Exception: {innerEx.InnerException?.Message}");
                    return StatusCode(500, $"Veritabanı hatası: {innerEx.Message}, {innerEx.InnerException?.Message}");
                }

                return Ok(new { message = "Nişan bilgileri başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Genel hata: {ex.Message}");
                Console.WriteLine($"Stack Trace: {ex.StackTrace}");
                return StatusCode(500, $"Detaylı hata: {ex.Message}");
            }
        }

        [HttpGet("nisan")]
        public async Task<IActionResult> GetUserNisanlar()
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var nisanlar = await _organizationService.GetNisanlarByUserIdAsync(userId);
                return Ok(nisanlar);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("nisan/{id}")]
        public async Task<IActionResult> GetNisanById(int id)
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var nisan = await _organizationService.GetNisanByIdAsync(id);

                if (nisan == null)
                    return NotFound(new { message = "Nişan bilgisi bulunamadı." });

                if (nisan.UserId != userId)
                    return Forbid();

                return Ok(nisan);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // OzelGun Endpoints
        [HttpPost("ozel-gun")]
        public async Task<IActionResult> AddOzelGun([FromBody] OzelGunDto ozelGunDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                await _organizationService.AddOzelGunAsync(ozelGunDto, userId);
                return Ok(new { message = "Özel gün bilgileri başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("ozel-gun")]
        public async Task<IActionResult> GetUserOzelGunler()
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var ozelGunler = await _organizationService.GetOzelGunlerByUserIdAsync(userId);
                return Ok(ozelGunler);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("ozel-gun/{id}")]
        public async Task<IActionResult> GetOzelGunById(int id)
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var ozelGun = await _organizationService.GetOzelGunByIdAsync(id);

                if (ozelGun == null)
                    return NotFound(new { message = "Özel gün bilgisi bulunamadı." });

                if (ozelGun.UserId != userId)
                    return Forbid();

                return Ok(ozelGun);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        // Soz Endpoints
        [HttpPost("soz")]
        public async Task<IActionResult> AddSoz([FromBody] SozDto sozDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                await _organizationService.AddSozAsync(sozDto, userId);
                return Ok(new { message = "Söz bilgileri başarıyla kaydedildi." });
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("soz")]
        public async Task<IActionResult> GetUserSozler()
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var sozler = await _organizationService.GetSozlerByUserIdAsync(userId);
                return Ok(sozler);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("soz/{id}")]
        public async Task<IActionResult> GetSozById(int id)
        {
            try
            {
                var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
                var soz = await _organizationService.GetSozByIdAsync(id);

                if (soz == null)
                    return NotFound(new { message = "Söz bilgisi bulunamadı." });

                if (soz.UserId != userId)
                    return Forbid();

                return Ok(soz);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}