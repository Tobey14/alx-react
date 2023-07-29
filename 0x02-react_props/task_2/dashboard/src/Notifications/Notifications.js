import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          background: "transparent",
          border: "none",
          position: "absolute",
          right: 20,
        }}
        aria-label="close"
      >
        <img src={icon} style={{ width: "0.5rem" }} alt="close-icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </ul>
    </div>
  );
}

export default Notifications;
