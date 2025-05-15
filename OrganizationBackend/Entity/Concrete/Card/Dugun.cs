using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entities.Concrete
{
    public class Dugun : OrganizationBase
    {
        public string WeddingVenueType { get; set; }
        public string FoodOptions { get; set; }
        public string MusicOptions { get; set; }
        public string PhotoVideo { get; set; }
    }
}