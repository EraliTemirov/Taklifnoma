import {useEffect, useRef} from 'react'
import '../Style/Calensar.css'

const Calendar = () => {
  const calendarRef = useRef(null)

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

    if (calendarRef.current) {
      observer.observe(calendarRef.current)
    }

    return () => {
      if (calendarRef.current) {
        observer.unobserve(calendarRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={calendarRef}
      className='calendar-container fade-in flex flex-col items-center justify-center py-5'
    >
      <div className='text-center'>
        <p className='special-font text-lg sm:text-xl md:text-2xl font-bold text-gray-700'>
          29-Oktabr 2023-Yil
        </p>
        <p className='special-font text-sm sm:text-base md:text-lg text-gray-500'>Soat 18:00 da</p>
      </div>
      <div className='calendar bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8'>
        <div className='special-font grid grid-cols-7 gap-4 sm:gap-4 text-center'>
          <div className='font-bold text-gray-500'>DU</div>
          <div className='font-bold text-gray-500'>SE</div>
          <div className='font-bold text-gray-500'>CHO</div>
          <div className='font-bold text-gray-500'>PA</div>
          <div className='font-bold text-gray-500'>JU</div>
          <div className='font-bold text-gray-500'>SHA</div>
          <div className='font-bold text-gray-500'>YA</div>
          {[...Array(6)].map((_, i) => (
            <div key={i}></div>
          ))}
          {[...Array(31)].map((_, i) => (
            <div key={i} className={`${i + 1 === 29 ? 'text-red-500 p-2' : 'text-gray-700 p-2'}`}>
              {i + 1}
              {i + 1 === 29 && (
                <span className='block text-red-500 heart-icon'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    className='w-4 h-4 sm:w-6 sm:h-6 inline-block'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar
