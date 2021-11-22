import React from 'react'

const HeaderButton = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
            <div className="mx-auto">
                <a href="#about"><button className="see">Checkout Portfolio<i className="fas fa-eye"></i></button></a>
                <img id="not-dark" onClick={scrollTo} alt="Contact Me" title="Contact Me" className="gtp" src="scroll1.png"></img>
            </div>
    )
}

export default HeaderButton
