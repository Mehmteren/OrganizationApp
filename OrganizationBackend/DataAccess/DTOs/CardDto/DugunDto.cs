using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace DTOs
{
    public class DugunDto
    {
        public string WeddingVenueType { get; set; }
        public string FoodOptions { get; set; }
        public string MusicOptions { get; set; }
        public string PhotoVideo { get; set; }
    }
}