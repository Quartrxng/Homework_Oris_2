import React, { useState, useEffect, useRef } from 'react';
import CalendarComponent from '../components/calendarComponent';
import { formatRange } from '../data/calendarData';

const CalendarContainer = () => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [currentOffset, setCurrentOffset] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const popupRef = useRef(null);

    const selectRef = useRef(null);

    // === ИНИЦИАЛИЗАЦИЯ ===
    useEffect(() => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        setStartDate(today);
        setEndDate(tomorrow);
    }, []);
    useEffect(() => {
        if (!isOpen) return;

        const rect = selectRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        popupRef.current.style.top =
            rect.bottom + scrollTop + 10 + 'px';

        popupRef.current.style.left =
            rect.left + scrollLeft + rect.width / 2 - 345 + 'px';

    }, [isOpen, currentOffset]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(e.target) &&
                popupRef.current &&
                !popupRef.current.contains(e.target)
            ) {
                if (startDate && !endDate) {
                    const nextDay = new Date(startDate);
                    nextDay.setDate(startDate.getDate() + 1);
                    setEndDate(nextDay);
                }

                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [startDate, endDate]);

    // === ОБРАБОТКА ВЫБОРА ДАТ ===
    const handleSelectDate = (date) => {
        if (!startDate) {
            setStartDate(date);
            setEndDate(null);
        } else if (!endDate && date >= startDate) {
            setEndDate(date);
            setTimeout(() => setIsOpen(false), 300);
        } else {
            setStartDate(date);
            setEndDate(null);
        }
    };

    const now = new Date();
    const currentMonth = new Date(
        now.getFullYear(),
        now.getMonth() + currentOffset,
        1
    );

    const nextMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
    );

    return (
        <div className="duration--filter">
            <div className="duration--filter__select">
                <div
                    ref={selectRef}
                    className="main--select style--maintheme date-input-container"
                    onClick={() => setIsOpen(true)}
                >
                    <div className="main--select__placeholder">
                        <div className="main--filter__icon">
                        </div>
                        Даты проживания
                    </div>

                    <div
                        className="main--select__content"
                        title={startDate && endDate
                            ? Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))
                            : ''
                        }
                    >
                        {formatRange(startDate, endDate)}
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    ref={popupRef}
                    className="calendar-popup tooltip open"
                    id="calendarPopup"
                >
                    <CalendarComponent
                        currentMonth={currentMonth}
                        nextMonth={nextMonth}
                        currentOffset={currentOffset}
                        onPrev={() => currentOffset > 0 && setCurrentOffset(prev => prev - 1)}
                        onNext={() => currentOffset < 12 && setCurrentOffset(prev => prev + 1)}
                        startDate={startDate}
                        endDate={endDate}
                        onSelectDate={handleSelectDate}
                    />
                </div>
            )}
        </div>
    );
};

export default CalendarContainer;