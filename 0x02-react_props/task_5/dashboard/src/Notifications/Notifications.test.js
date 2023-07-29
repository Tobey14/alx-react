import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("<Notifications />", () => {
	it("Notifications renders without crashing", () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toEqual(true);
	});
	it("Notifications renders three NotificationItem", () => {
		const wrapper = shallow(<Notifications />);
		wrapper.update();
		expect(wrapper.find(<NotificationItem />)).toHaveLength(3);
	});
	it("Notifications renders the text Here is the list of notifications", () => {
		const text = "Here is the list of notifications";
		const wrapper = shallow(<Notifications />);
		wrapper.update();
		expect(wrapper.find(".Notifications p").text()).toEqual(text);
	});

	//new

	it('displays menu item when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);

		expect(wrapper.find('div.menuItem').exists()).equal(true);
		expect(wrapper.find('div.menuItem').html()).equal(
			'<div class="menuItem"><p>Your Notifications</p></div>'
		);
	});

	it('does not display notifications when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);

		expect(wrapper.find('div.Notifications').exists()).equal(false);
	});

	it('does not display menuItem when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(wrapper.find('div.menuItem').exists()).equal(true);
	});

	it('displays Notifications when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(wrapper.find('div.Notifications').exists()).equal(true);
	});

});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
	let wrapper;
	const listNotifications = [
	  {id: 1, value: "New course available", type: "default"},
	  {id: 2, value: "New resume available", type: "urgent"},
	  {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
	];
  
	beforeEach(() => {
	  wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
	});
  
	it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
	  expect(wrapper.find("NotificationItem")).to.have.lengthOf(3);
	  expect(wrapper.find("NotificationItem").first().props().value).equal('New course available');
	});
});