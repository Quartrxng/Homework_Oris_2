import React from 'react';
import SingleMonth from '../components/singleMonth';
import { monthsFull } from '../data/calendarData';

const CalendarComponent = ({
    currentMonth,
    nextMonth,
    currentOffset,
    onPrev,
    onNext,
    startDate,
    endDate,
    onSelectDate
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
                />

                <SingleMonth
                    monthDate={nextMonth}
                    startDate={startDate}
                    endDate={endDate}
                    onSelectDate={onSelectDate}
                />
            </div>
        </>
    );
};

export default CalendarComponent; 