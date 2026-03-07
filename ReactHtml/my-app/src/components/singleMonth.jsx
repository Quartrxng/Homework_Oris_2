import React from 'react';
import { weekdays } from '../data/calendarData';

const SingleMonth = ({
    monthDate,
    startDate,
    endDate,
    onSelectDate
}) => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const firstDayOfMonth = monthDate.getDay();
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    const daysInMonth = new Date(
        monthDate.getFullYear(),
        monthDate.getMonth() + 1,
        0
    ).getDate();

    const days = [];

    for (let i = 0; i < adjustedFirstDay; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day disabled" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(
            monthDate.getFullYear(),
            monthDate.getMonth(),
            day
        );

        const isPast = date < today;
        let className = 'calendar-day';

        if (isPast) className += ' disabled';

        if (startDate && date.getTime() === startDate.getTime()) {
            className += ' selected start';
        }

        if (endDate && date.getTime() === endDate.getTime()) {
            className += ' selected end';
        }

        if (startDate && endDate && date > startDate && date < endDate) {
            className += ' range';
        }

        days.push(
            <div
                key={day}
                className={className}
                onClick={() => !isPast && onSelectDate(date)}
            >
                {day}
            </div>
        );
    }

    return (
        <div className="single-month-block">
            <div className="calendar-weekdays">
                {weekdays.map(day => (
                    <div key={day}>{day}</div>
                ))}
            </div>
            <div className="calendar-days">{days}</div>
        </div>
    );
};

export default SingleMonth;