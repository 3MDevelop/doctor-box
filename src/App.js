import React from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);


const App = () => {
  return (
    <div className='mainContainer container-fluid d-flex flex-column align-items-center p-0 m-0'>
      <div className='appContainer col-12 col-md-8 d-flex flex-column'>
        <div id="sideMenu">
          <div href="#" className="close-btn">&times;</div>
          <div href="#">Home</div>
          <div href="#">About</div>
          <div href="#">Contact</div>
        </div>



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
        <div className='appBody flex-fill d-flex flex-column justify-content-end align-items-center '>
          <div className='p-2 flex-fill w-100'>
            Welcome to Doctor Box
          </div>
          <footer className='appFooter px-5 py-1 text-white'>Footer</footer>
        </div>

      </div>
    </div>



    /* <div className="App text-white d-flex flex-column align-items-center justify-content-between container-fluid">
    </div> */
  );
}

export default App;
