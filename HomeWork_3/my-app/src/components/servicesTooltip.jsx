import React from 'react';

const ServicesTooltipComponent = React.forwardRef(({
  isOpen,
  position,
  categories,
  selectedServices,
  activeTab,
  onTabClick,
  onServiceToggle,
  onReset,
  onSelect,
  selectedCount
}, ref) => {
  if (!isOpen) return null;

  const handleServiceChange = (serviceId) => {
    onServiceToggle(serviceId);
  };

  const getCategoryStyle = (category) => {
    if (activeTab === 'selected') {
      const hasSelectedService = category.services.some(service => selectedServices.includes(service.id));
      return hasSelectedService ? {} : { display: 'none' };
    }
    return {};
  };

  const getServiceStyle = (serviceId) => {
    if (activeTab === 'selected') {
      return selectedServices.includes(serviceId) ? {} : { display: 'none' };
    }
    return {};
  };

  return (
    <div 
      ref={ref}
      id="servicesContent" 
      style={{ 
        display: 'flex', 
        top: position.top, 
        left: position.left,
        position: 'absolute',
        zIndex: 1000
      }}
    >
      <div className="dropdown-header">
        <span>Услуги в отеле</span>
      </div>
      
      <div className="svc-tab-control">
        <div 
          className={`svc-tab-item ${activeTab === 'all' ? 'svc-tab-active' : ''}`}
          onClick={() => onTabClick('all')}
        >
          Все
        </div>
        
        {selectedCount > 0 && (
          <div 
            className={`svc-tab-item ${activeTab === 'selected' ? 'svc-tab-active' : ''}`}
            onClick={() => onTabClick('selected')}
          >
            <span className="svc-tab-selected" style={{ display: 'inline-flex' }}>
              <span>Выбрано</span>
              <span className="svc-tab-selected-count">{selectedCount}</span>
            </span>
          </div>
        )}
        
        {selectedCount > 0 && (
          <div 
            className="svc-tab-item"
            onClick={onReset}
          >
            Сброс
          </div>
        )}
      </div>

      <div className="services-categories">
        {categories.map(category => (
          <div 
            key={category.categoryName} 
            className="svc-category" 
            data-category={category.categoryName.toLowerCase()}
            style={getCategoryStyle(category)}
          >
            <div className="svc-category-title">{category.categoryName}</div>
            {category.services.map(service => (
              <div 
                key={service.id} 
                className="svc-service-item"
                style={getServiceStyle(service.id)}
              >
                <input
                  type="checkbox"
                  id={`service_${service.id}`}
                  data-service-id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onChange={() => handleServiceChange(service.id)}
                />
                <label htmlFor={`service_${service.id}`}>{service.serviceName}</label>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button 
        className={selectedCount > 0 ? 'tourists--select__btn' : 'tourists--select--button__outlined'}
        onClick={onSelect}
      >
        Выбрать
      </button>
    </div>
  );
});

export default ServicesTooltipComponent;