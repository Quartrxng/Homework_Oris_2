using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;

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

        public string ImagesJson { get; set; }
        public string SectionsJson { get; set; }
        public string SearchJson { get; set; }

        [NotMapped]
        public List<string> Images
        {
            get
            {
                return string.IsNullOrEmpty(ImagesJson)
                ? new List<string>()
                : JsonSerializer.Deserialize<List<string>>(ImagesJson);
            }

            set => ImagesJson = JsonSerializer.Serialize(value);
        }

        [NotMapped]
        public List<HotelSection> Sections
        {
            get
            {
                return string.IsNullOrEmpty(SectionsJson)
                ? new List<HotelSection>()
                : JsonSerializer.Deserialize<List<HotelSection>>(SectionsJson);
            }

            set => SectionsJson = JsonSerializer.Serialize(value);
        }

        [NotMapped]
        public HotelFilters Search
        {
            get
            {
                return string.IsNullOrEmpty(SearchJson)
                ? new HotelFilters()
                : JsonSerializer.Deserialize<HotelFilters>(SearchJson);
            }

            set => SearchJson = JsonSerializer.Serialize(value);
        }
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