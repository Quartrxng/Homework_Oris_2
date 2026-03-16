using Microsoft.AspNetCore.Mvc;
using ZaPutevkoi.API.data;

namespace ZaPutevkoi.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilterController : ControllerBase
    {
        // GET: api/<TourController>
        [HttpGet]
        public IActionResult GetFilters()
        {
            return Ok(new { filterData = DataSeed.FilterData });
        }
    }
}
