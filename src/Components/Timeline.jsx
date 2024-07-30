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
      <div className='timeline relative'>
        <div className='timeline-line'></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-event ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className='event-icon'>
              <img src={event.icon} alt={event.description} className='w-8 h-8' />
            </div>
            <div className='event-details'>
              <p className='event-time'>{event.time}</p>
              <p className='event-description'>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='timeline-flower'>
        <img src='https://le-invitations.netlify.app/img/footer-flower.png' alt='' />
      </div>
    </div>
  )
}

export default Timeline
