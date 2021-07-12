import React from 'react'
import { 
    NavLink, 
    useLocation 
} from 'react-router-dom'

import Close from '../../images/close.png'

const Sidebar = (props) => {

    const { menuToggle, setMenuToggle } = props
    const location = useLocation()

    return (
        <aside
            className={
                menuToggle
                ? "sidebar activeBtn"
                : "sidebar"
            }
        >
            <img src={Close} 
                alt="close" 
                className={menuToggle ? 
                    "sidebar_close activeClose" : 
                    "sidebar_close"}
                onClick={() => setMenuToggle(!menuToggle)}  
            />

            <nav className="nav">
                <ul>
                    <li className={ 
                        location.pathname === '/' ? 'active' : ''
                    }>
                        <NavLink to='/'>Joker</NavLink>
                    </li>
                    <li className={ 
                        location.pathname === '/suicidesquad' ? 'active' : ''
                    }>
                        <NavLink to='/suicidesquad'>Suicide Squad</NavLink>
                    </li>
                    <li className={ 
                        location.pathname === '/darkknight' ? 'active' : ''
                    }>
                        <NavLink to='/darkknight'>Dark Knight</NavLink>
                    </li>
                    <li className={ 
                        location.pathname === '/timburton' ? 'active' : ''
                    }>
                        <NavLink to='/timburton'>Batman 1989</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar
