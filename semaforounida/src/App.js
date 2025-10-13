
import React, { useState } from 'react';
import WebcamFeed from './components/WebcamFeed';
import DetectionStatus from './components/DetectionStatus';
import TrafficLight from './components/TrafficLight';
import './styles.css';
import './TrafficLight.css';

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
      </div>
      <div className="content-wrapper">
        <div className="semaforo-container">
          <h1>Semaforo</h1>
          <div className="content-wrapper"><TrafficLight detected={helmetDetected} />
          </div>
        </div>
      </div>
     <div className="text-wrapper">
        <h2>Instrucciones de Uso</h2>
        <ul>
        <li>Asegúrate de que tu cámara web esté conectada y funcionando correctamente.</li>
        <li>Permite el acceso a la cámara cuando se te solicite.</li>
        <li>Coloca un casco en el área visible de la cámara para que el detector pueda identificarlo.</li>
        <li>Observa el semáforo: se pondrá en verde si se detecta un casco, en rojo si no se detecta ninguno, y en amarillo mientras el sistema está lirocesando la imagen.</li>
        <li>Asegúrate de que haya suficiente iluminación para mejorar la precisión del detector.</li>
        <li>Si tienes problemas con la detección, intenta ajustar la posición del casco o la iluminación del entorno.</li>
        </ul>
        </div>
    </div>

  )
    ;


}

export default App;