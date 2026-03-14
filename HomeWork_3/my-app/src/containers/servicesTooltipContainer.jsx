import React, { useCallback, useEffect, useRef, useState } from 'react';
import ServicesTooltipComponent from '../components/servicesTooltip';

const fallbackData = {
  servicesData: [
    { id: 'wifi', category_Name: 'Популярное', category_Order: 1, service_Name: 'Wi‑Fi', service_Order: 1 },
    { id: 'pool', category_Name: 'Популярное', category_Order: 1, service_Name: 'Бассейн', service_Order: 2 },
    { id: 'spa', category_Name: 'Комфорт', category_Order: 2, service_Name: 'SPA', service_Order: 1 },
    { id: 'parking', category_Name: 'Комфорт', category_Order: 2, service_Name: 'Парковка', service_Order: 2 },
    { id: 'beach', category_Name: 'Отдых', category_Order: 3, service_Name: 'Пляж', service_Order: 1 },
  ],
};

const groupServicesByCategory = (data) => {
  const grouped = Object.values(
    data.reduce((acc, item) => {
      const categoryName = item.category_Name;
      if (!acc[categoryName]) {
        acc[categoryName] = { categoryName, categoryOrder: item.category_Order, services: [] };
      }
      acc[categoryName].services.push({ id: item.id, serviceName: item.service_Name, serviceOrder: item.service_Order });
      return acc;
    }, {})
  );

  return grouped
    .sort((a, b) => a.categoryOrder - b.categoryOrder)
    .map((category) => ({ ...category, services: category.services.sort((a, b) => a.serviceOrder - b.serviceOrder) }));
};

const ServicesTooltipContainer = ({ value = [], onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedServices, setSelectedServices] = useState(value);
  const [activeTab, setActiveTab] = useState('all');
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const filterButtonRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/servicesData.json');
        if (!response.ok) throw new Error('Ошибка загрузки servicesData.json');
        const data = await response.json();
        setCategories(groupServicesByCategory(data.servicesData || []));
      } catch (error) {
        console.error('Ошибка загрузки servicesData.json:', error);
        setCategories(groupServicesByCategory(fallbackData.servicesData));
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    setSelectedServices(value || []);
  }, [JSON.stringify(value || [])]);

  const updatePosition = useCallback(() => {
    if (!filterButtonRef.current) return;
    const rect = filterButtonRef.current.getBoundingClientRect();
    setPosition({ top: rect.bottom + window.scrollY + 10, left: rect.left + window.scrollX });
  }, []);

  useEffect(() => {
    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [updatePosition]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen && tooltipRef.current && !tooltipRef.current.contains(e.target) &&
        filterButtonRef.current && !filterButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setActiveTab('all');
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleService = (id) => {
    setSelectedServices((prev) => {
      const updated = prev.includes(id) ? prev.filter((serviceId) => serviceId !== id) : [...prev, id];
      onChange?.(updated);
      return updated;
    });
  };

  const selectedCount = selectedServices.length;

  const getDisplayText = () => {
    if (!selectedCount) return 'Любой';
    if (selectedCount === 1) {
      const service = categories.flatMap((category) => category.services).find((item) => item.id === selectedServices[0]);
      return service?.serviceName || 'Выбрано (1)';
    }
    return `Выбрано (${selectedCount})`;
  };

  return (
    <>
      <div
        ref={filterButtonRef}
        className={`filter-item service-filter ${isOpen ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
          setActiveTab('all');
        }}
      >
        <span className={`filter-label ${selectedCount ? 'selected' : ''}`}>Услуги и удобства</span>
        <div className="filter-content">
          <div className="filter-select-wrapper">
            <svg className="select-arrow" viewBox="0 0 129 129" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"></path>
              </g>
            </svg>
          </div>
        </div>
        {selectedCount > 0 && (
          <div className="filter--select__content" title={selectedServices.join(',')}>
            {getDisplayText()}
          </div>
        )}
      </div>

      <ServicesTooltipComponent
        ref={tooltipRef}
        isOpen={isOpen}
        position={position}
        categories={categories}
        selectedServices={selectedServices}
        activeTab={activeTab}
        onTabClick={setActiveTab}
        onServiceToggle={toggleService}
        onReset={() => {
          setSelectedServices([]);
          onChange?.([]);
          setActiveTab('all');
        }}
        onSelect={() => {
          setIsOpen(false);
          setActiveTab('all');
        }}
        selectedCount={selectedCount}
      />
    </>
  );
};

export default ServicesTooltipContainer;
