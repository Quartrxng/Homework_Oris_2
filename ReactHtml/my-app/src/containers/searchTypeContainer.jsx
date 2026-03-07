import React, { useState, useEffect } from 'react';
import RadioGroup from '../components/radioGroup';
import RadioInput from '../components/radioInput';
import { getSearchTypeConfig } from '../data/searchType';

const SearchTypeContainer = () => {
  const [config, setConfig] = useState(null);
  const [selectedMode, setSelectedMode] = useState('tours');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        setTimeout(() => {
          const formConfig = getSearchTypeConfig();
          setConfig(formConfig);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error loading config:', error);
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  const handleModeChange = (modeId) => {
    setSelectedMode(modeId);
    console.log('Selected mode:', modeId);
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!config) {
    return <div>Ошибка загрузки конфигурации</div>;
  }

  return (
    <div className="SearchFormMode">
      <div className="SearchModeControl">
        <RadioGroup 
          direction="Row" 
          theme="StyleTheme1"
          gapSize={config.theme.gapSize}
        >
          {config.modes.map((mode) => (
            <RadioInput
              key={mode.id}
              id={`mode-${mode.id}`}
              name={config.groupName}
              label={mode.label}
              checked={selectedMode === mode.id}
              onChange={() => handleModeChange(mode.id)}
              primaryColor={config.theme.primaryColor}
              textColor={config.theme.textColor}
              size={config.theme.size}
              fontSize={config.theme.fontSize}
              fontWeight={config.theme.fontWeight}
              gapSize={config.theme.gapSize}
            />
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default SearchTypeContainer;