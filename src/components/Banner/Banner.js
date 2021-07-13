// Required packages
import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
// Custom component
import Trailer from '../Trailer/Trailer'
// Custom image imports
import Play from '../../images/play.png'
import Facebook from '../../images/facebook.png'
import Twitter from '../../images/twitter.png'
import Instagram from '../../images/instagram.png'

const Banner = (props) => {
    // Props
    const { 
        trailerToggle, 
        setTrailerToggle, 
        movieTrailer, 
        bannerTitle, 
        bannerDescription
    } = props

    // Initial location of URL
    const location = useLocation()

    // Figure out the banner
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
                        <li><a href="#"><img src={Facebook} alt="facebook"/></a></li>
                        <li><a href="#"><img src={Twitter} alt="twitter"/></a></li>
                        <li><a href="#"><img src={Instagram} alt="instagram"/></a></li>
                    </ul>
                </div>
            </div>
            <Trailer trailerToggle={trailerToggle} 
            setTrailerToggle={setTrailerToggle}
            movieTrailer={movieTrailer}/>
        </>
    )
}

// Prop validation
Banner.propTypes = {
    trailerToggle: PropTypes.bool.isRequired, 
    setTrailerToggle: PropTypes.func.isRequired, 
    movieTrailer: PropTypes.string.isRequired, 
    bannerTitle: PropTypes.string.isRequired, 
    bannerDescription: PropTypes.string.isRequired
}

export default Banner
