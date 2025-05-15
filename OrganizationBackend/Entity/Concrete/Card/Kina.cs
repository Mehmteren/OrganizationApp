using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Concrete
{
    public class Kina : OrganizationBase
    {
        public string VenueOptions { get; set; }
        public string GuestCount { get; set; }
        public string HennaNightEntertainment { get; set; }
        public string HennaOrganizationPackage { get; set; }
        public string BridePreparation { get; set; }
    }
}