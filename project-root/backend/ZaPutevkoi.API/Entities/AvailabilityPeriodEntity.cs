namespace ZaPutevkoi.API.Entities
{
    public class AvailabilityPeriodEntity
    {
        public int Id { get; set; }
        public string From { get; set; }
        public string To { get; set; }

        public int HotelFiltersEntityId { get; set; }
        public HotelFiltersEntity HotelFilters { get; set; }
    }
}