import React, { useEffect, useState } from 'react';
import RadioGroup from '../components/radioGroup';
import RadioInput from '../components/radioInput';

const fallbackConfig = {
  groupName: 'searchMode',
  theme: {
    gapSize: 12,
    primaryColor: '#ffffff',
    textColor: '#ffffff',
    size: 'M',
    fontSize: '14px',
    fontWeight: 500,
  },
  modes: [
    { id: 'tours', label: 'Туры', checked: true },
    { id: 'hotels', label: 'Отели', checked: false },
  ],
};

const SearchTypeContainer = ({ value = 'tours', onChange }) => {
  const [config, setConfig] = useState(fallbackConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const response = await fetch('/api/searchType.json');
        if (!response.ok) throw new Error('Ошибка загрузки searchType.json');
        const data = await response.json();

        setConfig({
          modes: data.searchModes || fallbackConfig.modes,
          theme: data.themeConfig || fallbackConfig.theme,
          groupName: data.groupName || fallbackConfig.groupName,
        });
      } catch (error) {
        console.error('Ошибка загрузки searchType.json:', error);
        setConfig(fallbackConfig);
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className="SearchFormMode">
      <div className="SearchModeControl">
        <RadioGroup direction="Row" theme="StyleTheme1" gapSize={config.theme.gapSize}>
          {config.modes.map((mode) => (
            <RadioInput
              key={mode.id}
              id={`mode-${mode.id}`}
              name={config.groupName}
              label={mode.label}
              checked={value === mode.id}
              onChange={() => onChange?.(mode.id)}
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
