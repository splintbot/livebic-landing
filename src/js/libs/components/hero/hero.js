export function initHero() {
    return {
        initParticles() {
            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 10,
                        "density": {
                            "enable": true,
                            "value_area": 900
                        }
                    },
                    "color": {
                        "value": ["#C2F1FD"]
                    },
    
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 5,
                            "color": "#01F9FE"
                        },
                        "polygon": {
                            "nb_sides": 8
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.2,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 0.2,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 2,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 120,
                        "color": "#ffffff",
                        "opacity": 0.8,
                        "width": 1.6
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "left",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 0.9,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }
}