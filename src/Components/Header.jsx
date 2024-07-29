import {useState, useRef, useEffect} from 'react'
import Modal from './Modal'
import music from './Musik.mp3' // Audio file import
import {Link} from 'react-scroll'

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [isModalOpen, setModalOpen] = useState(true)
  const [isPlaying, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleSidebar = () => {
    console.log('Toggling sidebar. Current state:', isSidebarOpen)
    setSidebarOpen((prevState) => !prevState)
  }

  const closeSidebar = () => setSidebarOpen(false)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((e) => console.error('Audio playback failed:', e))
      }
      setPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5 // Set initial volume
      audioRef.current.addEventListener('ended', () => setPlaying(false))
      audioRef.current.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully')
      })
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio loading error:', e)
      })

      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        audioRef.current.removeEventListener('ended', () => setPlaying(false))
      }
    }
  }, [])

  useEffect(() => {
    console.log('Sidebar state changed:', isSidebarOpen)
  }, [isSidebarOpen])

  // Sidebar component integrated into App
  const Sidebar = () => (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button
        onClick={closeSidebar}
        className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
      <div className='p-4 py-16'>
        <ul>
          <li className='mb-2'>
            <Link to='Taklif' smooth={true} duration={500}>
              <button className='special-fonts'> Taklif etamiz</button>
            </Link>
          </li>
          <li className='mb-2'>
            <Link to='Qachon' smooth={true} duration={500}>
              <button className='special-font'> Qachon boladi</button>
            </Link>
          </li>
          <li className='mb-2'>
            <Link to='Qayer' smooth={true} duration={500}>
              <button className='special-font'> Qayerda</button>
            </Link>
          </li>
          <li className='mb-2'>
            <Link to='NimalarBoladi' smooth={true} duration={500}>
              <button className='special-font'> Nimalar boladi</button>
            </Link>
          </li>

          <li className='mb-2'>
            <Link to='Kelasizmi' smooth={true} duration={500}>
              <button className='special-font'> Kelasizmi</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className='relative bg-gray-50 mt-16'>
      <nav className='fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white shadow z-50'>
        <button onClick={toggleSidebar} className='text-gray-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='2'
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
        <h1 className='special-font text-2xl font-bold text-gray-800'>TAKLIFNOMA</h1>
        <button onClick={togglePlay} className='text-gray-700'>
          {isPlaying ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M5 3v18l15-9L5 3z' />
            </svg>
          )}
        </button>
      </nav>

      <Sidebar />
      {isModalOpen && (
        <Modal
          toggleModal={() => setModalOpen(false)}
          setPlaying={setPlaying}
          audioRef={audioRef}
        />
      )}
      <audio ref={audioRef} src={music} loop />
    </div>
  )
}

export default App
