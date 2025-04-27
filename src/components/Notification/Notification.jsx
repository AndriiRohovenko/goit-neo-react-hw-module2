import './Notification.module.css';

function Notification({ totalData }) {
  console.log('hello from options');
  return <>{totalData === 0 && <p>No feedback yet</p>}</>;
}

export default Notification;
