import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("App contains Notifications component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.contains(<Notifications />)).toEqual(true);
  });
  it("App contains Login component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.contains(<Login />)).toEqual(true);
  });

  it("App contains Header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.contains(<Header />)).toEqual(true);
  });

  it("App contains Footer component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.contains(<Footer />)).toEqual(true);
  });
  
});
