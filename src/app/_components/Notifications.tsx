
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// export default function Err({message}){
 export const showError = (message) => {
  toast.error(message, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
// return (
//   <div>
//     <button  onClick={showError}
//         className="bg-red-500 text-white px-4 py-2 rounded">Notify</button>
//     <ToastContainer />
//   </div>
// );

// }

export const showSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
