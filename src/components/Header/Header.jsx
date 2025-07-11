import React, { useContext } from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";
// import { langContext } from '../../context/Context';

const Header = () => {
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

            <NavLink className="logo" to="/">
                <p>=(<span>Siddhant Tomar</span>)=</p>
            </NavLink>

            <nav className="navbar">
                <Link to="home-section" spy={true} href="#home-section">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="about-me" spy={true}  href="#about-me">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
                <Link to="project" spy={true}  href="#about-me">
                    <FormattedMessage
                        id='project'
                        defaultMessage='Project'
                    />
                </Link>
              
               
                
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(Header);