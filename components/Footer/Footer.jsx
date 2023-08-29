import { AiFillGithub } from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logoWix.jpg'
import openWeather from '@/public/openWeatherWIcon.png'
export default function Footer () {
  return (
    <footer className='flex md:flex-row flex-col items-center justify-between space-y-6 w-full bg-[#232B36] mt-auto'>
      <div className='w-1/6'>
        <Link href='https://egom.vercel.app' target='blank'>
          <Image src={logo} alt='logo' width={80} height={100} />
        </Link>
      </div>
      <nav className='flex flex-row justify-between items-center w-1/6'>
        <Link href='https://github.com/EliasOjedaMorales' target='blank' className=''>
          <AiFillGithub className='text-4xl text-white' />
        </Link>
        <Link href='https://www.linkedin.com/in/elias-gabriel-ojeda-morales/' target='blank' className=''>
          <BiLogoLinkedin className='text-4xl text-[#6EA5FF]' />
        </Link>
      </nav>
      <div className='flex md:flex-row items-center h-auto justify-end space-x-8 mr-10'>
        <p className=' text-white font-semibold text-xl'>Powered by</p>
        <Link href='https://openweathermap.org/' target='blank'>
          <Image src={openWeather} alt='OpenWeather logo' width={100} height={45} className='' />
        </Link>
      </div>
    </footer>
  )
}
