import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function FilterRadio({
  type,
  label,
  options,
  value,
  onChange,
  disabled = false,
  isOpen,
  setOpenFilter,
  formatDisplay
}) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ top: 0, left: 0 })

  const isSelected = value !== 'any'
  const selectedOption = options.find(o => o.value === value)

  useEffect(() => {
    if (isOpen && ref.current) {
      const rect = ref.current.getBoundingClientRect()

      setPosition({
        top: rect.bottom + 10,
        left: rect.left
      })
    }
  }, [isOpen])

const dropdownRef = useRef(null)

useEffect(() => {
  function handleClickOutside(e) {
    const clickedInsideButton =
      ref.current && ref.current.contains(e.target)

    const clickedInsideDropdown =
      dropdownRef.current && dropdownRef.current.contains(e.target)

    if (!clickedInsideButton && !clickedInsideDropdown) {
      setOpenFilter(null)
    }
  }

  function handleEsc(e) {
    if (e.key === 'Escape') {
      setOpenFilter(null)
    }
  }

  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('keydown', handleEsc)

  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
    document.removeEventListener('keydown', handleEsc)
  }
}, [setOpenFilter])

  function toggleDropdown() {
    if (disabled) return
    setOpenFilter(isOpen ? null : type)
  }

  return (
    <>
        <div
        ref={ref}
        className={`filter-item filter-${type} other-filter ${disabled ? 'disabled' : ''}`}
        onClick={(e) => {
            e.stopPropagation()
            toggleDropdown()
        }}
        >
        <span className={`filter-label ${isSelected ? 'selected' : ''}`}>
          {label}
        </span>

        <div
          className="filter-content"
          style={{ display: isSelected ? 'none' : '' }}
        >
          <div className="filter-select-wrapper">
            <svg
              className={`select-arrow ${isOpen ? 'arrow-top' : ''}`}
              viewBox="0 0 129 129"
            >
              <g>
                <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
              </g>
            </svg>
          </div>
        </div>

        <div
          className="filter--select__content"
          title={selectedOption?.code || selectedOption?.label || 'Любой'}
          style={{ display: isSelected ? 'block' : 'none' }}
        >
          {isSelected ? formatDisplay(selectedOption) : 'Любой'}
        </div>
      </div>

      {isOpen &&
        createPortal(
            <div
            ref={dropdownRef}
            className={`${type}-dropdown dropdown`}
            style={{
                position: 'fixed',
                top: position.top,
                left: position.left,
                zIndex: 1000
            }}
            onMouseDown={(e) => e.stopPropagation()}
            >
            <div className="dropdown-header">
              <span>{label.toUpperCase()}</span>
            </div>

            <div className="dropdown-options">
              {options.map(option => (
                <label
                  key={option.value}
                  className="option-label"
                  onClick={() => {
                    onChange(option.value)
                    setOpenFilter(null)
                  }}
                >
                <input
                type="radio"
                name={type}
                value={option.value}
                checked={value === option.value}
                className={`${type}-radio`}
                onChange={() => {
                    onChange(option.value)
                    setOpenFilter(null)
                }}
                />

                  {option.code ? (
                    <>
                      <span className="code">{option.code}</span>
                      <span className="description">
                        {option.description ||
                          formatDisplay(option).replace(option.code, '')}
                      </span>
                    </>
                  ) : (
                    <span className="default">{option.label}</span>
                  )}
                </label>
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}