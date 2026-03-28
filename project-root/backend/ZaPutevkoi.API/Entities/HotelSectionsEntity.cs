namespace ZaPutevkoi.API.Entities
{
    public class HotelSectionEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }

        public string ItemsJson { get; set; }

        public int HotelEntityId { get; set; }
        public HotelEntity Hotel { get; set; }
    }
}