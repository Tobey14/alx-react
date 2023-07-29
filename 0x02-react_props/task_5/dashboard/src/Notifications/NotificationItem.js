import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import icon from "../assets/close-icon.png";
import PropTypes from 'prop-types'

function NotificationItem({type, html, value}) {
  return (
    
    <li data-priority="default" data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>
        
  );
}

NotificationItem.PropTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string })
}

NotificationItem.defaultProps = {
  type: 'default',
}

export default NotificationItem;
