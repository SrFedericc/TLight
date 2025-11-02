/*

import React, { useState } from 'react';
import WebcamFeed from './assets/WebcamFeed.jsx';
import DetectionStatus from './assets/DetectionStatus.jsx';
import TrafficLight from './assets/TrafficLight.jsx';
import './styles.css';
import './TrafficLight.css';
import LawInformation from './assets/LawInformation.jsx';

function App() {
  const [helmetDetected, setHelmetDetected] = useState(null);

  return (

    <div className="app-container">


      <div className="content-wrapper">

        <div className="detector-container">
          <h1>Detector de Casco</h1>
          <WebcamFeed onDetection={setHelmetDetected} />
          <DetectionStatus detected={helmetDetected} />
        </div>
     
     
        <div className="semaforo-container">
          <h1>Semaforo</h1>
          <TrafficLight detected={helmetDetected} />
        </div>
      
      <div className="text-wrapper">
        <LawInformation></LawInformation>
      </div>
    </div>
     </div>
    

  )
    ;


}

export default App;

*/


import React, { useState } from 'react';
import WebcamFeed from './assets/WebcamFeed.jsx';
import DetectionStatus from './assets/DetectionStatus.jsx';
import TrafficLight from './assets/TrafficLight.jsx';
import './styles.css';
import './TrafficLight.css';
import LawInformation from './assets/LawInformation.jsx';

function App() {
  const [helmetDetected, setHelmetDetected] = useState(null);

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div className="wrapper">

        <div className="detector-container">
          <WebcamFeed onDetection={setHelmetDetected} />
          <DetectionStatus detected={helmetDetected} />
        </div>

        <div className="semaforo-container">
          <h1>Semáforo</h1>
          <TrafficLight detected={helmetDetected} />
        </div>
</div>
        <div className="text-wrapper">
          <LawInformation />
        </div>

      </div>
    </div>
  );
}

export default App;
