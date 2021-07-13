import React from 'react'
import { useLocation } from 'react-router-dom'

import Trailer from '../Trailer/Trailer'

import Play from '../../images/play.png'
import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/instagram.png'

const Banner = (props) => {

    const { 
        trailerToggle, 
        setTrailerToggle, 
        movieTrailer, 
        bannerTitle, 
        bannerDescription
    } = props

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
                    <h2 dangerouslySetInnerHTML={{__html: bannerTitle}}/>
                    <p>{bannerDescription}</p>
                    <span className="play" 
                       onClick={() => setTrailerToggle(!trailerToggle)}
                    >
                        <img src={Play} alt="play"/>
                        Watch Trailer
                    </span>
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
