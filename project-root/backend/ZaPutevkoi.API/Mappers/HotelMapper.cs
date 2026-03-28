using System.Text.Json;
using ZaPutevkoi.API.Entities;
using ZaPutevkoi.API.Models;

namespace ZaPutevkoi.API.Mappers
{
    public static class HotelMapper
    {
        public static HotelEntity ToEntity(Hotel model)
        {
            return new HotelEntity
            {
                Id = model.Id,
                Name = model.Name,
                Stars = model.Stars,
                Location = model.Location,
                Rating = model.Rating,
                RatingStatus = model.RatingStatus,
                DescriptionText = model.DescriptionText,
                Price = model.Price,
                Currency = model.Currency,

                Images = model.Images?.Select(x => new HotelImageEntity
                {
                    Path = x.Path
                }).ToList() ?? new List<HotelImageEntity>(),

                Sections = model.Sections?.Select(x => new HotelSectionEntity
                {
                    Title = x.Title,
                    ItemsJson = JsonSerializer.Serialize(x.Items ?? new List<string>())
                }).ToList() ?? new List<HotelSectionEntity>(),

                Search = model.Search == null ? null : new HotelFiltersEntity
                {
                    Country = model.Search.Country,
                    City = model.Search.City,
                    MealPlansJson = JsonSerializer.Serialize(model.Search.MealPlans ?? new List<string>()),
                    ServicesJson = JsonSerializer.Serialize(model.Search.Services ?? new List<string>()),

                    Accommodation = model.Search.Accommodation == null ? null : new AccommodationEntity
                    {
                        MaxAdults = model.Search.Accommodation.MaxAdults,
                        MaxChildren = model.Search.Accommodation.MaxChildren,
                        MaxGuests = model.Search.Accommodation.MaxGuests
                    },

                    Availability = model.Search.Availability?.Select(x => new AvailabilityPeriodEntity
                    {
                        From = x.From,
                        To = x.To
                    }).ToList() ?? new List<AvailabilityPeriodEntity>()
                }
            };
        }

        public static Hotel ToModel(HotelEntity entity)
        {
            return new Hotel
            {
                Id = entity.Id,
                Name = entity.Name,
                Stars = entity.Stars,
                Location = entity.Location,
                Rating = entity.Rating,
                RatingStatus = entity.RatingStatus,
                DescriptionText = entity.DescriptionText,
                Price = entity.Price,
                Currency = entity.Currency,

                Images = entity.Images?.Select(x => new HotelImage
                {
                    Path = x.Path
                }).ToList() ?? new List<HotelImage>(),

                Sections = entity.Sections?.Select(x => new HotelSection
                {
                    Title = x.Title,
                    Items = string.IsNullOrWhiteSpace(x.ItemsJson)
                        ? new List<string>()
                        : JsonSerializer.Deserialize<List<string>>(x.ItemsJson) ?? new List<string>()
                }).ToList() ?? new List<HotelSection>(),

                Search = entity.Search == null ? null : new HotelFilters
                {
                    Country = entity.Search.Country,
                    City = entity.Search.City,
                    MealPlans = string.IsNullOrWhiteSpace(entity.Search.MealPlansJson)
                        ? new List<string>()
                        : JsonSerializer.Deserialize<List<string>>(entity.Search.MealPlansJson) ?? new List<string>(),
                    Services = string.IsNullOrWhiteSpace(entity.Search.ServicesJson)
                        ? new List<string>()
                        : JsonSerializer.Deserialize<List<string>>(entity.Search.ServicesJson) ?? new List<string>(),

                    Accommodation = entity.Search.Accommodation == null ? null : new Accommodation
                    {
                        MaxAdults = entity.Search.Accommodation.MaxAdults,
                        MaxChildren = entity.Search.Accommodation.MaxChildren,
                        MaxGuests = entity.Search.Accommodation.MaxGuests
                    },

                    Availability = entity.Search.Availability?.Select(x => new AvailabilityPeriod
                    {
                        From = x.From,
                        To = x.To
                    }).ToList() ?? new List<AvailabilityPeriod>()
                }
            };
        }
    }
}