import React from 'react';

import Banner from '../../components/Banner/Banner';
import '../../styles/style.scss'

export default {
  title: 'Movie Component/Banner',
  component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const BannerComponent = Template.bind({});
BannerComponent.args = {
    trailerToggle: false,
    setTrailerToggle: () => console.log('Hello world'),
    movieTrailer: 'https://www.youtube.com/embed/ftNOhfNjXjk',
    bannerTitle: 'Hello world',
    bannerDescription: 'Testing'
};

