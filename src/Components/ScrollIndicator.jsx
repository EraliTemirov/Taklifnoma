import {useEffect, useState} from 'react'

const ScrollIndicator = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
      setShowScrollIndicator(!isBottom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return showScrollIndicator ? (
    <div className='fixed bottom-2 left-1/2 transform -translate-x-1/2'>
      <div className='animate-bounce text-pink-500'>
        <svg
          className='w-12 h-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='4'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
        <svg
          className='w-12 h-12 -mt-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='4'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
        <svg
          className='w-12 h-12 -mt-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='4'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </div>
    </div>
  ) : null
}

export default ScrollIndicator
