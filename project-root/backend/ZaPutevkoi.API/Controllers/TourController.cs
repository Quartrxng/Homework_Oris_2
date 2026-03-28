using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZaPutevkoi.API.data;
using ZaPutevkoi.API.Mappers;
using ZaPutevkoi.API.Models;

namespace ZaPutevkoi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TourController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateHotel([FromBody] Hotel hotel)
        {
            var entity = HotelMapper.ToEntity(hotel);

            _context.Hotels.Add(entity);
            await _context.SaveChangesAsync();

            var createdHotel = HotelMapper.ToModel(entity);

            return Ok(createdHotel);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHotel(int id, [FromBody] Hotel hotel)
        {
            var existingEntity = await _context.Hotels
                .Include(h => h.Images)
                .Include(h => h.Sections)
                .Include(h => h.Search)
                    .ThenInclude(s => s.Accommodation)
                .Include(h => h.Search)
                    .ThenInclude(s => s.Availability)
                .FirstOrDefaultAsync(h => h.Id == id);

            if (existingEntity == null)
                return NotFound();

            _context.Hotels.Remove(existingEntity);
            await _context.SaveChangesAsync();

            var newEntity = HotelMapper.ToEntity(hotel);
            newEntity.Id = id;

            _context.Hotels.Add(newEntity);
            await _context.SaveChangesAsync();

            return Ok(HotelMapper.ToModel(newEntity));
        }

        [HttpGet]
        public async Task<IActionResult> GetHotels([FromQuery] TourFilterRequest filters)
        {
            var entities = await _context.Hotels
                .Include(h => h.Images)
                .Include(h => h.Sections)
                .Include(h => h.Search)
                    .ThenInclude(s => s.Accommodation)
                .Include(h => h.Search)
                    .ThenInclude(s => s.Availability)
                .ToListAsync();

            var hotels = entities
                .Select(HotelMapper.ToModel)
                .AsQueryable();

            if (!string.IsNullOrWhiteSpace(filters.Country) && filters.Country != "Все страны")
                hotels = hotels.Where(h => h.Search.Country == filters.Country);

            if (!string.IsNullOrWhiteSpace(filters.Meal) && filters.Meal != "any")
                hotels = hotels.Where(h => h.Search.MealPlans.Contains(filters.Meal));

            if (filters.Rating.HasValue)
                hotels = hotels.Where(h => h.Rating >= filters.Rating.Value);

            if (filters.Stars.HasValue)
                hotels = hotels.Where(h => h.Stars >= filters.Stars.Value);

            if (filters.MaxPrice.HasValue)
                hotels = hotels.Where(h => h.Price <= filters.MaxPrice.Value);

            return Ok(hotels.ToList());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHotelById(int id)
        {
            var entity = await _context.Hotels
                .Include(h => h.Images)
                .Include(h => h.Sections)
                .Include(h => h.Search)
                    .ThenInclude(s => s.Accommodation)
                .Include(h => h.Search)
                    .ThenInclude(s => s.Availability)
                .FirstOrDefaultAsync(h => h.Id == id);

            if (entity == null)
                return NotFound();

            return Ok(HotelMapper.ToModel(entity));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel(int id)
        {
            var entity = await _context.Hotels
                .Include(h => h.Images)
                .Include(h => h.Sections)
                .Include(h => h.Search)
                    .ThenInclude(s => s.Accommodation)
                .Include(h => h.Search)
                    .ThenInclude(s => s.Availability)
                .FirstOrDefaultAsync(h => h.Id == id);

            if (entity == null)
                return NotFound();

            _context.Hotels.Remove(entity);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}