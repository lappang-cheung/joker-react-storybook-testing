// Required packages
import React, {useState} from 'react'
// Custom components
import Layout from '../components/Layouts/Layout'
import Banner from '../components/Banner/Banner'

const SuicideSquad = () => {
    // State for trailer toggle
    const [trailerToggle, setTrailerToggle] = useState(false)
    // Data
    const title="Don't say <span>this oath...</span> thoughtlessly"
    const desciption="\"Question...would you die for me? That's too easy." + 
    "Would you...would you live for me? Hmmm? Careful...do " +
    "not say this oath...thoughtlessly. Desire becomes " +
    "surrender, surrender becomes power. You want this? " +
    "Say, say it, say it, pretty, pretty, pretty, pretty..." + 
    "please.\""

    return (
        <Layout>
            <Banner trailerToggle={trailerToggle} 
                    setTrailerToggle={setTrailerToggle}
                    movieTrailer="https://www.youtube.com/embed/OLBWeWSjECQ"
                    bannerTitle={title}
                    bannerDescription={desciption}/>
        </Layout>
    )
}

export default SuicideSquad
