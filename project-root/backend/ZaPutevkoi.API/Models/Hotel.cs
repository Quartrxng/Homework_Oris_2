using ZaPutevkoi.API.data;

namespace ZaPutevkoi.API.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Stars { get; set; }
        public string Location { get; set; }
        public double Rating { get; set; }
        public string RatingStatus { get; set; }
        public string DescriptionText { get; set; }
        public int Price { get; set; }
        public string Currency { get; set; }
        public List<string> Images { get; set; }
        public List<HotelSection> Sections { get; set; }
        public HotelFilters Search { get; set; }
    }

    public class Accommodation
    {
        public int MaxAdults { get; set; }
        public int MaxChildren { get; set; }
        public int MaxGuests { get; set; }
    }

    public class AvailabilityPeriod
    {
        public string From { get; set; }
        public string To { get; set; }
    }
    public class HotelSection
    {
        public string Title { get; set; }
        public List<string> Items { get; set; }
    }

    public class HotelFilters
    {
        public string Country { get; set; }
        public string City { get; set; }
        public List<string> MealPlans { get; set; }
        public List<string> Services { get; set; }
        public Accommodation Accommodation { get; set; }
        public List<AvailabilityPeriod> Availability { get; set; }
    }
}
