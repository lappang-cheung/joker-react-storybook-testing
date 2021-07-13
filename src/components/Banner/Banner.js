import React from 'react'
import { useLocation } from 'react-router-dom'

import Trailer from '../Trailer/Trailer'

import Play from '../../images/play.png'
import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/instagram.png'

const Banner = (props) => {

    const { trailerToggle, setTrailerToggle, movieTrailer} = props

    const location = useLocation()

    const getBanner = () => {
        switch(location.pathname) {
            case '/suicidesquad':
                return 'suicidesquad'
            case '/darkknight':
                return 'darkknight'
            case '/timburton':
                return 'timburton'
            default:
                return 'joker'
        }
    }

    return (
        <>
            <div className={`banner banner_${getBanner()}`}>
                <div className="content">
                    <h2>Now I'm <span>Always</span> Smiling!</h2>
                    <p>
                        "Come here. Hey! Look at me. So I had a wife, beautiful, like you, who tells me I worry too much. 
                        Who tells me I ought to smile more. Who gambles and gets in deep with the sharks…look at me! 
                        One day, they carve her face. And we have no money for surgeries. She can’t take it. 
                        I just want to see her smile again, hmm? I just want her to know that I don’t care about the scars. 
                        So… I stick a razor in my mouth and do this…[he mimics slicing his mouth open]…to myself. 
                        And you know what? She can’t stand the sight of me! She leaves. Now I see the funny side. 
                        Now I’m always smiling!"
                    </p>
                    <a href="#" 
                        className="play" 
                        onClick={() => setTrailerToggle(!trailerToggle)}
                    >
                        <img src={Play} alt="play"/>
                        Watch Trailer
                    </a>
                    <div className={`slide slide_${getBanner()}`} />
                    <ul className="sci">
                        <li><a href="#"><img src={Facebook}/></a></li>
                        <li><a href="#"><img src={Twitter}/></a></li>
                        <li><a href="#"><img src={Instagram}/></a></li>
                    </ul>
                </div>
            </div>
            <Trailer trailerToggle={trailerToggle} 
            setTrailerToggle={setTrailerToggle}
            movieTrailer={movieTrailer}/>
        </>
    )
}

export default Banner
