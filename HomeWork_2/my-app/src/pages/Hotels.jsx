import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelView from "../components/hotelsViews";
import "../styles/hotel-info.css";

const Hotels = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHotel = async () => {
      try {
        const response = await fetch("/api/hotelsData.json");

        if (!response.ok) {
          throw new Error("Ошибка загрузки hotelsData.json");
        }

        const data = await response.json();

        const currentHotel = data.hotelsData.find((hotel) => hotel.id === id);
        setHotel(currentHotel);
      } catch (error) {
        console.error("Ошибка загрузки отеля:", error);
      } finally {
        setLoading(false);
      }
    };

    loadHotel();
  }, [id]);

  if (loading) {
    return <div className="hotel-wrapper"><h1>Загрузка...</h1></div>;
  }

  if (!hotel) {
    return <div className="hotel-wrapper"><h1>Отель не найден</h1></div>;
  }

  return <HotelView hotel={hotel} />;
};

export default Hotels;