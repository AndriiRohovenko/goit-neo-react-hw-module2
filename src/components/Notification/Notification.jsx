import './Notification.module.css';

function Notification({ totalData }) {
  return <>{totalData === 0 && <p>No feedback yet</p>}</>;
}

export default Notification;
