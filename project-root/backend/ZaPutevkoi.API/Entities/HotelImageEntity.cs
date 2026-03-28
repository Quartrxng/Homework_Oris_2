namespace ZaPutevkoi.API.Entities
{
    public class HotelImageEntity
    {
        public int Id { get; set; }
        public string Path { get; set; }

        public int HotelEntityId { get; set; }
        public HotelEntity Hotel { get; set; }
    }
}