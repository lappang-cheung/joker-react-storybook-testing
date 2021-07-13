import React, {useState} from 'react'

import Layout from '../components/Layouts/Layout'
import Banner from '../components/Banner/Banner'

const Joker = () => {
    
    const [trailerToggle, setTrailerToggle] = useState(false)

    return (
        <Layout>
            <Banner trailerToggle={trailerToggle} 
                    setTrailerToggle={setTrailerToggle}
                    movieTrailer="https://www.youtube-nocookie.com/embed/t433PEQGErc?start=1"/>
        </Layout>
    )
}

export default Joker
