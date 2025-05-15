using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Abstract;
using DTOs;
using Entities.Concrete;

namespace DataAccess.Abstract
{
    public interface IOrganizationRepository
    {
        Task<Dugun> GetDugunByIdAsync(int id);
        Task<List<Dugun>> GetDugunsByUserIdAsync(int userId);
        Task AddDugunAsync(Dugun dugun);

        Task<EvlilikTeklifi> GetEvlilikTeklifiByIdAsync(int id);
        Task<List<EvlilikTeklifi>> GetEvlilikTeklifleriByUserIdAsync(int userId);
        Task AddEvlilikTeklifiAsync(EvlilikTeklifi evlilikTeklifi);

        Task<Kina> GetKinaByIdAsync(int id);
        Task<List<Kina>> GetKinalarByUserIdAsync(int userId);
        Task AddKinaAsync(Kina kina);

        Task<Nisan> GetNisanByIdAsync(int id);
        Task<List<Nisan>> GetNisanlarByUserIdAsync(int userId);
        Task AddNisanAsync(Nisan nisan);

        Task<OzelGun> GetOzelGunByIdAsync(int id);
        Task<List<OzelGun>> GetOzelGunlerByUserIdAsync(int userId);
        Task AddOzelGunAsync(OzelGun ozelGun);

        Task<Soz> GetSozByIdAsync(int id);
        Task<List<Soz>> GetSozlerByUserIdAsync(int userId);
        Task AddSozAsync(Soz soz);
    }
}