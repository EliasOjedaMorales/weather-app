import Image from 'next/image'
export default function CurrentWeather ({ data }) {
  return (
    <section className='w-[90%] max-w-md shadow-2xl rounded-xl bg-gray-700 text-white m-0 px-5 pb-5 mt-5'>
      <div className='flex justify-between items-center'>
        <div>
          <p className='text-lg font-semibold m-0 tracking-widest '>{data.city}</p>
          <p className='font-normal text-sm m-0 capitalize'>{data.weather[0].description}</p>
        </div>
        <Image alt='icono del clima actual' width={100} height={100} src={`/icons/${data.weather[0].icon}.png`} />
      </div>

      <div className='flex justify-between items-center'>
        <h1 className='font-semibold text-5xl w-auto tracking-tighter my-3'>{Math.round(data.main.temp)}°C</h1>
        <div className='w-full pl-5'>

          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Viento</span>
            <span className='text-right font-semibold text-xs'>{data.wind.speed}m/s</span>
          </div>

          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Presion</span>
            <span className='text-right font-semibold text-xs'> {data.main.pressure} hPa</span>
          </div>

          <div className='flex justify-between '>
            <span className='text-left font-normal text-xs'>Humedad</span>
            <span className='text-right font-semibold text-xs'>{data.main.humidity}%</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-left font-normal text-xs'>Sensacion termica</span>
            <span className='text-right font-semibold text-xs'>{Math.round(data.main.feels_like)}°C</span>
          </div>

        </div>
      </div>
    </section>
  )
}
