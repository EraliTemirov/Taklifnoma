import {Phone, Send, Instagram} from 'lucide-react'

const WeddingInvitation = () => {
  return (
    <div className='wedding-invitation text-center p-4 sm:p-6 md:p-8 lg:p-10 max-w-md mx-auto'>
      <p className='text-gray-500 mb-4 text-sm sm:text-base'>HURMAT BILAN</p>
      <h1 className='text-3xl sm:text-4xl md:text-4xl font-bold text-pink-500 mb-4'>
        Niyozbek va Maxliyoxon
      </h1>

      <div className=' flex items-center justify-center'>
        <img src='https://le-invitations.netlify.app/img/yakun.png' alt='' />
      </div>

      <div className='flex gap-4 justify-center space-x-4 text-pink-500'>
        <a
          href='#'
          className='text-xl sm:text-2xl hover:text-pink-600 transition-colors duration-300'
        >
          <Phone />
        </a>
        <a
          href='#'
          className='text-xl sm:text-2xl hover:text-pink-600 transition-colors duration-300'
        >
          <Send />
        </a>
        <a
          href='#'
          className='text-xl sm:text-2xl hover:text-pink-600 transition-colors duration-300'
        >
          <Instagram />
        </a>
      </div>
    </div>
  )
}

export default WeddingInvitation
