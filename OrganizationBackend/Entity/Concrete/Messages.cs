using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Messages
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id { get; set; }

        // ForeignKey attribute'unu kaldırdık
        public int? UserId { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public DateTime SendAt { get; set; }

        // Navigation property
        public virtual User? User { get; set; }
    }
}