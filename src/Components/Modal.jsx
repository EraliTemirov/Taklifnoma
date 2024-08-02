import PropTypes from 'prop-types'

const Modal = ({toggleModal, setPlaying, audioRef}) => {
  const handlePlay = () => {
    setPlaying(true)
    audioRef.current.play()
    toggleModal()
  }

  const handleStop = () => {
    setPlaying(false)
    audioRef.current.pause()
    toggleModal()
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75 backdrop-blur-sm'>
      <div className='bg-white w-11/12 max-w-md p-8 rounded-xl shadow-2xl transform transition-all hover:scale-105'>
        <h2 className='text-2xl font-semibold mb-6 text-center text-gray-800'>
          Qoshiq qoyilsinmi?
        </h2>
        <div className='flex justify-center space-x-4'>
          <button
            onClick={handlePlay}
            className='bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'
          >
            Ha
          </button>
          <button
            onClick={handleStop}
            className='bg-red-500 hover:bg-red-600 text-white font-bold py-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'
          >
            Yoq
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  setPlaying: PropTypes.func.isRequired,
  audioRef: PropTypes.object.isRequired,
}

export default Modal
