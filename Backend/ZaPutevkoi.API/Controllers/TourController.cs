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
        // GET: api/<TourController>
        [HttpGet]
        public IActionResult GetHotels()
        {
            return Ok(new { hotelsData = DataSeed.HotelsData });
        }

        // GET api/<TourController>/5
        [HttpGet("{id}")]
        public IActionResult GetHotelById(int id)
        {
            return Ok(new { hotelsData = DataSeed.HotelsData.FirstOrDefault(hotel => id == hotel.Id ) });
        }

    }
}
