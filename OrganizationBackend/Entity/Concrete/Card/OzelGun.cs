using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Concrete
{
    public class OzelGun : OrganizationBase
    {
        public string EventType { get; set; }
        public string VenueOptions { get; set; }
        public string CateringOptions { get; set; }
        public string EntertainmentOptions { get; set; }
    }
}