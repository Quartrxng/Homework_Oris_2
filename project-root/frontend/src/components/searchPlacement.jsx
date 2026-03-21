import React, { useRef, useEffect } from "react";

const SearchPlacement = ({
  query,
  setQuery,
  suggestions,
  showTooltip,
  selected,
  onSelect,
  onFocus,
  onBlur
}) => {
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const inputRef = useRef(null);

  // Автофокус если выбор сброшен
  useEffect(() => {
    if (!selected && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selected]);

  // Позиционирование tooltip
  useEffect(() => {
    const tooltip = tooltipRef.current;
    if (!showTooltip || !tooltip || !wrapperRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();

    tooltip.style.position = "absolute";
    tooltip.style.width = rect.width + "px";
    tooltip.style.left = rect.left + window.scrollX + "px";
    tooltip.style.top = rect.bottom + window.scrollY + 10 + "px";

    return () => {
      tooltip.style.position = "";
      tooltip.style.width = "";
      tooltip.style.left = "";
      tooltip.style.top = "";
    };
  }, [showTooltip, query]);

  return (
    <div className="search--filter" ref={wrapperRef}>
      <div className="search--placements style--maintheme">
        <div className="placements--search__placeholder">
          Направление
        </div>

        <div className="placements--search__content">
          {!selected ? (
            <div className="placement--search__input">
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder="Введите город или название отеля"
              />

              <div
                ref={tooltipRef}
                className={`tooltip ${
                  showTooltip ? "search--show" : "search--hide"
                }`}
              >
                <div className="TVAutocompleteTooltipContent tour--search--result">
                  <div className="TVAutocompleteListControl">
                    <div className="search--auto--complete tour--search--result--region">
                      <div className="search--list__box search--auto--complete--item tour--search--result--item">

                        {suggestions.map((item) => (
                          <div
                            key={item.id}
                            className="search--item"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              onSelect(item);
                            }}
                          >
                            <div className="tour--search--input--result--item">
                              <div className="tour--search--input--result--item__icon">
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 16 16"
                                  fill="#5c6672"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                  />
                                </svg>
                              </div>
                              <div className="tour--search--input--result--item--info">
                                <div className="tour--search--input--result--item__title">
                                  {item.name}
                                </div>
                                <div className="tour--search--input--result--item__description">
                                  {item.country}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        {suggestions.length === 0 && (
                          <div className="autocomplete--tooltip__empty">
                            Ничего не найдено
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="tour--search__content"
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(null)}
            >
              <div className="tour--search__maincontent">
                {selected.name}
              </div>
              <div className="tour--search__detailcontent">
                ({selected.country})
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPlacement;