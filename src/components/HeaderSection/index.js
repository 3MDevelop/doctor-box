import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserIcon from './userIcon'

const HeaderSection = ({ showSideHandler, userAuth, userData, userAuthHandler,handlePageChange }) => {


  return (
    <div className='appHeader p-0 d-flex justify-content-between flex-row-reverse'>
      <div className='px-2 pb-2 me-3 d-flex align-items-end'>
        <FontAwesomeIcon
          icon={["fas", "bars"]} // Correct usage of FontAwesomeIcon
          className="text-white"
          onClick={showSideHandler}
        />
      </div>
      <div className='d-flex align-items-end text-white pb-1'>
        <UserIcon userAuth={userAuth} userData={userData} />
      </div>
      <div className='me-auto'>

      </div>
  
      {userAuth && (
        <div className='text-white d-flex align-items-end mb-2 ms-1' style={{ fontSize: '0.7rem', position: 'relative' }}>
          <FontAwesomeIcon
            icon={["fas", "bell"]} // Correct usage of FontAwesomeIcon
            className='border border-white border-2 p-1 rounded-2'
          />
          <div className='remainderLable'>
            50
          </div>
        </div>
      )}
  
      <div className='text-white d-flex align-items-end mb-2 ms-3' style={{ fontSize: '0.7rem', position: 'relative' }}>
        <FontAwesomeIcon
          icon={userAuth ? ["fas", "sign-out"] : ["fas", "sign-in"]} // Correct usage of FontAwesomeIcon
          className='border border-white border-2 p-1 rounded-2'
          onClick={() => { userAuth ? userAuthHandler(!userAuth):  handlePageChange('profile') }}
        />
      </div>
  
      <div className='d-flex align-items-center ms-2'>
        <img src="./images/logo.png" height={'70px'} alt="Logo" />
      </div>
    </div>
  );
  
}

export default HeaderSection