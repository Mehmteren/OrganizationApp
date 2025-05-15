// EvlilikTeklifi Entity'si
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entities.Concrete
{
    public class EvlilikTeklifi : OrganizationBase
    {
        public string ProposalVenue { get; set; }
        public string ProposalStyle { get; set; }
        public string MusicAndAtmosphere { get; set; }
        public string PhotoVideo { get; set; }
        public string AdditionalSpecialTouches { get; set; }
    }
}