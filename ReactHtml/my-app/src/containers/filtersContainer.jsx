import { useState } from 'react'
import { mealOptions, ratingOptions } from '../data/filtersData'
import FilterRadio from '../components/filtersRadio'

export default function FiltersContainer() {
  const [meal, setMeal] = useState('any')
  const [rating, setRating] = useState('any')
  const [openFilter, setOpenFilter] = useState(null)

  return (
    <>
      <FilterRadio
        type="meal"
        label="Питание"
        options={mealOptions}   
        value={meal}
        onChange={setMeal}
        isOpen={openFilter === 'meal'}
        setOpenFilter={setOpenFilter}
        formatDisplay={(opt) =>
          opt.value === 'any'
            ? 'Любой'
            : `${opt.code} и лучше`
        }
      />

      <FilterRadio
        type="rating"
        label="Рейтинг"
        options={ratingOptions}
        value={rating}
        onChange={setRating}
        isOpen={openFilter === 'rating'}
        setOpenFilter={setOpenFilter}
        formatDisplay={(opt) =>
          opt.value === 'any'
            ? 'Любой'
            : `${opt.code} и более`
        }
      />
    </>
  )
}