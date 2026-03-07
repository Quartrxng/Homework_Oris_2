import React, { useState, useEffect, useRef, useCallback } from 'react';
import { servicesData, groupServicesByCategory } from '../data/servicesData';
import ServicesTooltipComponent from '../components/servicesTooltip';

const ServicesTooltipContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const filterButtonRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => setCategories(groupServicesByCategory(servicesData)), []);

  const updatePosition = useCallback(() => {
    if (!filterButtonRef.current) return;
    const rect = filterButtonRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + window.scrollY + 10,
      left: rect.left + window.scrollX
    });
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
        isOpen &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target) &&
        filterButtonRef.current &&
        !filterButtonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setActiveTab('all');
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const toggleService = (id) =>
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const selectedCount = selectedServices.length;

  const getDisplayText = () => {
    if (!selectedCount) return 'Любой';
    if (selectedCount === 1) {
      const s = categories.flatMap((c) => c.services).find((s) => s.id === selectedServices[0]);
      return s?.serviceName || 'Выбрано (1)';
    }
    return `Выбрано (${selectedCount})`;
  };

  return (
    <>
      <div
        ref={filterButtonRef}
        className={`filter-item service-filter ${isOpen ? 'active' : ''}`}
        onClick={(e) => { e.stopPropagation(); setIsOpen((o) => !o); setActiveTab('all'); }}
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
      onReset={() => { setSelectedServices([]); setActiveTab('all'); }}
      onSelect={() => { setIsOpen(false); setActiveTab('all'); }}
      selectedCount={selectedCount}
    />
    </>
  );
};

export default ServicesTooltipContainer;