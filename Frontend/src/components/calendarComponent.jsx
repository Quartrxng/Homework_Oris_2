import React from 'react';
import SingleMonth from '../components/singleMonth';

const CalendarComponent = ({
  currentMonth,
  nextMonth,
  currentOffset,
  onPrev,
  onNext,
  startDate,
  endDate,
  onSelectDate,
  monthsFull,
  weekdays
}) => {
  return (
    <>
      <div className="calendar-header">
        <button
          className="nav-button prev"
          disabled={currentOffset <= 0}
          onClick={onPrev}
        />

        <div className="calendar-month">
          <h3>
            {monthsFull[currentMonth.getMonth()]}{' '}
            <span>{currentMonth.getFullYear()}</span>
          </h3>
        </div>

        <div className="calendar-month">
          <h3>
            {monthsFull[nextMonth.getMonth()]}{' '}
            <span>{nextMonth.getFullYear()}</span>
          </h3>
        </div>

        <button
          className="nav-button next"
          disabled={currentOffset >= 12}
          onClick={onNext}
        />
      </div>

      <div className="calendar-months-container">
        <SingleMonth
          monthDate={currentMonth}
          startDate={startDate}
          endDate={endDate}
          onSelectDate={onSelectDate}
          weekdays={weekdays}
        />

        <SingleMonth
          monthDate={nextMonth}
          startDate={startDate}
          endDate={endDate}
          onSelectDate={onSelectDate}
          weekdays={weekdays}
        />
      </div>
    </>
  );
};

export default CalendarComponent;