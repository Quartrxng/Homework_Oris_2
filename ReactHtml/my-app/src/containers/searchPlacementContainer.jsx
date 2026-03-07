import React, { useState, useMemo, useRef } from "react";
import placements from "../data/placementsData";
import SearchPlacement from "../components/searchPlacement";

const SearchPlacementContainer = () => {
  const [query, setQuery] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [selected, setSelected] = useState(null);

  const lastConfirmed = useRef(null);

  const suggestions = useMemo(() => {
    if (!query.trim()) return placements;

    return placements.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

const handleSelect = (item) => {
  if (!item) {
    setSelected(null);
    setQuery("");
    setShowTooltip(true);
    return;
  }

  setSelected(item);
  setQuery(item.name);
  lastConfirmed.current = item;
  setShowTooltip(false);
};

  const handleFocus = () => {
    setShowTooltip(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowTooltip(false);

      if (lastConfirmed.current) {
        setSelected(lastConfirmed.current);
        setQuery(lastConfirmed.current.name);
      } else {
        setQuery("");
      }
    }, 100);
  };

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