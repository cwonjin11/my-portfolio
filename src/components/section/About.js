import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'

const About = () => {
    return (
        <div id="about" className="effect2" style={{opacity:0.9}}>
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not-dark2"></div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{section2title}</h1>
                </div>
                <p className="lead about-text">
                    <li>{about.paragraph[0]}</li>
                    <li>{about.paragraph[1]}</li>
                    <li>{about.paragraph[2]}</li>
                    <li>{about.paragraph[3]}</li>
                    <li>{about.paragraph[4]}</li>
                   
                </p>
            </div>
            </div>
            <div id="Skills"> 

                <div className="row flex justify-content-center skills" style={{opacity:0.7}}>
                    {skillsBar.map((x) => 
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
                    )}
                </div> 
            </div>
        </div>
    )
}

export default About
