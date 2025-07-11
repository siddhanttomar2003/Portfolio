import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    
    let date = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Siddhant Tomar'
                        />
                    </p>
                    <p>&copy; {date}. All Rights Reserved.</p>
                </div>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/siddhanttomar27/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/siddhanttomar2003" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);