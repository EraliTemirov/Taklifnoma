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
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50'>
      <div className='bg-white p-6 rounded shadow-lg'>
        <h2 className='text-xl mb-4'>Qoshiq qoyilsinmi yoki yoq?</h2>
        <div className='flex justify-between'>
          <button onClick={handlePlay} className='bg-blue-500 text-white px-4 py-2 rounded'>
            Ha
          </button>
          <button onClick={handleStop} className='bg-red-500 text-white px-4 py-2 rounded'>
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
