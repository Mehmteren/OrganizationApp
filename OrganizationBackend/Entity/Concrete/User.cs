using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Entities.Concrete
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime CreatedAt { get; set; }

        // İlişkiler
        public virtual ICollection<Messages> Messages { get; set; }
        public virtual ICollection<Dugun> Dugunler { get; set; }
        public virtual ICollection<EvlilikTeklifi> EvlilikTeklifleri { get; set; }
        public virtual ICollection<Kina> Kinalar { get; set; }
        public virtual ICollection<Nisan> Nisanlar { get; set; }
        public virtual ICollection<OzelGun> OzelGunler { get; set; }
        public virtual ICollection<Soz> Sozler { get; set; }

        public User()
        {
            Messages = new HashSet<Messages>();
            Dugunler = new HashSet<Dugun>();
            EvlilikTeklifleri = new HashSet<EvlilikTeklifi>();
            Kinalar = new HashSet<Kina>();
            Nisanlar = new HashSet<Nisan>();
            OzelGunler = new HashSet<OzelGun>();
            Sozler = new HashSet<Soz>();
        }
    }
}