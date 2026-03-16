using ZaPutevkoi.API.Models;

namespace ZaPutevkoi.API.data
{
    public class DataSeed
    {
        public static List<Hotel> HotelsData => new List<Hotel>
        {
            new Hotel
            {
                Id = 1,
                Name = "Adults Only 5*",
                Stars = 5,
                Location = "Россия, Геленджик",
                Rating = 4.9,
                RatingStatus = "verygood",
                DescriptionText = "Отель только для взрослых",
                Price = 11000,
                Currency = "РУБ",
                Images = new List<string>
                {
                    "/hotels/data/Россия/Геленджик/4/adults1_1.jpg",
                    "/hotels/data/Россия/Геленджик/4/adults1.jpg"
                },
                Sections = new List<HotelSection>
                {
                    new HotelSection
                    {
                        Title = "Общая информация",
                        Items = new List<string>
                        {
                            "Премиальный отель",
                            "Первая линия",
                            "Тел: +78614112233"
                        }
                    },
                    new HotelSection
                    {
                        Title = "Эксклюзивный досуг",
                        Items = new List<string>
                        {
                            "Личный консьерж",
                            "Спа-ритуалы для пар",
                            "Винные дегустации"
                        }
                    },
                    new HotelSection
                    {
                        Title = "Правила клуба",
                        Items = new List<string>
                        {
                            "Строго 18+",
                            "Dress-code: Smart Casual",
                            "No kids policy"
                        }
                    }
                },
                Search = new HotelFilters
                {
                    Country = "Россия",
                    City = "Геленджик",
                    MealPlans = new List<string> { "bb", "hb", "ai" },
                    Services = new List<string> { "wifi", "spa", "beach", "pool" },
                    Accommodation = new Accommodation
                    {
                        MaxAdults = 2,
                        MaxChildren = 0,
                        MaxGuests = 2
                    },
                    Availability = new List<AvailabilityPeriod>
                    {
                        new AvailabilityPeriod
                        {
                            From = "2026-03-01",
                            To = "2026-12-31"
                        }
                    }
                }
            },

            new Hotel
            {
                Id = 5,
                Name = "Family Resort 4*",
                Stars = 4,
                Location = "Турция, Анталия",
                Rating = 4.4,
                RatingStatus = "good",
                DescriptionText = "Семейный курорт с аквапарком",
                Price = 8700,
                Currency = "РУБ",
                Images = new List<string>
                {
                    "/hotels/data/Турция/Геленджик/5/beach1.jpg",
                    "/hotels/data/Турция/Геленджик/5/beach1_1.jpg"
                },
                Sections = new List<HotelSection>
                {
                    new HotelSection
                    {
                        Title = "Общая информация",
                        Items = new List<string>
                        {
                            "Семейный отель",
                            "Собственный пляж",
                            "Детская анимация"
                        }
                    }
                },
                Search = new HotelFilters
                {
                    Country = "Турция",
                    City = "Анталия",
                    MealPlans = new List<string> { "hb", "fb", "ai", "uai" },
                    Services = new List<string> { "wifi", "pool", "parking", "beach" },
                    Accommodation = new Accommodation
                    {
                        MaxAdults = 4,
                        MaxChildren = 3,
                        MaxGuests = 5
                    },
                    Availability = new List<AvailabilityPeriod>
                    {
                        new AvailabilityPeriod
                        {
                            From = "2026-04-01",
                            To = "2026-11-15"
                        }
                    }
                }
            },

            new Hotel
            {
                Id = 3,
                Name = "City Comfort 3*",
                Stars = 3,
                Location = "Россия, Анапа",
                Rating = 3.9,
                RatingStatus = "normal",
                DescriptionText = "Городской отель рядом с набережной",
                Price = 5900,
                Currency = "РУБ",
                Images = new List<string>
                {
                    "/hotels/data/Россия/Анапа/3/family1.jpg",
                    "/hotels/data/Россия/Анапа/3/family1_1.jpg"
                },
                Sections = new List<HotelSection>
                {
                    new HotelSection
                    {
                        Title = "Общая информация",
                        Items = new List<string>
                        {
                            "Городской отель",
                            "Подходит для коротких поездок"
                        }
                    }
                },
                Search = new HotelFilters
                {
                    Country = "Россия",
                    City = "Анапа",
                    MealPlans = new List<string> { "bb" },
                    Services = new List<string> { "wifi", "parking" },
                    Accommodation = new Accommodation
                    {
                        MaxAdults = 3,
                        MaxChildren = 1,
                        MaxGuests = 3
                    },
                    Availability = new List<AvailabilityPeriod>
                    {
                        new AvailabilityPeriod
                        {
                            From = "2026-03-01",
                            To = "2026-10-31"
                        }
                    }
                }
            },

            new Hotel
            {
                Id = 6,
                Name = "Mountain View Chalet 4*",
                Stars = 4,
                Location = "Россия, Красная Поляна",
                Rating = 4.2,
                RatingStatus = "good",
                DescriptionText = "Уютный горный отель рядом с канатной дорогой",
                Price = 7600,
                Currency = "РУБ",
                Images = new List<string>
                {
                    "/hotels/data/Россия/Красная Поляна/6/mountain1.jpg",
                    "/hotels/data/Россия/Красная Поляна/6/mountain1_1.jpg"
                },
                Sections = new List<HotelSection>
                {
                    new HotelSection
                    {
                        Title = "Общая информация",
                        Items = new List<string>
                        {
                            "Горный отель",
                            "Панорамный вид",
                            "Рядом с подъемником"
                        }
                    },
                    new HotelSection
                    {
                        Title = "Инфраструктура",
                        Items = new List<string>
                        {
                            "Сауна",
                            "Ресторан",
                            "Лыжная комната"
                        }
                    },
                    new HotelSection
                    {
                        Title = "Удобства",
                        Items = new List<string>
                        {
                            "Бесплатный Wi-Fi",
                            "Парковка",
                            "Завтраки включены"
                        }
                    }
                },
                Search = new HotelFilters
                {
                    Country = "Россия",
                    City = "Красная Поляна",
                    MealPlans = new List<string> { "bb", "hb" },
                    Services = new List<string> { "wifi", "parking", "sauna", "restaurant" },
                    Accommodation = new Accommodation
                    {
                        MaxAdults = 4,
                        MaxChildren = 2,
                        MaxGuests = 4
                    },
                    Availability = new List<AvailabilityPeriod>
                    {
                        new AvailabilityPeriod
                        {
                            From = "2026-01-10",
                            To = "2026-12-31"
                        }
                    }
                }
            },

            new Hotel
            {
                Id = 7,
                Name = "Sea Breeze Hotel 5*",
                Stars = 5,
                Location = "Египет, Хургада",
                Rating = 4.7,
                RatingStatus = "verygood",
                DescriptionText = "Пляжный отель с системой Ultra All Inclusive",
                Price = 9800,
                Currency = "РУБ",
                Images = new List<string>
                {
                    "/hotels/data/Египет/Хургада/7/hotel1.jpg",
                    "/hotels/data/Египет/Хургада/7/hotel1_1.jpg",
                    "/hotels/data/Египет/Хургада/7/hotel1_2.jpg"
                },
                Sections = new List<HotelSection>
                {
                    new HotelSection
                    {
                        Title = "Общая информация",
                        Items = new List<string>
                        {
                            "Курортный отель",
                            "Первая береговая линия",
                            "Собственный песчаный пляж"
                        }
                    },
                    new HotelSection
                    {
                        Title = "Инфраструктура",
                        Items = new List<string>
                        {
                            "3 бассейна",
                            "Спа-центр",
                            "Тренажерный зал"
                        }
                    },
                    new HotelSection
                    {
                        Title = "Для гостей",
                        Items = new List<string>
                        {
                            "Ultra All Inclusive",
                            "Ежедневная анимация",
                            "Трансфер до аэропорта"
                        }
                    }
                },
                Search = new HotelFilters
                {
                    Country = "Египет",
                    City = "Хургада",
                    MealPlans = new List<string> { "ai", "uai" },
                    Services = new List<string> { "wifi", "spa", "beach", "pool", "transfer" },
                    Accommodation = new Accommodation
                    {
                        MaxAdults = 3,
                        MaxChildren = 2,
                        MaxGuests = 4
                    },
                    Availability = new List<AvailabilityPeriod>
                    {
                        new AvailabilityPeriod
                        {
                            From = "2026-03-15",
                            To = "2026-12-20"
                        }
                    }
                }
            }
        };
        public static FiltersData FilterData => new FiltersData
        {
            Variant2 = new VariantConfig
            {
                Filters = new List<FilterItem>
                {
                    new FilterItem
                    {
                        Type = "departure",
                        Order = 1,
                        Placeholder = "Город вылета",
                        Value = "Без перелета",
                        Options = new List<string>
                        {
                            "Без перелета",
                            "Москва",
                            "Санкт-Петербург",
                            "Казань",
                            "Екатеринбург"
                        }
                    },
                    new FilterItem
                    {
                        Type = "country",
                        Order = 2,
                        Placeholder = "Страна",
                        Options = new List<string>
                        {
                            "Все страны",
                            "Индия",
                            "Таиланд",
                            "Турция",
                            "Египет"
                        }
                    },
                    new FilterItem
                    {
                        Type = "flyDates",
                        Order = 3,
                        Placeholder = "Даты вылета",
                        Options = new List<string>
                        {
                            "На любое",
                            "Март",
                            "Апрель",
                            "Май",
                            "Июнь"
                        }
                    },
                    new FilterItem
                    {
                        Type = "stars",
                        Order = 4,
                        Title = "Отель",
                        ActiveStars = 1,
                        MaxStars = 5,
                        Size = "S"
                    },
                    new FilterItem
                    {
                        Type = "budget",
                        Order = 5,
                        Placeholder = "Бюджет (РУБ)",
                        Currency = "РУБ"
                    },
                    new FilterItem
                    {
                        Type = "hideButton",
                        Order = 6
                    }
                }
            },

            DynamicFilters = new DynamicFiltersContainer
            {
                Default = new List<DynamicFilterItem>
                {
                    new DynamicFilterItem
                    {
                        Type = "meal",
                        Label = "Питание",
                        Order = 1,
                        DefaultValue = "any",
                        DisplayMode = "codeAndSuffix",
                        DisplaySuffix = " и лучше",
                        Options = new List<DynamicFilterOption>
                        {
                            new DynamicFilterOption { Value = "any", Label = "Любой" },
                            new DynamicFilterOption { Value = "bb", Code = "BB", Description = " - Только завтрак" },
                            new DynamicFilterOption { Value = "hb", Code = "HB", Description = " - Завтрак, ужин" },
                            new DynamicFilterOption { Value = "fb", Code = "FB", Description = " - Полный пансион" },
                            new DynamicFilterOption { Value = "ai", Code = "AI", Description = " - Все включено" },
                            new DynamicFilterOption { Value = "uai", Code = "UAI", Description = " - Ультра все включено" }
                        }
                    },
                    new DynamicFilterItem
                    {
                        Type = "rating",
                        Label = "Рейтинг",
                        Order = 2,
                        DefaultValue = "any",
                        DisplayMode = "codeAndSuffix",
                        DisplaySuffix = " и более",
                        Options = new List<DynamicFilterOption>
                        {
                            new DynamicFilterOption { Value = "any", Label = "Любой" },
                            new DynamicFilterOption { Value = "3.0", Code = "3,0" },
                            new DynamicFilterOption { Value = "3.5", Code = "3,5" },
                            new DynamicFilterOption { Value = "4.0", Code = "4,0" },
                            new DynamicFilterOption { Value = "4.5", Code = "4,5" }
                        }
                    }
                }
            },

            ServicesData = new List<ServiceItem>
            {
                new ServiceItem { Id = 1, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "Спортзал", ServiceOrder = 1 },
                new ServiceItem { Id = 2, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "Теннис", ServiceOrder = 2 },
                new ServiceItem { Id = 3, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "Футбол", ServiceOrder = 3 },
                new ServiceItem { Id = 4, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "Бассейн", ServiceOrder = 4 },
                new ServiceItem { Id = 5, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "Новый отель", ServiceOrder = 5 },
                new ServiceItem { Id = 6, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "Бассейн с подогревом", ServiceOrder = 6 },
                new ServiceItem { Id = 7, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "Водные горки", ServiceOrder = 7 },
                new ServiceItem { Id = 8, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "СПА-центр", ServiceOrder = 8 },
                new ServiceItem { Id = 9, CategoryName = "Территория", CategoryOrder = 1, ServiceName = "Ресторан/кафе", ServiceOrder = 9 },

                new ServiceItem { Id = 10, CategoryName = "Услуги", CategoryOrder = 2, ServiceName = "Анимация", ServiceOrder = 1 },
                new ServiceItem { Id = 11, CategoryName = "Услуги", CategoryOrder = 2, ServiceName = "Дискотека", ServiceOrder = 2 },
                new ServiceItem { Id = 12, CategoryName = "Услуги", CategoryOrder = 2, ServiceName = "Wi-Fi", ServiceOrder = 3 },
                new ServiceItem { Id = 13, CategoryName = "Услуги", CategoryOrder = 2, ServiceName = "Только для взрослых", ServiceOrder = 4 },

                new ServiceItem { Id = 14, CategoryName = "Номер", CategoryOrder = 3, ServiceName = "Кухня в номере", ServiceOrder = 1 },
                new ServiceItem { Id = 15, CategoryName = "Номер", CategoryOrder = 3, ServiceName = "Балкон в номере", ServiceOrder = 2 },
                new ServiceItem { Id = 16, CategoryName = "Номер", CategoryOrder = 3, ServiceName = "Wi-Fi в номере", ServiceOrder = 3 },
                new ServiceItem { Id = 17, CategoryName = "Номер", CategoryOrder = 3, ServiceName = "Кондиционер", ServiceOrder = 4 },
                new ServiceItem { Id = 18, CategoryName = "Номер", CategoryOrder = 3, ServiceName = "Размещение с животными", ServiceOrder = 5 },

                new ServiceItem { Id = 19, CategoryName = "Для детей", CategoryOrder = 4, ServiceName = "Детская анимация", ServiceOrder = 1 },
                new ServiceItem { Id = 20, CategoryName = "Для детей", CategoryOrder = 4, ServiceName = "Детская площадка", ServiceOrder = 2 },
                new ServiceItem { Id = 21, CategoryName = "Для детей", CategoryOrder = 4, ServiceName = "Водные горки для детей", ServiceOrder = 3 },
                new ServiceItem { Id = 22, CategoryName = "Для детей", CategoryOrder = 4, ServiceName = "Детское меню", ServiceOrder = 4 },
                new ServiceItem { Id = 23, CategoryName = "Для детей", CategoryOrder = 4, ServiceName = "Мини-клуб", ServiceOrder = 5 },

                new ServiceItem { Id = 24, CategoryName = "Доп.фильтры", CategoryOrder = 5, ServiceName = "Мгновенное подтверждение", ServiceOrder = 1 },

                new ServiceItem { Id = 25, CategoryName = "Тип отеля", CategoryOrder = 6, ServiceName = "Активный", ServiceOrder = 1 },
                new ServiceItem { Id = 26, CategoryName = "Тип отеля", CategoryOrder = 6, ServiceName = "Городской", ServiceOrder = 2 },
                new ServiceItem { Id = 27, CategoryName = "Тип отеля", CategoryOrder = 6, ServiceName = "Семейный", ServiceOrder = 3 },
                new ServiceItem { Id = 28, CategoryName = "Тип отеля", CategoryOrder = 6, ServiceName = "VIP", ServiceOrder = 4 }
            }
        };  
    }
}