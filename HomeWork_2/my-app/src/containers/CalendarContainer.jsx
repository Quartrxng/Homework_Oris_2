import React, { useEffect, useRef, useState } from 'react';
import CalendarComponent from '../components/calendarComponent';

const monthsShort = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
const monthsFull = ['ЯНВАРЬ', 'ФЕВРАЛЬ', 'МАРТ', 'АПРЕЛЬ', 'МАЙ', 'ИЮНЬ', 'ИЮЛЬ', 'АВГУСТ', 'СЕНТЯБРЬ', 'ОКТЯБРЬ', 'НОЯБРЬ', 'ДЕКАБРЬ'];
const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

const normalizeDate = (value) => {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const formatDate = (date) => `${date.getDate()} ${monthsShort[date.getMonth()]}`;

const formatRange = (startDate, endDate) => {
  if (!startDate || !endDate) return '';
  const daysDiff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  return `${formatDate(startDate)} - ${formatDate(endDate)} (${daysDiff} нч)`;
};

const CalendarContainer = ({ value, onChange }) => {
  const [startDate, setStartDate] = useState(() => normalizeDate(value?.startDate));
  const [endDate, setEndDate] = useState(() => normalizeDate(value?.endDate));
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const popupRef = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    if (!value?.startDate && !value?.endDate) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      setStartDate(today);
      setEndDate(tomorrow);
      onChange?.({ startDate: today.toISOString(), endDate: tomorrow.toISOString() });
      return;
    }

    setStartDate(normalizeDate(value?.startDate));
    setEndDate(normalizeDate(value?.endDate));
  }, [value?.startDate, value?.endDate]);

  useEffect(() => {
    if (!isOpen || !selectRef.current || !popupRef.current) return;
    const rect = selectRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    popupRef.current.style.top = `${rect.bottom + scrollTop + 10}px`;
    popupRef.current.style.left = `${rect.left + scrollLeft + rect.width / 2 - 345}px`;
  }, [isOpen, currentOffset]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        selectRef.current && !selectRef.current.contains(e.target) &&
        popupRef.current && !popupRef.current.contains(e.target)
      ) {
        if (startDate && !endDate) {
          const nextDay = new Date(startDate);
          nextDay.setDate(startDate.getDate() + 1);
          setEndDate(nextDay);
          onChange?.({ startDate: startDate.toISOString(), endDate: nextDay.toISOString() });
        }
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [startDate, endDate, onChange]);

  const handleSelectDate = (date) => {
    if (!startDate) {
      setStartDate(date);
      setEndDate(null);
      onChange?.({ startDate: date.toISOString(), endDate: null });
    } else if (!endDate && date >= startDate) {
      setEndDate(date);
      onChange?.({ startDate: startDate.toISOString(), endDate: date.toISOString() });
      setTimeout(() => setIsOpen(false), 300);
    } else {
      setStartDate(date);
      setEndDate(null);
      onChange?.({ startDate: date.toISOString(), endDate: null });
    }
  };

  const now = new Date();
  const currentMonth = new Date(now.getFullYear(), now.getMonth() + currentOffset, 1);
  const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);

  return (
    <div className="duration--filter">
      <div className="duration--filter__select">
        <div ref={selectRef} className="main--select style--maintheme date-input-container" onClick={() => setIsOpen(true)}>
          <div className="main--select__placeholder">
            <div className="main--filter__icon"></div>
            Даты проживания
          </div>

          <div className="main--select__content" title={startDate && endDate ? String(Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))) : ''}>
            {formatRange(startDate, endDate)}
          </div>
        </div>
      </div>

      {isOpen && (
        <div ref={popupRef} className="calendar-popup tooltip open" id="calendarPopup">
          <CalendarComponent
            currentMonth={currentMonth}
            nextMonth={nextMonth}
            currentOffset={currentOffset}
            onPrev={() => currentOffset > 0 && setCurrentOffset((prev) => prev - 1)}
            onNext={() => currentOffset < 12 && setCurrentOffset((prev) => prev + 1)}
            startDate={startDate}
            endDate={endDate}
            onSelectDate={handleSelectDate}
            monthsFull={monthsFull}
            weekdays={weekdays}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarContainer;
