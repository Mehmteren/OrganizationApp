using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Concrete
{
    public class Nisan : OrganizationBase
    {
        public string VenueOption { get; set; }
        public string GuestCount { get; set; }
        public string CateringOptions { get; set; }
        public string MusicAndEntertainment { get; set; }
        public string Decoration { get; set; }
    }
}