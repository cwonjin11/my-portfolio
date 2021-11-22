import React from 'react'
import Particles from 'react-particles-js'
import { background } from '../../profile'

const ParticlesBackground = () => {
    return (
        <div className="particle">
            { background.type === 'Snow' && <Particles
            height="100vh"
            width="100%"
                params={{
                "particles": {
                    "number": {
                        "value": 75,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": ["#f6e58d", "#ffbe76", "#ff7979","#badc58","#dff9fb","#f9ca24","#f0932b","#eb4d4b","#6ab04c","#c7ecee","#e056fd","#7ed6df","#686de0","#22a6b3","#be2edd","#4834d4","#95afc0"]
                    },
                    "opacity": {
                        "value": 1
                    },
                    "size": {
                        "value": 10,
                        "random": true
                    },
                    "move": {
                        "direction": "bottom",
                        "out_mode": "out"
                    },
                    "line_linked": {
                        "enable": false
                    }
                },
                "interactivity": {
                    "events": {
                        "onclick": {
                            "enable": true,
                            "mode": "remove"
                        }
                    },
                    "modes": {
                        "remove": {
                            "particles_nb": 5
                        }
                    }
                }
            }} />}
            { background.type === 'Particle' && <Particles
            height= "100vh"
            width= "100vw"
            params={{
            "particles": {
                "collisions": {
                    "enable": true
                },
                "number": {
                    "value": 100,
                    "density": {
                        "enable": false
                    }
                },
                "color": "#000",
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": true,
                    "color": "#000"
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "bottom",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 6,
                        "opacity": 0.4
                    },
                    "push": {
                        "particles_nb": 5
                    }
                },
                "retina_detect": true
            }
        }} />}
        </div>
    )
}

export default ParticlesBackground
