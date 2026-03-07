import partnersData from "../data/partnersData";
import PartnerCard from "../components/partnerCard";

const PartnersContainer = () => {
  return (
    <div className="partners__container">
      {partnersData.map((item) => (
        <PartnerCard 
          key={item.id} 
          partner={item} 
        />
      ))}
    </div>
  );
};

export default PartnersContainer;