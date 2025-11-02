import '../Information.css';

const LawInformation = () => {

    return (
        <div className="information">
          
        <ul>
              <h2>Instrucciones de Uso</h2>
        <li>Asegúrate de que tu cámara web esté conectada y funcionando correctamente.</li>
        <li>Permite el acceso a la cámara cuando se te solicite.</li>
        <li>Coloca un casco en el área visible de la cámara para que el detector pueda identificarlo.</li>
        <li>Observa el semáforo: se pondrá en verde si se detecta un casco, en rojo si no se detecta ninguno, y en amarillo mientras el sistema está lirocesando la imagen.</li>
        <li>Asegúrate de que haya suficiente iluminación para mejorar la precisión del detector.</li>
        <li>Si tienes problemas con la detección, intenta ajustar la posición del casco o la iluminación del entorno.</li>
        </ul>
        </div>
    );

};


export default LawInformation;