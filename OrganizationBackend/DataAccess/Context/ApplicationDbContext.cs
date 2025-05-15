using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Context
{
    public class ApplicationDbContext : DbContext
    {
        // Mevcut DbSet'ler
        public DbSet<User> Users { get; set; }
        public DbSet<Messages> Messages { get; set; }

        // Yeni Organizasyon DbSet'leri
        public DbSet<Dugun> Dugunler { get; set; }
        public DbSet<EvlilikTeklifi> EvlilikTeklifleri { get; set; }
        public DbSet<Kina> Kinalar { get; set; }
        public DbSet<Nisan> Nisanlar { get; set; }
        public DbSet<OzelGun> OzelGunler { get; set; }
        public DbSet<Soz> Sozler { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public ApplicationDbContext()
        {
        }

        // OnConfiguring metodu
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                // Bağlantı dizesi
                optionsBuilder.UseNpgsql("Host=localhost;Database=OrganizationDb;Username=postgres;Password=Esma2014");
            }
        }

        // OnModelCreating metodu
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // User ve Messages arasındaki ilişki
            modelBuilder.Entity<Messages>()
                .HasOne(m => m.User)
                .WithMany(u => u.Messages)
                .HasForeignKey(m => m.UserId)
                .IsRequired(false)
                .OnDelete(DeleteBehavior.SetNull);

            // User için diğer yapılandırmalar
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

            // Organizasyon ilişkileri - her biri için sadece bir kez tanımlayın
            modelBuilder.Entity<Dugun>()
                .HasOne(d => d.User)
                .WithMany(u => u.Dugunler)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<EvlilikTeklifi>()
                .HasOne(e => e.User)
                .WithMany(u => u.EvlilikTeklifleri)
                .HasForeignKey(e => e.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Kina>()
                .HasOne(k => k.User)
                .WithMany(u => u.Kinalar)
                .HasForeignKey(k => k.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Nisan>()
                .HasOne(n => n.User)
                .WithMany(u => u.Nisanlar)
                .HasForeignKey(n => n.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<OzelGun>()
                .HasOne(o => o.User)
                .WithMany(u => u.OzelGunler)
                .HasForeignKey(o => o.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Soz>()
                .HasOne(s => s.User)
                .WithMany(u => u.Sozler)
                .HasForeignKey(s => s.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // PostgreSQL özel yapılandırmaları
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
            {
                foreach (var property in entityType.GetProperties())
                {
                    if (property.ClrType == typeof(string))
                    {
                        property.SetColumnType("text");
                    }
                }
            }
        }
    }
}