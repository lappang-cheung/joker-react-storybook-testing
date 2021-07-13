// Required packages
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'
// Custom Images
import FavIcon from '../../images/favicon.ico'
import Logo from '../../images/logo.png'
import ToggleBtn from '../../images/toggle.png'

const Header = (props) => {
    // Props
    const { menuToggle, setMenuToggle } = props
    // Initial location of URL
    const location = useLocation()
    // Get title for the tab
    const getTitle = () => {
        switch(window.location.pathname) {
            case '/suicidesquad':
                return "Suicide Squad"
            case '/darkknight':
                return "Dark Knight"
            case '/timburton':
                return "Batman 1989"
            default:
                return "Joker 2019"
        }
    }
    return (
        <header>
            <Helmet>
                <link rel="icon" href={FavIcon} />
                <title>{getTitle()}</title>
            </Helmet>
            <a href="#" className="logo">
                <img src={Logo} 
                    alt="logo" 
                />
            </a>
            <div className="toggle">
                <img src={ToggleBtn} 
                    alt="toggle" 
                    className="toggleBtn" 
                    onClick={() => setMenuToggle(!menuToggle)} 
                />
            </div>
        </header>
    )
}

Header.propTypes = {
    menuToggle: PropTypes.bool.isRequired, 
    setMenuToggle: PropTypes.func.isRequired,
}

export default Header
