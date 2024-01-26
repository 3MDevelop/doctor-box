  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HeaderSection = ({ showSideHandler }) => {


  return (
    <div className='appHeader p-0 d-flex justify-content-between flex-row-reverse'>
      <div className=' px-2 pb-2 me-3 d-flex align-items-end'>
        <FontAwesomeIcon
          icon="fas fa-bars"
          type="button"
          className="text-white"
          onClick={showSideHandler}
        />
      </div>
      <div className='text-white me-auto d-flex align-items-end mb-2 ms-3' style={{ fontSize: '0.9rem', position: 'relative' }}>
        <FontAwesomeIcon
          icon="fa-solid fa-bell"
          className='border border-white border-2 p-1 rounded-2' />
        <div className='remainderLable'>
          50
        </div>
      </div>

      <div className='d-flex align-items-center ms-2'>
        <img src="./images/logo.png" height={'70px'} alt="Logo" />
      </div>
    </div>
  )
}

export default HeaderSection