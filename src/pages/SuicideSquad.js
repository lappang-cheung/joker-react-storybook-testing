import React, {useState} from 'react'

import Layout from '../components/Layouts/Layout'
import Banner from '../components/Banner/Banner'

const SuicideSquad = () => {

    const [trailerToggle, setTrailerToggle] = useState(false)

    return (
        <Layout>
            <Banner trailerToggle={trailerToggle} 
                    setTrailerToggle={setTrailerToggle}
                    movieTrailer="https://www.youtube.com/embed/OLBWeWSjECQ"/>
        </Layout>
    )
}

export default SuicideSquad
