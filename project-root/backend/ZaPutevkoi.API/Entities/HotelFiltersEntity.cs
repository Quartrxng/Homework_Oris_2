namespace ZaPutevkoi.API.Entities
{
    public class HotelFiltersEntity
    {
        public int Id { get; set; }

        public string Country { get; set; }
        public string City { get; set; }

        public string MealPlansJson { get; set; }
        public string ServicesJson { get; set; }

        public AccommodationEntity Accommodation { get; set; }
        public List<AvailabilityPeriodEntity> Availability { get; set; } = new();

        public int HotelEntityId { get; set; }
        public HotelEntity Hotel { get; set; }
    }
}