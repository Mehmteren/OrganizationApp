using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Concrete
{
    public class Soz : OrganizationBase
    {
        public string VenueOption { get; set; }
        public string CateringOptions { get; set; }
        public string MusicOptions { get; set; }
        public string PhotoVideo { get; set; }
    }
}