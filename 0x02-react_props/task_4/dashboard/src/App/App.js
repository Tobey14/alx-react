import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import PropTypes from 'prop-types'
import CourseList from "../CourseList/CourseList";


function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <Header />

        <div className="App-body">
          {!isLoggedIn?
           <Login /> 
           :
           <CourseList />
          }
          
        </div>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;
