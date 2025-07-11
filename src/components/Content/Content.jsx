import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';


import { Link } from 'react-scroll';


import { FormattedMessage } from 'react-intl';

const Content = () => (
    <div className="content">
        <ParticleHeaderBg/>
        <section className="home-section" id="home-section">
        
            <div className="title">
            
                <p data-aos="fade-up" data-aos-delay="600">
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Hello'
                    />
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='I am Siddhant Tomar'
                    />
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='role'
                        defaultMessage='Full-stack developer'
                    />
                </p>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/siddhanttomar27/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/siddhanttomar2003" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"><i className="fab fa-github"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"><i className="fab fa-instagram"></i></a>
                   
                </div>
                <div className="wrapper">
                    <a className="button" href="https://www.linkedin.com/in/siddhanttomar27/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="https://github.com/siddhanttomar2003/" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400">
                        <div className="icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button" href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <span>Instagram</span>
                    </a>
                    
                </div>

                <Link to="about-me" href="#about-me">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;