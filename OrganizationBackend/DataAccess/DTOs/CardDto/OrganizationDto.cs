using System;
using System.Collections.Generic;

namespace DTOs
{
    public class OrganizationDto
    {
        public string OrganizationType { get; set; } // "Dugun", "EvlilikTeklifi", "Kina", "Nisan", "OzelGun", "Soz"
        public Dictionary<string, string> Properties { get; set; } = new Dictionary<string, string>();
    }
}