import React, {useState} from 'react'

import Layout from '../components/Layouts/Layout'
import Banner from '../components/Banner/Banner'

const Darkknight = () => {

    const [trailerToggle, setTrailerToggle] = useState(false)
    const title="Now I'm <span>Always</span> Smiling!"
    const desciption="\"Come here. Hey! Look at me. So I had a wife, beautiful, like you, who tells me I worry too much. " + 
    "Who tells me I ought to smile more. Who gambles and gets in deep with the sharks…look at me! " + 
    "One day, they carve her face. And we have no money for surgeries. She can’t take it. " +
    "I just want to see her smile again, hmm? I just want her to know that I don’t care about the scars. " +
    "So… I stick a razor in my mouth and do this…[he mimics slicing his mouth open]…to myself. " +
    "And you know what? She can’t stand the sight of me! She leaves. Now I see the funny side. " + 
    "Now I’m always smiling!\""

    return (
        <Layout>
            <Banner trailerToggle={trailerToggle} 
                    setTrailerToggle={setTrailerToggle}
                    movieTrailer="https://www.youtube.com/embed/EXeTwQWrcwY"
                    bannerTitle={title}
                    bannerDescription={desciption}/>
        </Layout>
    )
}

export default Darkknight
