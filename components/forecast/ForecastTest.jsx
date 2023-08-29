// import { Accordion, AccordionItem } from '@nextui-org/accordion'
import Image from 'next/image'
// import { GiFlexibleLamp } from 'react-icons/gi'
const WeekDays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

export default function Forcast ({ data }) {
  const dayInAWeek = new Date().getDay()
  const forecastDays = WeekDays.slice(dayInAWeek, WeekDays.length).concat(WeekDays.slice(0, dayInAWeek))
  return (
    <section className=''>
      <h1 className='font-bold text-2xl'>Pronostico</h1>
      <div>
        {data.list.slice(0, 7).map((item, idx) => {
          return (
            <div key={idx} className='bg-slate-600 text-white rounded-xl m-4 p-4 flex flex-row justify-between items-center space-x-6 w-[100vw] md:w-auto'>
              <div className='flex flex-row items-center justify-start space-x-4'>
                <div>
                  <Image src={`/icons/${item.weather[0].icon}.png`} width={80} height={100} alt='icono del clima' className='' />
                </div>
                <div>
                  <span>{forecastDays[idx]}</span>
                </div>
              </div>
              <div className='flex flex-row items-center space-x-4'>
                <div>
                  <span className='capitalize text-left'>{item.weather[0].description}</span>
                </div>
                <div>
                  <span>{Math.floor(item.main.temp_min)}°C / {Math.ceil(item.main.temp_max)}°C</span>
                </div>
              </div>
              <div>
                <span>Presion</span>
                <span>{item.main.pressure} hPa</span>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}
