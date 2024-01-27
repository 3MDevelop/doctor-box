import React, { useState } from 'react';
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

  const showSideHandler = () => {
    setShowSide(prevShowSide => !prevShowSide);
  };

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
  };

  const pages = {
    home: <HomePage />,
    profile: <Profile />,
    patientsList: <PationsList />,
    chat: <ChatSection />,
  };

  return (
    <div className='mainContainer container-fluid d-flex flex-column align-items-center p-0 m-0'>
      <div className='appContainer col-12 col-md-8 d-flex flex-column'>
        <HeaderSection showSideHandler={showSideHandler} />
        <SideMenu showSide={showSide} setShowSide={setShowSide} handlePageChange={handlePageChange} />
        <div className='appBody flex-fill d-flex flex-column justify-content-end align-items-center '>
          <div className='p-0 px-1 flex-fill w-100'>
          {pages[activePage]}
          </div>
          <FooterSection handlePageChange={handlePageChange} />
        </div>
      </div>
    </div>

  );
}

export default App;
