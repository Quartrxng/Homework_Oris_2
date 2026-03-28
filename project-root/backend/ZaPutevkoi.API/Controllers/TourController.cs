using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ZaPutevkoi.API.data;
using ZaPutevkoi.API.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
        // GET: api/tour?country=Турция&meal=ai&rating=4.0&stars=4&maxPrice=10000
        //[HttpGet]
        //public async Task<IActionResult> GetHotels([FromQuery] TourFilterRequest filters)
        //{
        //    var hotels = DataSeed.HotelsData.AsQueryable();

        //    if (!string.IsNullOrWhiteSpace(filters.Country) && filters.Country != "Все страны")
        //    {
        //        hotels = hotels.Where(h => h.Search.Country == filters.Country);
        //    }

        //    if (!string.IsNullOrWhiteSpace(filters.Meal) && filters.Meal != "any")
        //    {
        //        hotels = hotels.Where(h => h.Search.MealPlans.Contains(filters.Meal));
        //    }

        //    if (filters.Rating.HasValue)
        //    {
        //        hotels = hotels.Where(h => h.Rating >= filters.Rating.Value);
        //    }

        //    if (filters.Stars.HasValue)
        //    {
        //        hotels = hotels.Where(h => h.Stars >= filters.Stars.Value);
        //    }

        //    if (filters.MaxPrice.HasValue)
        //    {
        //        hotels = hotels.Where(h => h.Price <= filters.MaxPrice.Value);
        //    }

        //    return Ok(new { hotelsData = hotels.ToList() });
        //}

        //// GET api/<TourController>/5
        //[HttpGet("{id}")]
        //public async Task<IActionResult> GetHotelById(int id)
        //{
        //    return Ok(new { hotelsData = DataSeed.HotelsData.FirstOrDefault(hotel => id == hotel.Id ) });
        //}

        // Post api/<TourController>/
        [HttpPost]
        public async Task<IActionResult> CreateHotel([FromBody]Hotel hotel) {
            try
            {
                _context.Hotels.Add(hotel);
                await _context.SaveChangesAsync();
                return Ok(hotel);
            }
            catch (Exception ex) 
            { 
                return BadRequest(ex.Message);
            }
        }

        // Post api/<TourController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHotel(int id, [FromBody] Hotel hotel)
        {
            if (hotel.Id != 0 && hotel.Id != id)
                return BadRequest("Id отличаются");
            var existingHotel = await _context.Hotels.FindAsync(id);
            if (existingHotel != null)
            {
                existingHotel.Name = hotel.Name;
                existingHotel.Stars = hotel.Stars;
                existingHotel.Location = hotel.Location;
                existingHotel.Rating = hotel.Rating;
                existingHotel.RatingStatus = hotel.RatingStatus;
                existingHotel.DescriptionText = hotel.DescriptionText;
                existingHotel.Price = hotel.Price;
                existingHotel.Currency = hotel.Currency;
                existingHotel.ImagesJson = hotel.ImagesJson;
                existingHotel.SectionsJson = hotel.SectionsJson;
                existingHotel.SearchJson = hotel.SearchJson;
                await _context.SaveChangesAsync();
                return Ok(existingHotel);
            }
            return NotFound();
        }

        //[HttpGet]
        //public async Task<IActionResult> GetAllHotels()
        //{
        //    var hotels = await _context.Hotels.ToListAsync();
        //    return Ok(hotels);
        //}

        [HttpGet]
        public async Task<IActionResult> GetHotelByQuery([FromQuery] TourFilterRequest filters)
        {

            var query = _context.Hotels.AsQueryable();

            if (filters.Rating.HasValue)
                query = query.Where(h => h.Rating >= filters.Rating.Value);

            if (filters.Stars.HasValue)
                query = query.Where(h => h.Stars >= filters.Stars.Value);

            if (filters.MaxPrice.HasValue)
                query = query.Where(h => h.Price <= filters.MaxPrice.Value);

            var hotels = await query.ToListAsync();

            if (!string.IsNullOrWhiteSpace(filters.Country) && filters.Country != "Все страны")
                hotels = hotels.Where(h => h.Search.Country == filters.Country).ToList();

            if (!string.IsNullOrWhiteSpace(filters.Meal) && filters.Meal != "any")
                hotels = hotels.Where(h => h.Search.MealPlans.Contains(filters.Meal)).ToList();
            return Ok(hotels);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetHotelsById(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel != null)
            {
                return Ok(hotel);
            }

            return NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);

            if (hotel == null)
                return NotFound();

            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
