import SuitIcon from '../Image/suit.png'
import CameraIcon from '../Image/camera.png'
import RingsIcon from '../Image/diamond-ring.png'
import DressIcon from '../Image/dress.png'
import '../Style/Calensar.css'

const WeddingTimeline = () => {
  const events = [
    {time: '12:00', title: 'KUYOVNAVKAR', icon: SuitIcon},
    {time: '15:00', title: 'FOTOSESSIYA', icon: CameraIcon},
    {time: '18:00', title: 'NIKOH KECHASI', icon: RingsIcon},
    {time: '21:00', title: 'KELINSALOM', icon: DressIcon},
  ]

  return (
    <div className='bg-white p-8'>
      <div className='max-w-md mx-auto'>
        <div className='relative'>
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-pink-200'></div>
          {events.map((event, index) => (
            <div key={index} className='flex items-center mb-2'>
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 pl-8'}`}>
                <img src={event.icon} alt={event.title} className='w-16 h-16 mt-4 inline-block' />
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'order-1 text-right pr-8'}`}>
                <p className='text-xl font-semibold text-gray-400'>{event.time}</p>
                <p className='text-sm text-gray-400 uppercase'>{event.title}</p>
              </div>
              <div className='absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-300 rounded-full'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WeddingTimeline
