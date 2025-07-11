import React from 'react';

/* Component */
import About from './About';
import Contact from './Contact';
import ProjectPage from '../../pages/Project/ProjectPage'


const Main = () => (
    <main>
        <About />        
        <ProjectPage/>
        <Contact />
    </main>
);

export default Main;