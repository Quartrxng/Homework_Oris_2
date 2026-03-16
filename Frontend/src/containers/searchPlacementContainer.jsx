import React, { useEffect, useMemo, useRef, useState } from 'react';
import SearchPlacement from '../components/searchPlacement';

const SearchPlacementContainer = ({ value = null, onChange }) => {
  const [placements, setPlacements] = useState([]);
  const [query, setQuery] = useState(value?.name || '');
  const [showTooltip, setShowTooltip] = useState(false);
  const [selected, setSelected] = useState(value);
  const [loading, setLoading] = useState(true);
  const lastConfirmed = useRef(value);

  useEffect(() => {
    const loadSearchItems = async () => {
      try {
        const response = await fetch('/api/hotelsData.json');
        if (!response.ok) throw new Error('Ошибка загрузки hotelsData.json');

        const data = await response.json();
        const hotels = data.hotelsData || [];

        const itemsMap = new Map();

        hotels.forEach((hotel) => {
          const hotelName = hotel?.name || '';
          const city = hotel?.search?.city || '';
          const country = hotel?.search?.country || '';

          if (hotelName) {
            const hotelKey = `hotel-${hotel.id || hotelName}`.toLowerCase();
            if (!itemsMap.has(hotelKey)) {
              itemsMap.set(hotelKey, {
                id: hotelKey,
                name: hotelName,
                city,
                country,
                type: 'hotel',
              });
            }
          }

          if (city) {
            const cityKey = `city-${country}-${city}`.toLowerCase();
            if (!itemsMap.has(cityKey)) {
              itemsMap.set(cityKey, {
                id: cityKey,
                name: city,
                city,
                country,
                type: 'city',
              });
            }
          }

          if (country) {
            const countryKey = `country-${country}`.toLowerCase();
            if (!itemsMap.has(countryKey)) {
              itemsMap.set(countryKey, {
                id: countryKey,
                name: country,
                city: '',
                country,
                type: 'country',
              });
            }
          }
        });

        setPlacements(Array.from(itemsMap.values()));
      } catch (error) {
        console.error('Ошибка загрузки hotelsData.json:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSearchItems();
  }, []);

  useEffect(() => {
    setSelected(value || null);
    setQuery(value?.name || '');
    lastConfirmed.current = value || null;
  }, [value]);

  const suggestions = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return placements
      .filter((item) => {
        if (!normalizedQuery) return true;

        const name = item.name.toLowerCase();

        if (item.type === 'hotel') {
          return name.includes(normalizedQuery);
        }

        if (item.type === 'city') {
          return name.includes(normalizedQuery);
        }

        if (item.type === 'country') {
          return name.includes(normalizedQuery);
        }

        return false;
      })
      .sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        const aStarts = aName.startsWith(normalizedQuery);
        const bStarts = bName.startsWith(normalizedQuery);

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        const typeOrder = {
          country: 0,
          city: 1,
          hotel: 2,
        };

        if (typeOrder[a.type] !== typeOrder[b.type]) {
          return typeOrder[a.type] - typeOrder[b.type];
        }

        return a.name.localeCompare(b.name, 'ru');
      })
      .slice(0, 9);
  }, [placements, query]);

  const handleSelect = (item) => {
    if (!item) {
      setSelected(null);
      setQuery('');
      lastConfirmed.current = null;
      onChange?.(null);
      setShowTooltip(true);
      return;
    }

    setSelected(item);
    setQuery(item.name);
    lastConfirmed.current = item;
    onChange?.(item);
    setShowTooltip(false);
  };

  const handleFocus = () => setShowTooltip(true);

  const handleBlur = () => {
    setTimeout(() => {
      setShowTooltip(false);

      if (lastConfirmed.current) {
        setSelected(lastConfirmed.current);
        setQuery(lastConfirmed.current.name);
      } else {
        setSelected(null);
        setQuery('');
      }
    }, 100);
  };

  if (loading) return <div>Загрузка...</div>;

  return (
    <SearchPlacement
      query={query}
      setQuery={setQuery}
      suggestions={suggestions}
      showTooltip={showTooltip}
      selected={selected}
      onSelect={handleSelect}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default SearchPlacementContainer;