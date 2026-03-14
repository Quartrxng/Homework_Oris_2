import React, { useEffect, useState } from "react";
import FiltersBlock from "../components/filtersBlock";
import CalendarBody from "./calendarBodyContainer";

const CalendarPriceContainer = ({ variant = "variant1" }) => {
  const [filtersData, setFiltersData] = useState({});
  const [calendarData, setCalendarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [filtersResponse, calendarResponse] = await Promise.all([
          fetch("/api/filtersData.json"),
          fetch("/api/calendarPriceData.json")
        ]);

        if (!filtersResponse.ok) {
          throw new Error("Ошибка загрузки filtersData.json");
        }

        if (!calendarResponse.ok) {
          throw new Error("Ошибка загрузки calendarPriceData.json");
        }

        const filters = await filtersResponse.json();
        const calendar = await calendarResponse.json();

        setFiltersData(filters.filtersData || {});
        setCalendarData(calendar);
      } catch (error) {
        console.error("Ошибка загрузки календаря:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return null;
  }

  if (!filtersData[variant]) {
    return null;
  }

  return (
    <div className="Calendar DTCalendar">
      <FiltersBlock
        filtersconfig={filtersData[variant]}
        variant={variant}
      />

      <CalendarBody countries={calendarData} />

      <div className="CalendarFooter CalMainColor">
        <div className="CalShowAll"></div>
      </div>
    </div>
  );
};

export default CalendarPriceContainer;