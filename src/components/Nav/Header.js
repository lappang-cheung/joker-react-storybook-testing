import React from 'react'

import Logo from '../../images/logo.png'
import ToggleBtn from '../../images/toggle.png'

const Header = (props) => {

    const { menuToggle, setMenuToggle } = props

    return (
        <header>
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

export default Header
