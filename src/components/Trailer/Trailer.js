import React from 'react'

import Close from '../../images/close.png'

const Trailer = (props) => {

    const { trailerToggle, setTrailerToggle } = props

    return (
        <div className="trailer">
            <iframe className="video" 
                width="80%" 
                height="80%" 
                src="https://www.youtube.com/embed/OLBWeWSjECQ" 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen />
            <img src={Close} 
                alt="close" 
                className={trailerToggle ? "close active" : "close" }
                onClick={() => setTrailerToggle(!trailerToggle)}/>
        </div>
    )
}

export default Trailer
