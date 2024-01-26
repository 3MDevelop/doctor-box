import React, { useState } from 'react';
import './App.css';

import SideMenu from './components/SideMenu'
import HeaderSection from './components/HeaderSection'
import BodySection from './components/BodySection'


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);


const App = () => {
  const [showSide, setShowSide] = useState(false)

  const showSideHandler = () => {
    setShowSide(prevShowSide => !prevShowSide);
  };

  return (
    <div className='mainContainer container-fluid d-flex flex-column align-items-center p-0 m-0'>
      <div className='appContainer col-12 col-md-8 d-flex flex-column'>
        <HeaderSection showSideHandler={showSideHandler}/>
        <SideMenu showSide={showSide} setShowSide={setShowSide} />
        <BodySection />
      </div>
    </div>

  );
}

export default App;
