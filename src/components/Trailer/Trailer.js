// Required packages
import React from 'react'
import PropTypes from 'prop-types'
// Custom image imports
import Close from '../../images/close.png'

const Trailer = (props) => {
    // Props
    const { 
        trailerToggle, 
        setTrailerToggle, 
        movieTrailer 
    } = props

    // Handle video player
    const playTrailer = () => {
        // Locate the iframe with the class of "video"
        let videos = document.querySelectorAll('iframe, video');
        // Iterate over the video and pauses it
        Array.prototype.forEach.call(videos, function (video) {
            if (video.tagName.toLowerCase() === 'video') {
                video.pause();
            } else {
                var src = video.src;
                video.src = src;
            }
        });
        // Close the video player modal
        setTrailerToggle(!trailerToggle)
    }

    return (
        <div className={trailerToggle ? "trailer active" : "trailer"}>
            <iframe className="video"
                width="80%" 
                height="80%" 
                src={movieTrailer} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen />
            <img src={Close} 
                alt="close" 
                className={trailerToggle ? "close active" : "close" }
                onClick={() => playTrailer()}/>
        </div>
    )
}

// Prop validation
Trailer.propTypes = {
    trailerToggle: PropTypes.bool.isRequired, 
    setTrailerToggle: PropTypes.func.isRequired, 
    movieTrailer: PropTypes.string.isRequired
}

export default Trailer
