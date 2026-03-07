import toursData from "../data/hottoursData";
import {filtersData} from "../data/filtersData";
import HotTourCard from "../components/hottourCard";
import FiltersBlock from "../components/filtersBlock";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const HotToursContainer = ({variant = 'variant2'}) => {
  const groupedTours = chunkArray(toursData, 4);

  return (
    <>
      <div className="FilterListHotsControl">
        <FiltersBlock filtersconfig={filtersData[variant]} variant={variant} />
      </div>
      <div className="ListHotsControl" style={{ '--list-padding': '2px 0' }}>
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