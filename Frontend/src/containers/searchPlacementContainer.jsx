import React, { useMemo, useRef, useState } from 'react';
import SearchPlacement from '../components/searchPlacement';

const SearchPlacementContainer = ({ value = null, onChange }) => {
  const [query, setQuery] = useState(value?.name || '');
  const [selected, setSelected] = useState(value);
  const [showTooltip, setShowTooltip] = useState(false);
  const lastConfirmed = useRef(value);

  const suggestions = useMemo(() => {
    if (!selected) return [];
    return [selected];
  }, [selected]);

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
  const handleBlur = () => setTimeout(() => setShowTooltip(false), 100);

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