import React, { useEffect, useState } from "react";
import HotTourCard from "../components/hottourCard";
import FiltersBlock from "../components/filtersBlock";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const HotToursContainer = ({ variant = "variant2" }) => {
  const [toursData, setToursData] = useState([]);
  const [filtersData, setFiltersData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [toursResponse, filtersResponse] = await Promise.all([
          fetch("/api/hottoursData.json"),
          fetch("/api/filtersData.json")
        ]);

        if (!toursResponse.ok) {
          throw new Error("Ошибка загрузки hottoursData.json");
        }

        if (!filtersResponse.ok) {
          throw new Error("Ошибка загрузки filtersData.json");
        }

        const tours = await toursResponse.json();
        const filters = await filtersResponse.json();

        setToursData(tours.toursData || []);
        setFiltersData(filters.filtersData || {});
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const groupedTours = chunkArray(toursData, 4);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!filtersData[variant]) {
    return <div>Фильтры не найдены</div>;
  }

  return (
    <>
      <div className="FilterListHotsControl">
        <FiltersBlock
          filtersconfig={filtersData[variant]}
          variant={variant}
        />
      </div>

      <div className="ListHotsControl" style={{ "--list-padding": "2px 0" }}>
        <div className="TableView">
          {groupedTours.map((group, index) => (
            <div
              key={index}
              className="VisibleArea"
              style={{ marginTop: "10px" }}
            >
              {group.map((tour, i) => (
                <HotTourCard
                  key={tour.id}
                  tour={tour}
                  isLastInRow={i === 3}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="EmptyList Hide"></div>
    </>
  );
};

export default HotToursContainer;