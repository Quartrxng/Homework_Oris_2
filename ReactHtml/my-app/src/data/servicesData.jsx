export const servicesData = [
  // Категория: Территория
  { id: 1, category_Name: 'Территория', category_Order: 1, service_Name: 'Спортзал', service_Order: 1 },
  { id: 2, category_Name: 'Территория', category_Order: 1, service_Name: 'Теннис', service_Order: 2 },
  { id: 3, category_Name: 'Территория', category_Order: 1, service_Name: 'Футбол', service_Order: 3 },
  { id: 4, category_Name: 'Территория', category_Order: 1, service_Name: 'Бассейн', service_Order: 4 },
  { id: 5, category_Name: 'Территория', category_Order: 1, service_Name: 'Новый отель', service_Order: 5 },
  { id: 6, category_Name: 'Территория', category_Order: 1, service_Name: 'Бассейн с подогревом', service_Order: 6 },
  { id: 7, category_Name: 'Территория', category_Order: 1, service_Name: 'Водные горки', service_Order: 7 },
  { id: 8, category_Name: 'Территория', category_Order: 1, service_Name: 'СПА-центр', service_Order: 8 },
  { id: 9, category_Name: 'Территория', category_Order: 1, service_Name: 'Ресторан/кафе', service_Order: 9 },
  
  // Категория: Услуги
  { id: 10, category_Name: 'Услуги', category_Order: 2, service_Name: 'Анимация', service_Order: 1 },
  { id: 11, category_Name: 'Услуги', category_Order: 2, service_Name: 'Дискотека', service_Order: 2 },
  { id: 12, category_Name: 'Услуги', category_Order: 2, service_Name: 'Wi-Fi', service_Order: 3 },
  { id: 13, category_Name: 'Услуги', category_Order: 2, service_Name: 'Только для взрослых', service_Order: 4 },
  
  // Категория: Номер
  { id: 14, category_Name: 'Номер', category_Order: 3, service_Name: 'Кухня в номере', service_Order: 1 },
  { id: 15, category_Name: 'Номер', category_Order: 3, service_Name: 'Балкон в номере', service_Order: 2 },
  { id: 16, category_Name: 'Номер', category_Order: 3, service_Name: 'Wi-Fi в номере', service_Order: 3 },
  { id: 17, category_Name: 'Номер', category_Order: 3, service_Name: 'Кондиционер', service_Order: 4 },
  { id: 18, category_Name: 'Номер', category_Order: 3, service_Name: 'Размещение с животными', service_Order: 5 },
  
  // Категория: Для детей
  { id: 19, category_Name: 'Для детей', category_Order: 4, service_Name: 'Детская анимация', service_Order: 1 },
  { id: 20, category_Name: 'Для детей', category_Order: 4, service_Name: 'Детская площадка', service_Order: 2 },
  { id: 21, category_Name: 'Для детей', category_Order: 4, service_Name: 'Водные горки для детей', service_Order: 3 },
  { id: 22, category_Name: 'Для детей', category_Order: 4, service_Name: 'Детское меню', service_Order: 4 },
  { id: 23, category_Name: 'Для детей', category_Order: 4, service_Name: 'Мини-клуб', service_Order: 5 },
  
  // Категория: Доп.фильтры
  { id: 24, category_Name: 'Доп.фильтры', category_Order: 5, service_Name: 'Мгновенное подтверждение', service_Order: 1 },
  
  // Категория: Тип отеля
  { id: 25, category_Name: 'Тип отеля', category_Order: 6, service_Name: 'Активный', service_Order: 1 },
  { id: 26, category_Name: 'Тип отеля', category_Order: 6, service_Name: 'Городской', service_Order: 2 },
  { id: 27, category_Name: 'Тип отеля', category_Order: 6, service_Name: 'Семейный', service_Order: 3 },
  { id: 28, category_Name: 'Тип отеля', category_Order: 6, service_Name: 'VIP', service_Order: 4 }
];

// Функция для группировки данных по категориям
export const groupServicesByCategory = (data) => {
  const grouped = Object.values(
    data.reduce((acc, item) => {
      const categoryName = item.category_Name;
      if (!acc[categoryName]) {
        acc[categoryName] = {
          categoryName: categoryName,
          categoryOrder: item.category_Order,
          services: []
        };
      }
      acc[categoryName].services.push({
        id: item.id,
        serviceName: item.service_Name,
        serviceOrder: item.service_Order
      });
      return acc;
    }, {})
  );
  
  // Сортируем категории и сервисы внутри каждой категории
  return grouped
    .sort((a, b) => a.categoryOrder - b.categoryOrder)
    .map(category => ({
      ...category,
      services: category.services.sort((a, b) => a.serviceOrder - b.serviceOrder)
    }));
};