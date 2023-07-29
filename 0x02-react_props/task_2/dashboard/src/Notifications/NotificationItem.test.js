import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
  it("NotificationItem renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("NotificationItem renders correct html from prop", () => {
    const wrapper = shallow(<NotificationItem type="default" and value="test"/>);
    wrapper.update();
    expect(wrapper.contains(<li>test</li>)).to.equal(true);
  });

  it("NotificationItem renders correct html from html prop", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
    wrapper.update();
    expect(wrapper.contains(<li><u>test</u></li>)).to.equal(true);
  });
  
});
