import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function notifyAlerts(label: string) {
  const successsNotify = toast.success(label);
  const errorNotify = toast.error(label);
  const loadingNotify = toast.loading(label);
  const infoNotify = toast.info(label);
  const doneNotify = toast.done(label);

  return { successsNotify, errorNotify, loadingNotify, infoNotify, doneNotify };
}

export default notifyAlerts;
