namespace ZaPutevkoi.API.Entities
{
    public class HotelEntity
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

        public List<HotelImageEntity> Images { get; set; } = new();
        public List<HotelSectionEntity> Sections { get; set; } = new();
        public HotelFiltersEntity Search { get; set; }
    }
}