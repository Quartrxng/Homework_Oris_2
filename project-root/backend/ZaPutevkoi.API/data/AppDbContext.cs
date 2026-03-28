using Microsoft.EntityFrameworkCore;
using ZaPutevkoi.API.Entities;

namespace ZaPutevkoi.API.data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<HotelEntity> Hotels { get; set; }
        public DbSet<HotelImageEntity> HotelImages { get; set; }
        public DbSet<HotelSectionEntity> HotelSections { get; set; }
        public DbSet<HotelFiltersEntity> HotelFilters { get; set; }
        public DbSet<AccommodationEntity> Accommodations { get; set; }
        public DbSet<AvailabilityPeriodEntity> AvailabilityPeriods { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<HotelEntity>()
                .HasMany(h => h.Images)
                .WithOne(i => i.Hotel)
                .HasForeignKey(i => i.HotelEntityId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<HotelEntity>()
                .HasMany(h => h.Sections)
                .WithOne(s => s.Hotel)
                .HasForeignKey(s => s.HotelEntityId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<HotelEntity>()
                .HasOne(h => h.Search)
                .WithOne(f => f.Hotel)
                .HasForeignKey<HotelFiltersEntity>(f => f.HotelEntityId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<HotelFiltersEntity>()
                .HasOne(f => f.Accommodation)
                .WithOne(a => a.HotelFilters)
                .HasForeignKey<AccommodationEntity>(a => a.HotelFiltersEntityId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<HotelFiltersEntity>()
                .HasMany(f => f.Availability)
                .WithOne(a => a.HotelFilters)
                .HasForeignKey(a => a.HotelFiltersEntityId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}