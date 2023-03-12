import ReactDOM from "react-dom";

import styles from "./notification.module.css";

export default function Notification(props) {
  const { title, message, status } = props;

  let statusStyles = "";

  if (status === "success") {
    statusStyles = styles.success;
  }

  if (status === "error") {
    statusStyles = styles.error;
  }

  const cssStyless = `${styles.notification} ${statusStyles}`;

  return ReactDOM.createPortal(
    <div className={cssStyless}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}
