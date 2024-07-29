import SuitIcon from '../Image/suit.png'
import CameraIcon from '../Image/camera.png'
import RingsIcon from '../Image/diamond-ring.png'
import DressIcon from '../Image/dress.png'
import '../Style/Calensar.css'

const Timeline = () => {
  const events = [
    {time: '12:00', description: 'KUYOVNAVKAR', icon: SuitIcon},
    {time: '15:00', description: 'FOTOSESSIYA', icon: CameraIcon},
    {time: '18:00', description: 'NIKOH KECHASI', icon: RingsIcon},
    {time: '21:00', description: 'KELINSALOM', icon: DressIcon},
  ]

  return (
    <div className='timeline-container bg-white py-10 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-2xl sm:text-3xl font-light text-gray-400 text-center mb-10'>
        Kun Programmasi
      </h2>
      <div className='timeline relative max-w-4xl mx-auto'>
        <div className='timeline-line bg-pink-200 w-0.5 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2'></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-event flex items-center mb-16 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div className='event-icon w-12 h-12 flex items-center justify-center bg-white border border-pink-200 rounded-full mx-auto'>
              <img src={event.icon} alt={event.description} className='w-6 h-6' />
            </div>
            <div className='event-details ml-4 sm:ml-6 text-center sm:text-left'>
              <p className='text-lg sm:text-xl font-semibold text-gray-500'>{event.time}</p>
              <p className='text-xs sm:text-sm uppercase text-gray-400'>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <img src='https://le-invitations.netlify.app/img/footer-flower.png' alt='' />
      </div>
    </div>
  )
}

export default Timeline
