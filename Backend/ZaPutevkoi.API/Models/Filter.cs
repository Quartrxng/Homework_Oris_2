using System.Text.Json.Serialization;

namespace ZaPutevkoi.API.Models
{
    public class FiltersData
    {
        public VariantConfig Variant2 { get; set; }

        public DynamicFiltersContainer DynamicFilters { get; set; }
        public List<ServiceItem> ServicesData { get; set; }
    }

    public class VariantConfig
    {
        public List<FilterItem> Filters { get; set; }
    }

    public class FilterItem
    {
        public string Type { get; set; }

        public int Order { get; set; }

        public string Placeholder { get; set; }

        public string Value { get; set; }

        public List<string> Options { get; set; }

        public string Title { get; set; }

        public int? ActiveStars { get; set; }

        public int? MaxStars { get; set; }

        public string Size { get; set; }

        public string Currency { get; set; }
    }

    public class DynamicFiltersContainer
    {
        public List<DynamicFilterItem> Default { get; set; }
    }

    public class DynamicFilterItem
    {
        public string Type { get; set; }

        public string Label { get; set; }

        public int Order { get; set; }

        public string DefaultValue { get; set; }

        public string DisplayMode { get; set; }

        public string DisplaySuffix { get; set; }

        public List<DynamicFilterOption> Options { get; set; }
    }

    public class DynamicFilterOption
    {
        public string Value { get; set; }

        public string Label { get; set; }

        public string Code { get; set; }

        public string Description { get; set; }
    }

    public class ServiceItem
    {
        public int Id { get; set; }

        [JsonPropertyName("category_Name")]
        public string CategoryName { get; set; }

        [JsonPropertyName("category_Order")]
        public int CategoryOrder { get; set; }

        [JsonPropertyName("service_Name")]
        public string ServiceName { get; set; }

        [JsonPropertyName("service_Order")]
        public int ServiceOrder { get; set; }
    }
}
