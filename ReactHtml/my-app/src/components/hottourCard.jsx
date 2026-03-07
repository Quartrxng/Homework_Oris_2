const HotTourCard = ({ tour, isLastInRow }) => {
  return (
    <div
      className="HotTourContainer HotContainer-ES ViewSquare"
      style={{
        width: "292.5px",
        borderWidth: "1px",
        "--card-border-radius": "0px",
        ...(isLastInRow ? {} : { marginRight: "10px" })
      }}
    >
      <div
        className="HotMainColor-ES"
        style={{
          width: "292.5px",
          height: "367px",
          "--discount-color": "#ffffff",
          "--rating-color": "#33af33",
          "--rating-background-color": "#e7f5e7"
        }}
      >
        <div className="HotTour">
          <div className="HotTourImageWrap">
            <div
              className="HotTourImage"
              style={{
                backgroundImage: `url(${tour.image})`,
                height: "150px"
              }}
            />
            <div className="HotTourDiscount">{tour.discount}</div>
          </div>

          <div className="HotTourInfo">
            {/* Тип или звезды */}
            {tour.type ? (
              <div className="HotTourInfoHotelStars HotActypeWrap">
                <div className="HotelAcType">{tour.type}</div>
              </div>
            ) : (
              <div className="HotTourInfoHotelStars">
                {[...Array(tour.stars)].map((_, i) => (
                  <div key={i} className="HotStarB"></div>
                ))}
              </div>
            )}

            <div
              className="HotTourInfoHotelName"
              title={tour.name}
            >
              {tour.name}
            </div>

            <div>
              <div className="HotTourInfoResort">{tour.resort}</div>
              <div className="HotTourInfoCountry">{tour.country}</div>
            </div>

            <div className="HotTourInfoDateNight">
              {tour.date}, {tour.nights}
            </div>

            <div className="HotTourInfoDeparture">
              из {tour.departure}
            </div>

            <div className="HotTourInfoPriceContainer">
              <div className="HotTourInfoOldPrice">
                <div className="HotTourInfoOldPriceValue">
                  {tour.oldPrice}
                </div>
                <div className="HotTourInfoOldPriceCurrency">
                  РУБ
                </div>
              </div>

              <div className="HotTourInfoPriceBlock">
                <div className="HotTourInfoNewPrice">
                  <div className="HotTourInfoNewPriceValue">
                    {tour.newPrice}
                  </div>
                  <div className="HotTourInfoNewPriceCurrency">
                    РУБ
                  </div>
                </div>
                <div className="HotTourInfoPriceIcon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotTourCard;