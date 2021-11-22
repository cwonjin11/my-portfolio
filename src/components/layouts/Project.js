import React from 'react'

const Project = ({id, name, url, github, skills}) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
            <div className="image-project">
            <a href={url}> <div className={`img-pro ${id}`}></div></a>
                
            </div>
            <a title={github} className="project-name" rel="noopener noreferrer" target="_blank" href={github}><h2>{name}</h2></a>
            { skills && <h3>{skills.map(skill => skill)}</h3> }
        </div>
    )
}

export default Project
