import { Accordion, AccordionItem } from '@nextui-org/accordion'
import Image from 'next/image'
// const WeekDays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

export default function Forecast ({ data }) {
  // const dayInAWeek = new Date().getDay()
  // const forecastDays = WeekDays.slice(dayInAWeek, WeekDays.length).concat(WeekDays.slice(0, dayInAWeek))

  return (
    <section className='w-full flex flex-col p-4 overflow-hidden border-0 outline-none max-w-xl  '>
      <h1 className='font-bold text-xl'>Pronostico</h1>
      <Accordion selectionMode='multiple' variant='splitted' className='w-auto' defaultExpandedKeys='0'>
        {data.list.splice(0, 10).map((item, idx) => {
          const dateString = item.dt_txt
          const [date, hours] = dateString.split(' ')
          // eslint-disable-next-line no-unused-vars
          const [year, month, day] = date.split('-')
          const [hour, min] = hours.split(':')
          return (
            <AccordionItem
              className='bg-slate-600 rounded-xl mt-4 text-white'
              indicator=' '
              startContent={<Image src={`/icons/${item.weather[0].icon}.png`} width={80} height={100} alt='icono del clima' className='p-4' />}
              key={idx}
              aria-label='Accordion'
              title={<h3 className='font-semibold text-lg'>{day}/{month} {hour}:{min}</h3>}
              subtitle={
                <div className='space-x-4'>
                  <span className='capitalize'>{item.weather[0].description}</span>
                  <span>{Math.floor(item.main.temp_min)}°C / {Math.ceil(item.main.temp_max)}°C</span>
                </div>
            }
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
