import React, { useEffect, useState } from 'react';
import './App.css';

import SideMenu from './components/SideMenu'
import HeaderSection from './components/HeaderSection'
import FooterSection from './components/FooterSection'
import HomePage from './components/HomePage';
import Profile from './components/ProfileSection';
import PationsList from './components/PatientsList';
import ChatSection from './components/ChatSection';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);

const App = () => {
  const [showSide, setShowSide] = useState(false)
  const [activePage, setActivePage] = useState('home');
  const [userAuth, setUserAuth] = useState()
  const [userData, setUserData] = useState([])

  const userAuthHandler = (newSit) => {
    setUserAuth(newSit)
  }

  const userDataHandler = (newData) => {
    setUserData(newData)
  }

  const showSideHandler = () => {
    setShowSide(prevShowSide => !prevShowSide);
  };

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  const pages = {
    home: <HomePage />,
    profile: <Profile userAuthHandler={userAuthHandler} />,
    patientsList: <PationsList />,
    chat: <ChatSection />,
  };

  useEffect(() => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const userTokenCookie = cookies.find(cookie => cookie.startsWith('uT='));
    if (!userTokenCookie) {
      userAuthHandler(false)
    } else {
      /* check is token is valid */
      /* on valid token  */
      userAuthHandler(true);
      userDataHandler({
        fName: "محمد",
        lName: "مقدم ماهری",
        uID: 12341234,
        uPhone: 9124403693
      });
      /* on not valid clear cookie */
      /* setUserAuth(false) */
    }
  }, []);

  return (
    <div className='mainContainer container-fluid d-flex flex-column align-items-center p-0 m-0'>
      <div className='appContainer col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 d-flex flex-column'>
        <HeaderSection showSideHandler={showSideHandler} userAuth={userAuth} userData={userData} userAuthHandler={userAuthHandler} handlePageChange={handlePageChange} />
        <SideMenu showSide={showSide} setShowSide={setShowSide} handlePageChange={handlePageChange} />
        <div className='appBody flex-fill d-flex flex-column justify-content-end align-items-center '>
          <div className='p-0 mb-2 px-1 flex-fill w-100' style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 150px)' }}>
            {pages[activePage]}
          </div>
          <FooterSection handlePageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}

export default App;