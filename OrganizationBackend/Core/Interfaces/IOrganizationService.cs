using System.Collections.Generic;
using System.Threading.Tasks;
using DTOs;
using Entities.Concrete;

namespace Business.Abstract
{
    public interface IOrganizationService
    {
        // Dugun
        Task<Dugun> GetDugunByIdAsync(int id);
        Task<List<Dugun>> GetDugunsByUserIdAsync(int userId);
        Task AddDugunAsync(DugunDto dugunDto, int userId);

        // EvlilikTeklifi
        Task<EvlilikTeklifi> GetEvlilikTeklifiByIdAsync(int id);
        Task<List<EvlilikTeklifi>> GetEvlilikTeklifleriByUserIdAsync(int userId);
        Task AddEvlilikTeklifiAsync(EvlilikTeklifiDto evlilikTeklifiDto, int userId);

        // Kina
        Task<Kina> GetKinaByIdAsync(int id);
        Task<List<Kina>> GetKinalarByUserIdAsync(int userId);
        Task AddKinaAsync(KinaDto kinaDto, int userId);

        // Nisan
        Task<Nisan> GetNisanByIdAsync(int id);
        Task<List<Nisan>> GetNisanlarByUserIdAsync(int userId);
        Task AddNisanAsync(NisanDto nisanDto, int userId);

        // OzelGun
        Task<OzelGun> GetOzelGunByIdAsync(int id);
        Task<List<OzelGun>> GetOzelGunlerByUserIdAsync(int userId);
        Task AddOzelGunAsync(OzelGunDto ozelGunDto, int userId);

        // Soz
        Task<Soz> GetSozByIdAsync(int id);
        Task<List<Soz>> GetSozlerByUserIdAsync(int userId);
        Task AddSozAsync(SozDto sozDto, int userId);

        // Generic OrganizationDto işlemi
        Task ProcessOrganizationDtoAsync(OrganizationDto organizationDto, int userId);
    }
}