// Required packages
import React, {useState} from 'react'
// Custom components
import Layout from '../components/Layouts/Layout'
import Banner from '../components/Banner/Banner'

const TimBurton = () => {
    // State for trailer toggle
    const [trailerToggle, setTrailerToggle] = useState(false)
    // Data
    const title="If you could <span>see inside</span>,I'm really crying"
    const desciption="\"I am only laughing on the outside. My smile is only skin deep."+
    "If you could see inside, I'm really crying...You might" + 
    "join me in a weep. Ha ha ha ha...  \""

    return (
        <Layout>
            <Banner trailerToggle={trailerToggle} 
                    setTrailerToggle={setTrailerToggle}
                    movieTrailer="https://www.youtube.com/embed/ftNOhfNjXjk"
                    bannerTitle={title}
                    bannerDescription={desciption}/>
        </Layout>
    )
}

export default TimBurton
