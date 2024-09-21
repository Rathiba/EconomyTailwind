import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { HeaderComp } from './Components/Header.js';
import RangeCal from './Components/RangeCalculation.js';
import Footer from './Components/Footer.js';
import RoadMap from './Components/RoadMap.js';
import AlphaFinder from './Components/AlphaFinder.js';
import './App.css'
const App = () => {
    return (
        <Router>
            <div className='page-container'>
            <HeaderComp />
          <div className='content-wrap'>
            <Routes>
                <Route path='/HeaderComp' element={<HeaderComp />} />
                <Route path="/RoadMap" element={<RoadMap />} />
                <Route path='/RangeCal' element={<RangeCal />} />
                <Route path='/AlphaFinder' element={<AlphaFinder/>} />
                    </Routes>
                    </div>
                <Footer />
                </div>
       </Router>
    ) 
}
export default App;
