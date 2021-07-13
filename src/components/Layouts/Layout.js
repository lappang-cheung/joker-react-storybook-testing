// Required packages
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// Custom components
import Sidebar from '../Nav/Sidebar'
import Header from '../Nav/Header'

const Layout = ({children}) => {
    // Toggle state
    const [menuToggle, setMenuToggle] = useState(false)
    // Keypress logic
    const handleKeyBoardPress = event => {
        if(event.keyCode === 27) {
          setMenuToggle(false)
        }
      }
     
    // On mount, handle the keyboard press
    useEffect(() => {
        document.addEventListener("keydown", handleKeyBoardPress, false);
        
        return () => {
            document.removeEventListener("keydown", handleKeyBoardPress, false);
        };
    }, []);

    return (
        <div>
            <Header 
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
            />
            <Sidebar
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
            />
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout