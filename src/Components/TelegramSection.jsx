import {useEffect} from 'react'
import '../Style/Calensar.css'

const TelegramSection = () => {
  useEffect(() => {
    const section = document.querySelector('.telegram-section')
    const handleScroll = () => {
      const sectionTop = section.getBoundingClientRect().top
      const sectionHeight = section.offsetHeight
      const windowHeight = window.innerHeight

      if (sectionTop <= windowHeight - sectionHeight / 3) {
        section.classList.add('fade-in')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='telegram-section text-center my-8 opacity-0 px-4 sm:px-6 lg:px-8'>
      <p className='special-font text-gray-700 mb-4'>
        Barcha rasm va videolar bilan ushbu Telegram guruhda bo‘lishsangiz juda mamnun bo‘lar edik!
      </p>
      <button className='special-font bg-white text-pink-500 border border-pink-500 rounded-full px-4 py-2 font-semibold mb-4 hover:bg-pink-500 hover:text-white transition duration-300'>
        TELEGRAM GURUH
      </button>
      <p className='text-gray-700 special-font'>NIKOH SHODIYONAMIZDA KO‘RISHGUNCHA!</p>
      <div className='border-t-2 border-gray-200 my-4'></div>
    </div>
  )
}

export default TelegramSection
