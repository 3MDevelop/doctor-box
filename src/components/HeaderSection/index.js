import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderSection = () => {
  return (
    <div className='appHeader p-0 d-flex flex-row-reverse'>
      <div className=' px-2 pb-2 me-3 d-flex align-items-end'>
        <div>
          <FontAwesomeIcon
            icon="fas fa-bars"
            type="button"
            className="text-white"
          />
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default HeaderSection