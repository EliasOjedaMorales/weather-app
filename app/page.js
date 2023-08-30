'use client'
import Search from '@/components/search/search'
import CurrentWeather from '@/components/currentWeather/CurrentWeather'
import Forecast from '@/components/forecast/Forecast'
import Footer from '@/components/Footer/Footer'
import { WEATHER_API_URL } from './api'
import { useState } from 'react'

export default function Home () {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setforecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(' ')
    const APIKey = process.env.NEXT_PUBLIC_API_KEY

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&lang=sp&appid=${APIKey}&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&lang=sp&appid=${APIKey}&units=metric&cnt=40`)
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()
        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setforecast({ city: searchData.label, ...forecastResponse })
      })
      .catch((error) => { console.log(error) })
  }
  // console.log(forecast)
  return (
    <main className='min-h-screen grid grid-rows-[auto_1fr_auto]  justify-items-center'>
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      <Footer />
    </main>
  )
}
