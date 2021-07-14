// Required packages
import React from 'react';
import { shallow } from 'enzyme';
// Custom components
import Trailer from '../Trailer/Trailer';
// Store the component testing
let wrapper;
// Testing Trailer components
describe('Trailer Component', () => {
    // Adding data
    const props = {
        trailerToggle: true, 
        setTrailerToggle: jest.fn(), 
        movieTrailer: 'https://www.youtube-nocookie.com/embed/t433PEQGErc?start=1'
    };
    // Setup the props for the trailer
    beforeEach(() => {
        wrapper = shallow(<Trailer {...props} />);
    });
    // Expect to exist
    it('The trailer component should exist', () => {
        expect(wrapper.length).toEqual(1);
    });
    // Check for close button
    it('Check if close button exist', () => {
        const closeBtn = wrapper.find('img');
        // Check exist
        expect(closeBtn.length).toEqual(1);
        // Check for file
        expect(closeBtn.prop("src")).toEqual('close.png');
    });
    // Check for iFrame
    it('Check if iFrame exist', () => {
        const iframe = wrapper.find('iframe');
        // Check exist
        expect(iframe.length).toEqual(1);
        // Check for link
        expect(iframe.prop("src")).toEqual(props.movieTrailer)
    });
});