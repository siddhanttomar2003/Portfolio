import React, { useState, useEffect } from "react";
import ProjectImg1 from '../../img/Project1.png'
import ProjectImg2 from '../../img/Project2.png'
import ProjectImg3 from '../../img/Project3.png'


import "./ProjectSlider.css";

const projects = [
    {
        title: "Tracify",
        subtitle: "Find the lost people",
        tech: "MERN + ML",
        image: ProjectImg1, // Replace with your image
        // demo: "#",
        repo: "https://github.com/siddhanttomar2003/Tracify"
    },
    {
        title: "Admin Dashboard",
        subtitle: "Interactive Admin Panel",
        tech: "React - CSS - Bootstrap",
        image: ProjectImg2, // Replace with your image
        // demo: "#",
        repo: "https://github.com/siddhanttomar2003/admin-dashboard"
    },
    {
        title: "Parallax Website",
        subtitle: "Parallax View",
        tech: "HTML - CSS",
        image: ProjectImg3, // Replace with your image
        // demo: "#",
        repo: "https://github.com/siddhanttomar2003/parallax"
    }
];

const ProjectSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
                {projects.map((project, index) => (
                    <div className={`carousel-item ${index === current ? 'active' : ''}`} key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p className="subtitle">{project.subtitle}</p>
                            <p className="tech">{project.tech}</p>
                            <div className="buttons">
                                {/* <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-btn">Demo</a> */}
                                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="repo-btn">Repository</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {projects.map((_, i) => (
                    <span key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}></span>
                ))}
            </div>
        </div>
    );
};

export default ProjectSlider;
