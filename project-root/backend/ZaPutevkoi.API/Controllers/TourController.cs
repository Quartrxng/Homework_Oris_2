using Microsoft.AspNetCore.Mvc;
using ZaPutevkoi.API.data;
using ZaPutevkoi.API.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ZaPutevkoi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TourController : ControllerBase
    {
        // GET: api/tour?country=Турция&meal=ai&rating=4.0&stars=4&maxPrice=10000
        [HttpGet]
        public IActionResult GetHotels([FromQuery] TourFilterRequest filters)
        {
            var hotels = DataSeed.HotelsData.AsQueryable();

            if (!string.IsNullOrWhiteSpace(filters.Country) && filters.Country != "Все страны")
            {
                hotels = hotels.Where(h => h.Search.Country == filters.Country);
            }

            if (!string.IsNullOrWhiteSpace(filters.Meal) && filters.Meal != "any")
            {
                hotels = hotels.Where(h => h.Search.MealPlans.Contains(filters.Meal));
            }

            if (filters.Rating.HasValue)
            {
                hotels = hotels.Where(h => h.Rating >= filters.Rating.Value);
            }

            if (filters.Stars.HasValue)
            {
                hotels = hotels.Where(h => h.Stars >= filters.Stars.Value);
            }

            if (filters.MaxPrice.HasValue)
            {
                hotels = hotels.Where(h => h.Price <= filters.MaxPrice.Value);
            }

            return Ok(new { hotelsData = hotels.ToList() });
        }

        // GET api/<TourController>/5
        [HttpGet("{id}")]
        public IActionResult GetHotelById(int id)
        {
            return Ok(new { hotelsData = DataSeed.HotelsData.FirstOrDefault(hotel => id == hotel.Id ) });
        }

    }
}
