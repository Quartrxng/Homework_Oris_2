import { useEffect, useState } from 'react';
import FilterRadio from '../components/filtersRadio';

const fallbackFilters = [
  {
    type: 'meal',
    label: 'Питание',
    order: 1,
    defaultValue: 'any',
    displayMode: 'codeAndSuffix',
    displaySuffix: ' и лучше',
    options: [
      { value: 'any', label: 'Любой' },
      { value: 'bb', code: 'BB' },
      { value: 'hb', code: 'HB' },
      { value: 'fb', code: 'FB' },
      { value: 'ai', code: 'AI' },
      { value: 'uai', code: 'UAI' },
    ],
  },
  {
    type: 'rating',
    label: 'Рейтинг',
    order: 2,
    defaultValue: 'any',
    displayMode: 'codeAndSuffix',
    displaySuffix: ' и более',
    options: [
      { value: 'any', label: 'Любой' },
      { value: '3.0', code: '3,0' },
      { value: '3.5', code: '3,5' },
      { value: '4.0', code: '4,0' },
      { value: '4.5', code: '4,5' },
    ],
  },
  {
    type: 'beachLine',
    label: 'Пляж',
    order: 3,
    defaultValue: 'any',
    displayMode: 'labelOnly',
    options: [
      { value: 'any', label: 'Любой' },
      { value: '1', label: '1 линия' },
      { value: '2', label: '2 линия' },
      { value: '3', label: '3 линия и дальше' },
    ],
  },
];

const getDefaultValue = (filter) => {
  if (filter.defaultValue !== undefined) return filter.defaultValue;
  if (filter.options?.length) return filter.options[0].value;
  return '';
};

const formatOption = (filter, option) => {
  if (!option) return '';
  if (filter.displayMode === 'codeAndSuffix') {
    return option.value === 'any' ? (option.label || 'Любой') : `${option.code}${filter.displaySuffix || ''}`;
  }
  return option.label || option.code || option.value;
};

export default function FiltersContainer({ variant = 'default', value = {}, onChange }) {
  const [filters, setFilters] = useState(fallbackFilters);
  const [selectedValues, setSelectedValues] = useState(value);
  const [openFilter, setOpenFilter] = useState(null);

  useEffect(() => {
    const loadFilters = async () => {
      try {
        const response = await fetch('/api/filtersData.json');
        if (!response.ok) throw new Error('Ошибка загрузки filtersData.json');
        const data = await response.json();
        const dynamicFilters = data.dynamicFilters?.[variant] || fallbackFilters;
        setFilters(dynamicFilters);

        const initialState = dynamicFilters.reduce((acc, filter) => {
          acc[filter.type] = value[filter.type] ?? getDefaultValue(filter);
          return acc;
        }, {});

        setSelectedValues(initialState);
        onChange?.(initialState);
      } catch (error) {
        console.error('Ошибка загрузки фильтров:', error);
        const initialState = fallbackFilters.reduce((acc, filter) => {
          acc[filter.type] = value[filter.type] ?? getDefaultValue(filter);
          return acc;
        }, {});
        setFilters(fallbackFilters);
        setSelectedValues(initialState);
        onChange?.(initialState);
      }
    };

    loadFilters();
  }, [variant]);

  useEffect(() => {
    setSelectedValues((prev) => ({ ...prev, ...value }));
  }, [JSON.stringify(value)]);

  const handleChange = (filterType, nextValue) => {
    setSelectedValues((prev) => {
      const updated = { ...prev, [filterType]: nextValue };
      onChange?.(updated);
      return updated;
    });
  };

  return (
    <>
      {filters
        .slice()
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map((filter) => (
          <FilterRadio
            key={filter.type}
            type={filter.type}
            label={filter.label}
            options={filter.options || []}
            value={selectedValues[filter.type]}
            onChange={(nextValue) => handleChange(filter.type, nextValue)}
            isOpen={openFilter === filter.type}
            setOpenFilter={setOpenFilter}
            formatDisplay={(opt) => formatOption(filter, opt)}
          />
        ))}
    </>
  );
}
