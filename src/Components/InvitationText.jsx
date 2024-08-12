import {useEffect, useRef} from 'react'
import gul from '../Image/gulpastki.jpg'

const InvitationText = () => {
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
    <div ref={sectionRef} className='fade-in text-center  px-4 pt-20 pb-4'>
      <p className='special-font text-2xl sm:text-3xl md:text-4xl font-DancingScript text-gray-600 mb-4'>
        Hurmatli Qadrdonim!
      </p>
      <p className='special-font  text-lg sm:text-xl md:text-2xl font-Roboto text-gray-500 leading-loose'>
        SIZNI BIZ UCHUN MUHIM BO‘LGAN
        <br />
        QUVONCHLI KUN - NIKOH KECHAMIZNI BIZ
        <br />
        BILAN BAHAM KO‘RISHGA VA OILAVIY
        <br />
        HAYOTGA ILK QADAMIMIZNING GUVOHI
        <br />
        BO‘LISHGA TAKLIF ETAMIZ!
      </p>
      <div className='flex justify-center'>
        <img
          src='https://le-invitations.netlify.app/img/light%20emotions%20icons+++.png'
          alt='img'
          className='w-3/4 sm:w-1/2 md:w-1/3'
        />
      </div>
      <div className='flex justify-center'>
        <img src={gul} alt='Gul' className='w-3/4 sm:w-1/2 md:w-1/3' />
      </div>
    </div>
  )
}

export default InvitationText
