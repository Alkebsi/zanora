/*

********************************************************

Note: Please, before changing anything in this file,
it's recommended to check the documentation.
Moreover, Only Change What You Know or Save The
Original File Somewhere In Your PC/Laptop.

》~ Project: Zanora | HTML Personal Portfolio 
》~ Version: v1.0.0
》~ Author: MKebsi - https://alkebsi.github.io/

********************************************************

*/

particlesJS('first-cv-particles',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1500
        }
      },
      "color": {
          "value": ['#00ffff', '#ffff00', '#0000ff', '#00ff00', '#ff00ff'],
          "random" : true
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 10,
          "size_min": 0.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false
        },
        "onclick": {
          "enable": false
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);