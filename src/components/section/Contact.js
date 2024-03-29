import React from 'react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {
    
    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="parallax">
            <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                
            <div className="git-head-div text-center mx-auto">
                    <h1 id="Contact" className="git-head">{section5Title}</h1>
            </div>
                
            <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io"} method={contact.contactUrl ? "POST" : "GET"}>
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit">Send Message</button>
                    </form>
                    <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="scroll.png"></img>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead contact-text">
                        <li>{contact.pitch[0]}</li>
                        <li>{contact.pitch[1]}</li>        
                        <li>{contact.pitch[2]}</li>        
                    </p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.github && <a title="Visit Github profile" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>} 
                </div>
                    <br/><br/><br/>
                    {social.resume && <a title="Download Resume" rel="noopener noreferrer" target="_blank" href={social.resume} download><i className="fas fa-download"></i></a>}
                </div>
                </div>
            </div>
    
            </div>

        </div>


            <p id="not-dark" className="Copy">2021 © Copyright <strong>{contact.copyright}</strong>. All Rights Reserved</p>
        </div>
        
    )
    
}

export default Contact
