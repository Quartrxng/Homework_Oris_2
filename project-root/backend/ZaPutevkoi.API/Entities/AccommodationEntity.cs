namespace ZaPutevkoi.API.Entities
{
    public class AccommodationEntity
    {
        public int Id { get; set; }
        public int MaxAdults { get; set; }
        public int MaxChildren { get; set; }
        public int MaxGuests { get; set; }

        public int HotelFiltersEntityId { get; set; }
        public HotelFiltersEntity HotelFilters { get; set; }
    }
}