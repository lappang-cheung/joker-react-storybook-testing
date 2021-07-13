import React from 'react';

import Trailer from '../../components/Trailer/Trailer';
import '../../styles/style.scss'

export default {
  title: 'Movie Component/Trailer',
  component: Trailer,
};

const Template = (args) => <Trailer {...args} />;

export const TrailerComponent = Template.bind({});
TrailerComponent.args = {
    trailerToggle: true,
    setTrailerToggle: () => false,
    movieTrailer: 'https://www.youtube.com/embed/ftNOhfNjXjk',
};

