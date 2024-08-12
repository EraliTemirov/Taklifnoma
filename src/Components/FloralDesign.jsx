import {useEffect, useRef} from 'react'
import floralImage from '../Image/gul.jpg'

const FloralDesign = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={sectionRef}
      className='py-14 pb-20 fade-in relative w-full flex justify-center items-center sm:px-4 md:px-6 lg:px-8'
    >
      <img
        src={floralImage}
        alt='Floral Design'
        className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl'
      />
      <div className='absolute text-3xl sm:text-3xl md:text-4xl font-semibold text-gray-600'>
        N & M
      </div>
    </div>
  )
}

export default FloralDesign
