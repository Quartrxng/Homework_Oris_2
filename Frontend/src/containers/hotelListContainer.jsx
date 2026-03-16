import React, { useEffect, useMemo, useState } from 'react';
import HotelCard from '../components/hotelCard';

const normalizeDate = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const hasDateOverlap = (hotelRanges, selectedStart, selectedEnd) => {
  if (!selectedStart || !selectedEnd) return true;
  if (!Array.isArray(hotelRanges) || hotelRanges.length === 0) return true;

  return hotelRanges.some((range) => {
    const from = normalizeDate(range.from);
    const to = normalizeDate(range.to);
    if (!from || !to) return false;
    return selectedStart >= from && selectedEnd <= to;
  });
};

const includesAllServices = (hotelServices, selectedServices) => {
  if (!selectedServices?.length) return true;
  const set = new Set(hotelServices || []);
  return selectedServices.every((service) => set.has(service));
};

const matchesPlacement = (hotel, placement) => {
  if (!placement) return true;
  const search = hotel.search || {};
  const candidate = `${hotel.location || ''} ${search.city || ''} ${search.country || ''} ${hotel.name || ''}`.toLowerCase();
  return candidate.includes(String(placement.name || '').toLowerCase());
};

const HotelListContainer = ({ searchData }) => {
  const [hotelsData, setHotelsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const response = await fetch('/api/hotelsData.json');
        if (!response.ok) throw new Error('Ошибка загрузки hotelsData.json');
        const data = await response.json();
        setHotelsData(data.hotelsData || []);
      } catch (error) {
        console.error('Ошибка загрузки отелей:', error);
      } finally {
        setLoading(false);
      }
    };

    loadHotels();
  }, []);

  const filteredHotels = useMemo(() => {
    const selectedStart = normalizeDate(searchData?.dates?.startDate);
    const selectedEnd = normalizeDate(searchData?.dates?.endDate);
    const minStars = Number(searchData?.stars || 1);
    const minRating = searchData?.filters?.rating && searchData.filters.rating !== 'any'
      ? Number(searchData.filters.rating)
      : null;
    const selectedMeal = searchData?.filters?.meal || 'any';
    const selectedBeachLine = searchData?.filters?.beachLine || 'any';
    const adults = Number(searchData?.tourists?.adults || 1);
    const childCount = Array.isArray(searchData?.tourists?.children) ? searchData.tourists.children.length : 0;
    const selectedServices = searchData?.services || [];

    return hotelsData.filter((hotel) => {
      const search = hotel.search || {};
      const maxAdults = Number(search.accommodation?.maxAdults || 99);
      const maxChildren = Number(search.accommodation?.maxChildren || 99);
      const totalCapacity = Number(search.accommodation?.maxGuests || maxAdults + maxChildren || 99);
      const totalGuests = adults + childCount;

      if (!matchesPlacement(hotel, searchData?.placement)) return false;
      if (Number(hotel.stars || 0) < minStars) return false;
      if (minRating !== null && Number(hotel.rating || 0) < minRating) return false;
      if (selectedMeal !== 'any' && !(search.mealPlans || []).includes(selectedMeal)) return false;
      if (selectedBeachLine !== 'any' && String(search.beachLine || '') !== String(selectedBeachLine)) return false;
      if (!includesAllServices(search.services, selectedServices)) return false;
      if (adults > maxAdults) return false;
      if (childCount > maxChildren) return false;
      if (totalGuests > totalCapacity) return false;
      if (!hasDateOverlap(search.availability, selectedStart, selectedEnd)) return false;

      return true;
    });
  }, [hotelsData, searchData]);

  if (loading) return <div>Загрузка...</div>;
  if (!filteredHotels.length) return <div></div>;

  return (
    <div className="card-container">
      {filteredHotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelListContainer;
