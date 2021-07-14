// Required packages
import React from 'react';
import { shallow } from 'enzyme';
// Custom components
import Banner from '../Banner/Banner';
// Store the component testing
let wrapper;
// Testing banner components
describe('Banner Component', () => {
    // Adding data
    const props = {
        trailerToggle: false, 
        setTrailerToggle: jest.fn(), 
        movieTrailer: 'https://www.youtube-nocookie.com/embed/t433PEQGErc?start=1', 
        bannerTitle: 'This <span>is</span> title', 
        bannerDescription: 'This is description'
    }
    // Setup the props for the banner
    beforeEach(() => {
        wrapper = shallow(<Banner {...props} />);
    })
    // Expect to exist
    it('The banner component should exist', () => {
        expect(wrapper.length).toEqual(1);
    });
    // Check title
    it('Check if the title exist', () => {
        expect(wrapper.find('h2').length).toEqual(1);
        // Need html check because we used "dangerouslySetInnerHTML"
        expect(wrapper.find('h2').html()).toEqual('<h2>This <span>is</span> title</h2>');
    });
    // Check description
    it('Check if the description exist', () => {
        expect(wrapper.find('p').length).toEqual(1);
        expect(wrapper.find('p').text()).toEqual(props.bannerDescription);
    });
    // Check for play button
    it('Check if trailer button exist', () => {
        const trailer = wrapper.find('.play')
        expect(trailer.find('img').prop("src")).toEqual('play.png')
        expect(trailer.find('.play').text()).toEqual('Watch Trailer')
    });
    // Check social media
    it('Check if social media exist', () => {
        const socialMedia = wrapper.find('.sci')
        // Make sure 3 exist
        expect(socialMedia.find('img').length).toEqual(3)
        // Check for facebook
        expect(socialMedia.find('img').at(0).prop("src")).toEqual('facebook.png')
        // Check for twitter
        expect(socialMedia.find('img').at(1).prop("src")).toEqual('twitter.png')
        // Check for instagram
        expect(socialMedia.find('img').at(2).prop("src")).toEqual('instagram.png')
    });
});