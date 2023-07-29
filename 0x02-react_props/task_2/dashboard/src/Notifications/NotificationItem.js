import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import icon from "../assets/close-icon.png";

function NotificationItem({type, html, value}) {
  return (
    
    <li data-priority="default" data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
        
  );
}

export default NotificationItem;
