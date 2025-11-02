/*
import React, { useRef, useEffect, useState } from 'react';
//import * as tf from '@tensorflow/tfjs';
//import '@tensorflow/tfjs-backend-webgl';

const WebcamFeed = ({ onDetection }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    };

    setupCamera();

    const detectHelmet = async () => {
      // Aquí iría tu modelo de TensorFlow.js
      // Simulación de detección cada 2 segundos
      setInterval(() => {
        const detected = Math.random() > 0.5;
        onDetection(detected);
      }, 5000);
    };

    detectHelmet();
  }, [onDetection]);

  return (
    <div className="webcam-container">
      <video ref={videoRef} autoPlay playsInline muted className="webcam" />
    </div>
  );
};

export default WebcamFeed;

*/

import React, { useRef, useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';

const MODEL_URL = `${import.meta.env.BASE_URL}model/`; // Carpeta pública donde está el modelo

const WebcamFeed = ({ onDetection }) => {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const [maxPredictions, setMaxPredictions] = useState(0);

  useEffect(() => {
    const setupCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error al iniciar la cámara:', error);
        alert('No se pudo acceder a la cámara. Verifica permisos y conexión.');
      }
    };

    const loadModel = async () => {
      try {
        const loadedModel = await tmImage.load(MODEL_URL + 'model.json', MODEL_URL + 'metadata.json');
        setModel(loadedModel);
        setMaxPredictions(loadedModel.getTotalClasses());
        console.log('Modelo cargado correctamente:', loadedModel);
      } catch (error) {
        console.error('Error al cargar el modelo:', error);
        alert('No se pudo cargar el modelo. Verifica la ruta y los archivos.');
      }
    };

    setupCamera();
    loadModel();
  }, []);

  useEffect(() => {
    let intervalId;

    const detectHelmet = async () => {
      if (!model || !videoRef.current) return;

      try {
        const prediction = await model.predict(videoRef.current);
        console.log('Predicciones:', prediction);

        const helmetClass = prediction.find(p => p.className.toLowerCase().includes('casco'));
        const isHelmetDetected = helmetClass && helmetClass.probability > 0.4;

        onDetection(isHelmetDetected);
      } catch (error) {
        console.error('Error en la detección:', error);
      }
    };

    if (model) {
      intervalId = setInterval(detectHelmet, 3000); // cada 3 segundos
    }

    return () => clearInterval(intervalId);
  }, [model, onDetection]);

  return (
    <div className="webcam-container">
      <h1>Detector de Casco</h1>
      <video ref={videoRef} autoPlay playsInline muted className="webcam" />
    </div>
  );
};

export default WebcamFeed;