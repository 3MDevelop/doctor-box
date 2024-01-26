import React from 'react';
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
  return (
    <div className='mainContainer container-fluid d-flex flex-column align-items-center p-0 m-0'>
      <div className='appContainer col-12 col-md-8 d-flex flex-column'>
        <SideMenu />
        <HeaderSection />
        <BodySection />

      </div>
    </div>



    /* <div className="App text-white d-flex flex-column align-items-center justify-content-between container-fluid">
    </div> */
  );
}

export default App;
