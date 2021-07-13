import React from 'react'

import Close from '../../images/close.png'

const Trailer = (props) => {

    const { trailerToggle, setTrailerToggle, movieTrailer } = props

    const playTrailer = () => {
        let videos = document.querySelectorAll('iframe, video');
        Array.prototype.forEach.call(videos, function (video) {
            if (video.tagName.toLowerCase() === 'video') {
                video.pause();
            } else {
                var src = video.src;
                video.src = src;
            }
        });
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

export default Trailer
