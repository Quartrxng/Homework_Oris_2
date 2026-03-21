import React from "react";

const ages = Array.from({ length: 16 }, (_, i) => i);

const columns = [
  ages.slice(0, 5),
  ages.slice(5, 10),
  ages.slice(10, 15),
];

const TouristsFilter = ({
  adults,
  children,
  totalTourists,
  displayText,
  isOpen,
  showAgeSelector,
  formatChildAge,
  incrementAdults,
  decrementAdults,
  addChild,
  removeChild,
  toggleTooltip,
  closeTooltip,
  setShowAgeSelector,
  filterRef,
  tooltipRef,
  tooltipStyle,
}) => {
  return (
    <>
      <div
        className="toursist--filter BorderRightNone"
        onClick={toggleTooltip}
        ref={filterRef}
      >
        <div className="TouristsSelect">
          <div className="main--select style--maintheme">
            <div className="main--select__placeholder">
              Туристы
            </div>
            <div
              className="main--select__content"
              title={totalTourists}
            >
              {displayText}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
<div
  className="tourists--tooltip"
  ref={tooltipRef}
  style={{
    position: "absolute",
    display: isOpen ? "block" : "none",
    top: tooltipStyle.top,
    left: tooltipStyle.left,
    opacity: tooltipStyle.opacity,
    visibility: tooltipStyle.visibility,
  }}
>
  <div className="tourists--tooltip__content">
    
    <div className="tourists--tooltip__content__margin">

      <div className="tourists--tooltip__header">
        ТУРИСТЫ
      </div>

      {/* ВЗРОСЛЫЕ */}
      <div className="tourists--controls">
        <button
          className="tourists--btn tourists--btn-minus"
          onClick={(e) => {
            e.stopPropagation();
            decrementAdults();
          }}
        />
        <span
          className={`tourists--count ${
            adults === 1 ? "touristone" : "tourists--all"
          }`}
        >
          {adults}
        </span>
        <button
          className="tourists--btn tourists--btn-plus"
          onClick={(e) => {
            e.stopPropagation();
            incrementAdults();
          }}
        />
      </div>

      {children.map((age, index) => (
        <div
          key={index}
          className="TVTouristChildItem tourists--controls"
        >
          <div
            className="tourists--btn tourists--btn-minus"
            onClick={(e) => {
              e.stopPropagation();
              removeChild(index);
            }}
          />
          <div className="tourist--child">
            {formatChildAge(age)}
          </div>
        </div>
      ))}

      {/* КНОПКА ДОБАВИТЬ РЕБЁНКА */}
      {children.length < 3 && !showAgeSelector && (
        <button
          className="tourists--addchild"
          onClick={(e) => {
            e.stopPropagation();
            setShowAgeSelector(true);
          }}
        />
      )}
        <div
        className="tourists--select--age__container"
        style={{ display: showAgeSelector ? "block" : "none" }}
        >
            <div className="tourists--select--age__header">
                Выберите возраст ребенка
            </div>

            <div
                className="tourists--select--age__table"
                style={{ maxWidth: "322px" }}
            >
                {columns.map((column, colIndex) => (
                <div key={colIndex} className="tourists--select--age__column">
                    {column.map((age) => (
                    <div
                        key={age}
                        className="tourists--select--age__item"
                        onClick={(e) => {
                        e.stopPropagation();
                        addChild(age);
                        }}
                    >
                        <div className="tourists--select--age__value">
                        {age === 0 ? "до 2" : age}
                        </div>
                        <div className="tourists--select--age__unit">
                        {age <= 1
                            ? "лет"
                            : age <= 4
                            ? "года"
                            : "лет"}
                        </div>
                    </div>
                    ))}
                </div>
                ))}
            </div>
        </div>
    </div>

    {/* БЛОК ЗАПОМНИТЬ */}
    <div className="tourists--remember">
      <input type="checkbox" id="rememberChoice" />
      <label className="ChoiceText" htmlFor="rememberChoice">
        Запомнить выбор
      </label>
    </div>

    <button
      className="tourists--select__btn"
      onClick={(e) => {
        e.stopPropagation();
        closeTooltip();
      }}
    >
      Выбрать
    </button>
  </div>
</div>
      )}
    </>
  );
};

export default TouristsFilter;