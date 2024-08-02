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
        threshold: 0.1,
      }
    )

    if (calendarRef.current) {
      observer.observe(calendarRef.current)
    }

    return () => {
      if (calendarRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div
              key={i}
              className={`${
                i + 1 === 29 ? 'relative flex items-center justify-center' : 'text-gray-700 p-2'
              }`}
            >
              {i + 1 === 29 ? (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-8 h-8 text-red-500'
                  >
                    <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
                  </svg>
                  <span className='absolute text-white font-bold'>{i + 1}</span>
                </>
              ) : (
                i + 1
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar
