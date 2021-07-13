// Required packages
import React, {useState} from 'react'
// Custom components
import Layout from '../components/Layouts/Layout'
import Banner from '../components/Banner/Banner'

const Joker = () => {
    // State for trailer toggle
    const [trailerToggle, setTrailerToggle] = useState(false)
    // Data
    const title="Put on a <span>Happy</span> face"
    const desciption="\"My mother always tell me to smile ... and put on a happy face. " + 
    "She told me I had a purpose, to bring laughter and joy to the world. " +
    "Is it just me or ..... Is it getting crazier out there?\""

    return (
        <Layout>
            <Banner trailerToggle={trailerToggle} 
                    setTrailerToggle={setTrailerToggle}
                    movieTrailer="https://www.youtube-nocookie.com/embed/t433PEQGErc?start=1"
                    bannerTitle={title}
                    bannerDescription={desciption}/>
        </Layout>
    )
}

export default Joker
