
const DetectionStatus = ({ detected }) => {
  return (
    <div className={`status ${detected ? 'safe' : 'danger'}`}>
      {detected ? '✅ Casco Detectado' : '❌ Sin Casco'}
    </div>
  );
};

export default DetectionStatus;

