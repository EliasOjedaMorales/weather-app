'use client'
import { AsyncPaginate } from 'react-select-async-paginate'
import { useState } from 'react'
import { GEO_API_URL, geoApiOptions } from '@/app/api'

export default function Search ({ onSearchChange }) {
  const [search, setSearch] = useState(null)
  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPupulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`
            }
          })
        }
      })
      .catch((err) => console.log(err))
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <nav className='w-full flex items-center justify-center pt-6'>
      <AsyncPaginate
        placeholder='Busca por ciudades'
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className='w-2/3'
      />
    </nav>
  )
}
