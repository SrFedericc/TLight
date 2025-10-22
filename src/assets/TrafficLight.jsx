import '../TrafficLight.css';

const TrafficLight = ({ detected }) => {
  const getActiveLight = () => {
    if (detected === true) return 'green';
    if (detected === false) return 'red';
    return 'yellow';
  };

  const active = getActiveLight();

  return (
    <div className="traffic-light">
      <div className={`light red ${active === 'red' ? 'active' : ''}`}></div>
      <div className={`light yellow ${active === 'yellow' ? 'active' : ''}`}></div>
      <div className={`light green ${active === 'green' ? 'active' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;