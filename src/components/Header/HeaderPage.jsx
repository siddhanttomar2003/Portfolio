import React, { useContext } from "react";
import './Header.css';

/* React router */
import { Link } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
// import { langContext } from '../../context/Context';

const HeaderPage = () => {
    // Buttom language
    // const lang = useContext(langContext);
    // Menu desplegable
    const drowDownMenu = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("active");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("active")
            } else document.querySelector(".site-header").classList.remove("active")

            navbar.classList.remove("active")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={drowDownMenu}></div>

            <Link className="logo" to="/" >
                <p>=(<span>Siddhant Tomar</span>)=</p>
            </Link>

            <nav className="navbar">
                <Link to="/"  >
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="/about"  >
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
               <Link to="/project">Projects</Link>
                
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(HeaderPage);