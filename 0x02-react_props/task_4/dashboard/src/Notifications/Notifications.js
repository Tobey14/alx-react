import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types'

function Notifications({ displayDrawer }) {
  return (
    <div className="container">
      <div className='menuItem'>
          <p>Your Notifications</p>
      </div>
      {displayDrawer &&
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
      }
    </div>
    
  );
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool.isRequired,
}

Notifications.defaultProps = {
  displayDrawer: false,
}

export default Notifications;
