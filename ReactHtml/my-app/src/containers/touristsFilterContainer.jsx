import React, { useState, useRef, useEffect } from "react";
import TouristsFilter from "../components/touristFilter";

const TouristsFilterContainer = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showAgeSelector, setShowAgeSelector] = useState(false);

  const filterRef = useRef(null);
  const tooltipRef = useRef(null);

  const formatChildAge = (age) => {
    if (age <= 1) return "до 2 лет";
    if (age >= 2 && age <= 4) return `${age} года`;
    return `${age} лет`;
  };

  const incrementAdults = () => {
    if (adults < 6) setAdults(adults + 1);
  };

  const decrementAdults = () => {
    if (adults > 1) setAdults(adults - 1);
  };

  const addChild = (age) => {
    if (children.length < 3) {
      setChildren([...children, age]);
      setShowAgeSelector(false);
    }
  };

  const removeChild = (index) => {
    const updated = [...children];
    updated.splice(index, 1);
    setChildren(updated);
  };

const toggleTooltip = () => {
  if (!isOpen) {
    const rect = filterRef.current.getBoundingClientRect();
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    setTooltipStyle({
      top: rect.bottom + scrollTop + 10,
      left: rect.left + scrollLeft,
      opacity: 1,
      visibility: "visible",
    });
  }

  setIsOpen(!isOpen);
};

const closeTooltip = () => {
  setIsOpen(false);
  setTooltipStyle((prev) => ({
    ...prev,
    opacity: 0,
    visibility: "hidden",
  }));
};
  const [tooltipStyle, setTooltipStyle] = useState({
    top: 0,
    left: 0,
    opacity: 0,
    visibility: "hidden",
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target) &&
        !filterRef.current.contains(e.target)
      ) {
        closeTooltip();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const childCount = children.length;
  const totalTourists = adults + childCount;

  let displayText = adults > 1 ? `${adults} взрослых`: `${adults} взрослый`;
  if (childCount > 0) {
    displayText += `, ${childCount} ${
      childCount === 1
        ? "ребёнок"
        : childCount >= 2 && childCount <= 4
        ? "ребенка"
        : "детей"
    }`;
  }

  return (
    <TouristsFilter
      adults={adults}
      children={children}
      totalTourists={totalTourists}
      displayText={displayText}
      isOpen={isOpen}
      showAgeSelector={showAgeSelector}
      formatChildAge={formatChildAge}
      incrementAdults={incrementAdults}
      decrementAdults={decrementAdults}
      addChild={addChild}
      removeChild={removeChild}
      toggleTooltip={toggleTooltip}
      closeTooltip={closeTooltip}
      setShowAgeSelector={setShowAgeSelector}
      filterRef={filterRef}
      tooltipRef={tooltipRef}
      tooltipStyle={tooltipStyle}
    />
  );
};

export default TouristsFilterContainer;