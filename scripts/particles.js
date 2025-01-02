document.addEventListener('DOMContentLoaded', () => {
    particlesJS("particles-js", {
        particles: {
            number: { 
                value: 80, 
                density: { 
                    enable: true, 
                    value_area: 800 
                } 
            },
            color: { 
                value: "#ffffff" 
            },
            opacity: { 
                value: 0.2 
            },
            size: { 
                value: 3 
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
            }
        }
    });
});
