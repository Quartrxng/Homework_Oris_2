using ZaPutevkoi.API.Mappers;

namespace ZaPutevkoi.API.data
{
    public static class DbSeeder
    {
        public static async Task SeedAsync(AppDbContext context)
        {
            await context.Database.EnsureCreatedAsync();

            if (context.Hotels.Any())
                return;

            var hotels = DataSeed.HotelsData
                .Select(HotelMapper.ToEntity)
                .ToList();

            context.Hotels.AddRange(hotels);
            await context.SaveChangesAsync();
        }
    }
}