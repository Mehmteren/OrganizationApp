using System.Collections.Generic;
using System.Threading.Tasks;
using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Concrete
{
    public class OrganizationRepository : IOrganizationRepository
    {
        private readonly Repository<Dugun> _dugunRepository;
        private readonly Repository<EvlilikTeklifi> _evlilikTeklifiRepository;
        private readonly Repository<Kina> _kinaRepository;
        private readonly Repository<Nisan> _nisanRepository;
        private readonly Repository<OzelGun> _ozelGunRepository;
        private readonly Repository<Soz> _sozRepository;

        public OrganizationRepository(DbContext context)
        {
            _dugunRepository = new Repository<Dugun>(context);
            _evlilikTeklifiRepository = new Repository<EvlilikTeklifi>(context);
            _kinaRepository = new Repository<Kina>(context);
            _nisanRepository = new Repository<Nisan>(context);
            _ozelGunRepository = new Repository<OzelGun>(context);
            _sozRepository = new Repository<Soz>(context);
        }

        // Dugun Methods
        public async Task<Dugun> GetDugunByIdAsync(int id)
        {
            return await _dugunRepository.GetByIdAsync(id);
        }

        public async Task<List<Dugun>> GetDugunsByUserIdAsync(int userId)
        {
            return await _dugunRepository.GetAllByUserIdAsync(userId);
        }

        public async Task AddDugunAsync(Dugun dugun)
        {
            await _dugunRepository.AddAsync(dugun);
        }

        // EvlilikTeklifi Methods
        public async Task<EvlilikTeklifi> GetEvlilikTeklifiByIdAsync(int id)
        {
            return await _evlilikTeklifiRepository.GetByIdAsync(id);
        }

        public async Task<List<EvlilikTeklifi>> GetEvlilikTeklifleriByUserIdAsync(int userId)
        {
            return await _evlilikTeklifiRepository.GetAllByUserIdAsync(userId);
        }

        public async Task AddEvlilikTeklifiAsync(EvlilikTeklifi evlilikTeklifi)
        {
            await _evlilikTeklifiRepository.AddAsync(evlilikTeklifi);
        }

        // Kina Methods
        public async Task<Kina> GetKinaByIdAsync(int id)
        {
            return await _kinaRepository.GetByIdAsync(id);
        }

        public async Task<List<Kina>> GetKinalarByUserIdAsync(int userId)
        {
            return await _kinaRepository.GetAllByUserIdAsync(userId);
        }

        public async Task AddKinaAsync(Kina kina)
        {
            await _kinaRepository.AddAsync(kina);
        }

        // Nisan Methods
        public async Task<Nisan> GetNisanByIdAsync(int id)
        {
            return await _nisanRepository.GetByIdAsync(id);
        }

        public async Task<List<Nisan>> GetNisanlarByUserIdAsync(int userId)
        {
            return await _nisanRepository.GetAllByUserIdAsync(userId);
        }

        public async Task AddNisanAsync(Nisan nisan)
        {
            await _nisanRepository.AddAsync(nisan);
        }

        // OzelGun Methods
        public async Task<OzelGun> GetOzelGunByIdAsync(int id)
        {
            return await _ozelGunRepository.GetByIdAsync(id);
        }

        public async Task<List<OzelGun>> GetOzelGunlerByUserIdAsync(int userId)
        {
            return await _ozelGunRepository.GetAllByUserIdAsync(userId);
        }

        public async Task AddOzelGunAsync(OzelGun ozelGun)
        {
            await _ozelGunRepository.AddAsync(ozelGun);
        }

        // Soz Methods
        public async Task<Soz> GetSozByIdAsync(int id)
        {
            return await _sozRepository.GetByIdAsync(id);
        }

        public async Task<List<Soz>> GetSozlerByUserIdAsync(int userId)
        {
            return await _sozRepository.GetAllByUserIdAsync(userId);
        }

        public async Task AddSozAsync(Soz soz)
        {
            await _sozRepository.AddAsync(soz);
        }
    }
}