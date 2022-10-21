import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function showToast({ varient, message }) {
  const config = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const neutral = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch(varient){
    case "success":
        toast.success(message, config);
        break;
    case "error":
        toast.error(message, config);
        break;
    case "warning":
        toast.warn(message, neutral);
        break;
    default:
        toast(message, neutral);
        break;
  }
}