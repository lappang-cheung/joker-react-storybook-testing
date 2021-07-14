// Required packages
import React from 'react';
import { shallow } from 'enzyme';
// Custom components
import Header from '../Nav/Header';
// Store the component testing
let wrapper;
// Testing header components
describe('Header Component', () => {
    // Adding data
    const props = {
        menuToggle: false, 
        setMenuToggle: jest.fn(),
    };
    // Setup the props for the header
    beforeEach(() => {
        wrapper = shallow(<Header {...props} />);
    });
    // Expect to exist
    it('The header component should exist', () => {
        expect(wrapper.length).toEqual(1);
    });
    // Check logo
    it('Check if the logo exist', () => {
        const logo = wrapper.find('.logo')
        expect(logo.find('img').prop("src")).toEqual('logo.png');
    });
    // Check hamburger
    it('Check if the toggle exist', () => {
        const toggle = wrapper.find('.toggleBtn')
        expect(toggle.prop("src")).toEqual('toggle.png');
    });
});