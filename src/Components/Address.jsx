import {useEffect, useRef} from 'react'
import '../Style/Calensar.css'

const Address = () => {
  const addressRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          } else {
            entry.target.classList.remove('fade-in-visible')
          }
        })
      },
      {
        threshold: 0.1, // Start animation when 10% is visible
      }
    )

    if (addressRef.current) {
      observer.observe(addressRef.current)
    }

    return () => {
      if (addressRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(addressRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={addressRef}
      className='address-container fade-in flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-5'
    >
      <div className='text-center mb-6'>
        <p className='special-font text-lg sm:text-xl md:text-2xl font-bold text-gray-700'>
          Manzil: Toshkent shahar, Mirzo Ulug’bek tumani, Do’rmon yo’li ko’chasi, 9
        </p>
        <p className='special-font text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
          Asia Palace Restorani
        </p>
      </div>
      <div className='text-center mb-4'>
        <p className='special-font text-sm sm:text-base md:text-lg text-gray-500'>
          Sizga qulaylik yaratish uchun manzil xaritasini joyladik. Tashrifingiz bilan bizni xursand
          qilasiz digan umidamiz!
        </p>
      </div>
      <div className='map-container mb-4 w-full max-w-4xl p-6'>
        <iframe
          title='Asia Palace Map'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.642354942719!2d69.24141521527095!3d41.297086009152105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef342c9e2fb71%3A0x5c1de631b456f3ec!2sAsia%20Palace!5e0!3m2!1sen!2s!4v1628436827894!5m2!1sen!2s'
          className='w-full h-64 sm:h-80 md:h-96'
          style={{border: 0}}
          allowFullScreen=''
          loading='lazy'
        ></iframe>
      </div>
      <div className='text-center'>
        <button className='special-font bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600'>
          Yandeks xaritaga otish
        </button>
      </div>
    </div>
  )
}

export default Address
