import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import ProjectPage from './pages/Project/ProjectPage';

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        <>
            <RouterScrollTop />
            {
                loading ?

                    <div className='loading-pag'>
                        <div className="loader">
                            <span>=(Siddhant Tomar)=</span>
                            <span>=(Siddhant Tomar)=</span>
                        </div>
                    </div>

                    :

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/project" element={<ProjectPage />} />
                        
                    </Routes>

            }

        </>
    )
}

export default App
