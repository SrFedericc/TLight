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
      }, 2000);
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