using Microsoft.EntityFrameworkCore;
using ZaPutevkoi.API.Models;

namespace ZaPutevkoi.API.data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Hotel> Hotels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Hotel>(entity =>
            {

                entity.HasKey(x => x.Id);

                entity.Property(x => x.Name).IsRequired();
                entity.Property(x => x.Location);
                entity.Property(x => x.RatingStatus);
                entity.Property(x => x.DescriptionText);
                entity.Property(x => x.Currency);

                entity.Property(x => x.ImagesJson).HasColumnName("Images");
                entity.Property(x => x.SectionsJson).HasColumnName("Sections");
                entity.Property(x => x.SearchJson).HasColumnName("Search");
            });
        }
    }
}