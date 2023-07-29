import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import icon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


function Notifications({ displayDrawer, listNotifications }) {
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
          {
            listNotifications.length != 0 ?
              <p>Here is the list of notifications</p>
              : null
          }
          <ul>
            {
              listNotifications.length == 0 ?
                <NotificationItem type="default" value="No new notification for now" />
                : 
              listNotifications.map((val, idx) => {
                return <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                />
              })
            }
          </ul>
        </div>
      }
    </div>

  );
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)

}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []

}

export default Notifications;
