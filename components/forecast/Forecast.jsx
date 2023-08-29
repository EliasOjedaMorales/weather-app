import { Accordion, AccordionItem } from '@nextui-org/accordion'
import Image from 'next/image'
const WeekDays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

export default function Forecast ({ data }) {
  const dayInAWeek = new Date().getDay()
  const forecastDays = WeekDays.slice(dayInAWeek, WeekDays.length).concat(WeekDays.slice(0, dayInAWeek))

  // Group forecast data by day
  const groupedForecast = {}
  data.list.forEach(item => {
    const date = new Date(item.dt * 1000) // Convert timestamp to date
    const day = date.getDate()
    if (!groupedForecast[day]) {
      groupedForecast[day] = item
    } else {
      // Compare temperatures and update if necessary
      if (item.main.temp_max > groupedForecast[day].main.temp_max) {
        groupedForecast[day].main.temp_max = item.main.temp_max
      }
      if (item.main.temp_min < groupedForecast[day].main.temp_min) {
        groupedForecast[day].main.temp_min = item.main.temp_min
      }
    }
  })

  const groupedForecastList = Object.values(groupedForecast)

  return (
    <section className='w-full flex flex-col p-4 overflow-hidden border-0 outline-none max-w-xl  '>
      <h1 className='font-bold text-xl'>Pronostico</h1>
      <Accordion selectionMode='multiple' variant='splitted' className='w-auto' defaultExpandedKeys='0'>
        {groupedForecastList.map((item, idx) => {
          const date = new Date(item.dt * 1000)
          return (
            <AccordionItem
              className='bg-slate-600 rounded-xl mt-4 text-white'
              indicator=' '
              startContent={<Image src={`/icons/${item.weather[0].icon}.png`} width={80} height={100} alt='icono del clima' className='p-4' />}
              key={idx}
              aria-label='Accordion'
              title={<h3 className='font-semibold text-lg'>{forecastDays[date.getDay()]}</h3>}
              subtitle={
                <div className='space-x-4'>
                  <span className='capitalize'>{item.weather[0].description}</span>
                  <span>{Math.floor(item.main.temp_min)}°C / {Math.ceil(item.main.temp_max)}°C</span>
                </div>
            }
              // title={<span>{item.dt_txt}</span>}
            >
              <div className='flex flex-row justify-between px-4 py-2 items-center'>
                <span className='border-b-2 border-gray-500'>Nubes</span>
                <span className='border-b-2 border-gray-500'>{item.clouds.all}%</span>
              </div>
              <div className='flex flex-row justify-between px-4 py-2'>
                <span className='border-b-2 border-gray-500'>Viento</span>
                <span className='border-b-2 border-gray-500'>{item.wind.speed} m/s</span>
              </div>

              <div className='flex flex-row justify-between px-4 py-2'>
                <span className='border-b-2 border-gray-500'>Presion</span>
                <span className='border-b-2 border-gray-500'>{item.main.pressure} hPa</span>
              </div>
              <div className='flex flex-row justify-between px-4 py-2'>
                <span className='border-b-2 border-gray-500'>Humedad</span>
                <span className='border-b-2 border-gray-500'>{item.main.humidity}%</span>
              </div>

              <div className='flex flex-row justify-between px-4 py-2'>
                <span className='border-b-2 border-gray-500'>Nivel del mar</span>
                <span className='border-b-2 border-gray-500'>{item.main.sea_level} m</span>
              </div>
              <div className='flex flex-row justify-between px-4 py-2'>
                <span className='border-b-2 border-gray-500'>Sensacion termica</span>
                <span className='border-b-2 border-gray-500'>{Math.round(item.main.feels_like)} °C</span>
              </div>

            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}
