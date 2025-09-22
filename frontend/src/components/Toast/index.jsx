import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: "top-right"
    });
  };

  return (
    <div>
      <button onClick={showToastMessage}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default Notification;