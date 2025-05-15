using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Business.Abstract;
using DataAccess.Abstract;
using DTOs;
using Entities.Concrete;

namespace Business.Concrete
{
    public class OrganizationService : IOrganizationService
    {
        private readonly IOrganizationRepository _organizationRepository;

        public OrganizationService(IOrganizationRepository organizationRepository)
        {
            _organizationRepository = organizationRepository;
        }

        // Dugun Methods
        public async Task<Dugun> GetDugunByIdAsync(int id)
        {
            return await _organizationRepository.GetDugunByIdAsync(id);
        }

        public async Task<List<Dugun>> GetDugunsByUserIdAsync(int userId)
        {
            return await _organizationRepository.GetDugunsByUserIdAsync(userId);
        }

        public async Task AddDugunAsync(DugunDto dugunDto, int userId)
        {
            var dugun = new Dugun
            {
                WeddingVenueType = dugunDto.WeddingVenueType,
                FoodOptions = dugunDto.FoodOptions,
                MusicOptions = dugunDto.MusicOptions,
                PhotoVideo = dugunDto.PhotoVideo,
                UserId = userId,
                OrganizationType = "Dugun",
                CreatedAt = DateTime.UtcNow
            };

            await _organizationRepository.AddDugunAsync(dugun);
        }

        // EvlilikTeklifi Methods
        public async Task<EvlilikTeklifi> GetEvlilikTeklifiByIdAsync(int id)
        {
            return await _organizationRepository.GetEvlilikTeklifiByIdAsync(id);
        }

        public async Task<List<EvlilikTeklifi>> GetEvlilikTeklifleriByUserIdAsync(int userId)
        {
            return await _organizationRepository.GetEvlilikTeklifleriByUserIdAsync(userId);
        }

        public async Task AddEvlilikTeklifiAsync(EvlilikTeklifiDto evlilikTeklifiDto, int userId)
        {
            var evlilikTeklifi = new EvlilikTeklifi
            {
                ProposalVenue = evlilikTeklifiDto.ProposalVenue,
                ProposalStyle = evlilikTeklifiDto.ProposalStyle,
                MusicAndAtmosphere = evlilikTeklifiDto.MusicAndAtmosphere,
                PhotoVideo = evlilikTeklifiDto.PhotoVideo,
                AdditionalSpecialTouches = evlilikTeklifiDto.AdditionalSpecialTouches,
                UserId = userId,
                OrganizationType = "EvlilikTeklifi",
                CreatedAt = DateTime.UtcNow
            };

            await _organizationRepository.AddEvlilikTeklifiAsync(evlilikTeklifi);
        }

        // Kina Methods
        public async Task<Kina> GetKinaByIdAsync(int id)
        {
            return await _organizationRepository.GetKinaByIdAsync(id);
        }

        public async Task<List<Kina>> GetKinalarByUserIdAsync(int userId)
        {
            return await _organizationRepository.GetKinalarByUserIdAsync(userId);
        }

        public async Task AddKinaAsync(KinaDto kinaDto, int userId)
        {
            var kina = new Kina
            {
                VenueOptions = kinaDto.VenueOptions,
                GuestCount = kinaDto.GuestCount,
                HennaNightEntertainment = kinaDto.HennaNightEntertainment,
                HennaOrganizationPackage = kinaDto.HennaOrganizationPackage,
                BridePreparation = kinaDto.BridePreparation,
                UserId = userId,
                OrganizationType = "Kina",
                CreatedAt = DateTime.UtcNow
            };

            await _organizationRepository.AddKinaAsync(kina);
        }

        // Nisan Methods
        public async Task<Nisan> GetNisanByIdAsync(int id)
        {
            return await _organizationRepository.GetNisanByIdAsync(id);
        }

        public async Task<List<Nisan>> GetNisanlarByUserIdAsync(int userId)
        {
            return await _organizationRepository.GetNisanlarByUserIdAsync(userId);
        }

        public async Task AddNisanAsync(NisanDto nisanDto, int userId)
        {
            var nisan = new Nisan
            {
                VenueOption = nisanDto.VenueOption,
                GuestCount = nisanDto.GuestCount,
                CateringOptions = nisanDto.CateringOptions,
                MusicAndEntertainment = nisanDto.MusicAndEntertainment,
                Decoration = nisanDto.Decoration,
                UserId = userId,
                OrganizationType = "Nisan",
                CreatedAt = DateTime.UtcNow
            };

            await _organizationRepository.AddNisanAsync(nisan);
        }

        // OzelGun Methods
        public async Task<OzelGun> GetOzelGunByIdAsync(int id)
        {
            return await _organizationRepository.GetOzelGunByIdAsync(id);
        }

        public async Task<List<OzelGun>> GetOzelGunlerByUserIdAsync(int userId)
        {
            return await _organizationRepository.GetOzelGunlerByUserIdAsync(userId);
        }

        public async Task AddOzelGunAsync(OzelGunDto ozelGunDto, int userId)
        {
            var ozelGun = new OzelGun
            {
                EventType = ozelGunDto.EventType,
                VenueOptions = ozelGunDto.VenueOptions,
                CateringOptions = ozelGunDto.CateringOptions,
                EntertainmentOptions = ozelGunDto.EntertainmentOptions,
                UserId = userId,
                OrganizationType = "OzelGun",
                CreatedAt = DateTime.UtcNow
            };

            await _organizationRepository.AddOzelGunAsync(ozelGun);
        }

        // Soz Methods
        public async Task<Soz> GetSozByIdAsync(int id)
        {
            return await _organizationRepository.GetSozByIdAsync(id);
        }

        public async Task<List<Soz>> GetSozlerByUserIdAsync(int userId)
        {
            return await _organizationRepository.GetSozlerByUserIdAsync(userId);
        }

        public async Task AddSozAsync(SozDto sozDto, int userId)
        {
            var soz = new Soz
            {
                VenueOption = sozDto.VenueOption,
                CateringOptions = sozDto.CateringOptions,
                MusicOptions = sozDto.MusicOptions,
                PhotoVideo = sozDto.PhotoVideo,
                UserId = userId,
                OrganizationType = "Soz",
                CreatedAt = DateTime.UtcNow
            };

            await _organizationRepository.AddSozAsync(soz);
        }

        // OrganizationDto işleme metodu - Dictionary kullanarak tüm organizasyon tiplerini işler
        public async Task ProcessOrganizationDtoAsync(OrganizationDto organizationDto, int userId)
        {
            switch (organizationDto.OrganizationType)
            {
                case "Dugun":
                    var dugun = new Dugun
                    {
                        WeddingVenueType = organizationDto.Properties.ContainsKey("WeddingVenueType") ? organizationDto.Properties["WeddingVenueType"] : null,
                        FoodOptions = organizationDto.Properties.ContainsKey("FoodOptions") ? organizationDto.Properties["FoodOptions"] : null,
                        MusicOptions = organizationDto.Properties.ContainsKey("MusicOptions") ? organizationDto.Properties["MusicOptions"] : null,
                        PhotoVideo = organizationDto.Properties.ContainsKey("PhotoVideo") ? organizationDto.Properties["PhotoVideo"] : null,
                        UserId = userId,
                        OrganizationType = organizationDto.OrganizationType,
                        CreatedAt = DateTime.UtcNow
                    };
                    await _organizationRepository.AddDugunAsync(dugun);
                    break;

                case "EvlilikTeklifi":
                    var evlilikTeklifi = new EvlilikTeklifi
                    {
                        ProposalVenue = organizationDto.Properties.ContainsKey("ProposalVenue") ? organizationDto.Properties["ProposalVenue"] : null,
                        ProposalStyle = organizationDto.Properties.ContainsKey("ProposalStyle") ? organizationDto.Properties["ProposalStyle"] : null,
                        MusicAndAtmosphere = organizationDto.Properties.ContainsKey("MusicAndAtmosphere") ? organizationDto.Properties["MusicAndAtmosphere"] : null,
                        PhotoVideo = organizationDto.Properties.ContainsKey("PhotoVideo") ? organizationDto.Properties["PhotoVideo"] : null,
                        AdditionalSpecialTouches = organizationDto.Properties.ContainsKey("AdditionalSpecialTouches") ? organizationDto.Properties["AdditionalSpecialTouches"] : null,
                        UserId = userId,
                        OrganizationType = organizationDto.OrganizationType,
                        CreatedAt = DateTime.UtcNow
                    };
                    await _organizationRepository.AddEvlilikTeklifiAsync(evlilikTeklifi);
                    break;

                case "Kina":
                    var kina = new Kina
                    {
                        VenueOptions = organizationDto.Properties.ContainsKey("VenueOptions") ? organizationDto.Properties["VenueOptions"] : null,
                        GuestCount = organizationDto.Properties.ContainsKey("GuestCount") ? organizationDto.Properties["GuestCount"] : null,
                        HennaNightEntertainment = organizationDto.Properties.ContainsKey("HennaNightEntertainment") ? organizationDto.Properties["HennaNightEntertainment"] : null,
                        HennaOrganizationPackage = organizationDto.Properties.ContainsKey("HennaOrganizationPackage") ? organizationDto.Properties["HennaOrganizationPackage"] : null,
                        BridePreparation = organizationDto.Properties.ContainsKey("BridePreparation") ? organizationDto.Properties["BridePreparation"] : null,
                        UserId = userId,
                        OrganizationType = organizationDto.OrganizationType,
                        CreatedAt = DateTime.UtcNow
                    };
                    await _organizationRepository.AddKinaAsync(kina);
                    break;

                case "Nisan":
                    var nisan = new Nisan
                    {
                        VenueOption = organizationDto.Properties.ContainsKey("VenueOption") ? organizationDto.Properties["VenueOption"] : null,
                        GuestCount = organizationDto.Properties.ContainsKey("GuestCount") ? organizationDto.Properties["GuestCount"] : null,
                        CateringOptions = organizationDto.Properties.ContainsKey("CateringOptions") ? organizationDto.Properties["CateringOptions"] : null,
                        MusicAndEntertainment = organizationDto.Properties.ContainsKey("MusicAndEntertainment") ? organizationDto.Properties["MusicAndEntertainment"] : null,
                        Decoration = organizationDto.Properties.ContainsKey("Decoration") ? organizationDto.Properties["Decoration"] : null,
                        UserId = userId,
                        OrganizationType = organizationDto.OrganizationType,
                        CreatedAt = DateTime.UtcNow
                    };
                    await _organizationRepository.AddNisanAsync(nisan);
                    break;

                case "OzelGun":
                    var ozelGun = new OzelGun
                    {
                        EventType = organizationDto.Properties.ContainsKey("EventType") ? organizationDto.Properties["EventType"] : null,
                        VenueOptions = organizationDto.Properties.ContainsKey("VenueOptions") ? organizationDto.Properties["VenueOptions"] : null,
                        CateringOptions = organizationDto.Properties.ContainsKey("CateringOptions") ? organizationDto.Properties["CateringOptions"] : null,
                        EntertainmentOptions = organizationDto.Properties.ContainsKey("EntertainmentOptions") ? organizationDto.Properties["EntertainmentOptions"] : null,
                        UserId = userId,
                        OrganizationType = organizationDto.OrganizationType,
                        CreatedAt = DateTime.UtcNow
                    };
                    await _organizationRepository.AddOzelGunAsync(ozelGun);
                    break;

                case "Soz":
                    var soz = new Soz
                    {
                        VenueOption = organizationDto.Properties.ContainsKey("VenueOption") ? organizationDto.Properties["VenueOption"] : null,
                        CateringOptions = organizationDto.Properties.ContainsKey("CateringOptions") ? organizationDto.Properties["CateringOptions"] : null,
                        MusicOptions = organizationDto.Properties.ContainsKey("MusicOptions") ? organizationDto.Properties["MusicOptions"] : null,
                        PhotoVideo = organizationDto.Properties.ContainsKey("PhotoVideo") ? organizationDto.Properties["PhotoVideo"] : null,
                        UserId = userId,
                        OrganizationType = organizationDto.OrganizationType,
                        CreatedAt = DateTime.UtcNow
                    };
                    await _organizationRepository.AddSozAsync(soz);
                    break;

                default:
                    throw new ArgumentException($"Geçersiz organizasyon tipi: {organizationDto.OrganizationType}");
            }
        }
    }
}