import PropTypes from 'prop-types'

const Sidebar = ({isOpen, closeSidebar}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out bg-white shadow-lg w-64 p-4`}
    >
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-bold'>Salom</h2>
        <button onClick={closeSidebar} className='text-gray-700'>
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
        </button>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
}

export default Sidebar
