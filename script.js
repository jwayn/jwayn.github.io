'use strict';

// Typewrite text in header
const titles = [' Front End Web Developer', 'n Open Source Advocate', ' Back End Web Developer', ' Designer', ' JavaScript Fanboy', ' React Developer', ' Tinkerer', ' Musician'];
new Typewriter('.header__title', {
    strings: titles,
    autoStart: true,
    loop: true
});

const skills = [
    {
        name: 'HTML',
        level: 'Adept',
        percentage: '90',
        years: '15',
    },
    {
        name: 'CSS',
        level: 'Adept',
        percentage: '90',
        years: '15',
    },
    {
        name: 'JavaScript',
        level: 'Advanced',
        percentage: '85',
        years: '5',
    },
    {
        name: 'React',
        level: 'Intermediate',
        percentage: '40',
        years: '1',
    },
    {
        name: 'Node.js',
        level: 'Intermediate',
        percentage: '60',
        years: '3',
    },
    {
        name: 'Vue.js',
        level: 'Beginner',
        percentage: '25',
        years: '1',
    },
    {
        name: 'Python',
        level: 'Intermediate',
        percentage: '40',
        years: '3',
    },
    {
        name: 'C#',
        level: 'Beginner',
        percentage: '30',
        years: '2',
    },
    {
        name: 'Bash',
        level: 'Intermediate',
        percentage: '75',
        years: '3',
    },
    {
        name: 'Java',
        level: 'Beginner',
        percentage: '20',
        years: '1',
    },
    {
        name: 'Linux',
        level: 'Advanced',
        percentage: '75',
        years: '4',
    },
    {
        name: 'SQL',
        level: 'Intermediate',
        percentage: '50',
        years: '3',
    },
    {
        name: 'Oracle',
        level: 'Intermediate',
        percentage: '50',
        years: '3',
    },
    {
        name: 'PostgreSQL',
        level: 'Intermediate',
        percentage: '40',
        years: '25',
    },
]

let projectsPosition = 0;
const projects = [
    {
        year: "2016",
        name: "D&D Initiative Tracker",
        type: "hobby",
        tech: ["HTML", "CSS", "Javascript", "JQuery"],
        description: "The D&D initiative tracker was one of my first truly interactive projects. It was created to solve the issue of having an easy solution to track turn order in the popular RPG Dungeons and Dragons. Using JavaScript and jQuery, I learned how to manipulate the DOM with validated form input.",
        image: "init-tracker.png",
        code: "https://codepen.io/yust/pen/GZgejL",
        demo: "https://codepen.io/yust/pen/GZgejL"
    },
    {
        year: "2017",
        name: "YeeBot",
        type: "hobby",
        tech: ["Python, matplotlib, SQLite3, Docker, Jenkins"],
        description: "YeeBot started with the objective of learning how to write a Discord bot. To accomplish this objective, I also learned some other things along the way. I used SQLite3 to store and retrieve user information in a database, I created a command to plot user data with matplotlib, and I set up the bot continuously deploy to a docker container when new code is pushed.",
        image: "discord-logo.jpg",
        code: "https://github.com/jwayn/YeeBot",
        demo: "unavailable"
    },
    {
        year: "2018",
        name: "Sound of August",
        type: "client",
        tech: ["HTML, CSS, JavaScript"],
        description: "The Sound of August website is a client portfolio created for a professional voice actor. The client required a custom audio player to include a link to download his reels, which was created as a part of this project.",
        image: "soundofaugust.png",
        code: "unavailable",
        demo: "http://www.soundofaugust.com"
    },
    {
        year: "2019",
        name: "Chameleon",
        type: "hobby",
        tech: ["HTML, CSS, JavaScript, React, Node.js, WebSockets"],
        description: "With a backend written in Node.js, the Chameleon app is a recreation of a popular board game. I created a lobby system which allows multiple games to occur simultaneously. Websockets allow the game’s state to be updated in real time between all players in each game lobby.",
        image: "chameleon.png",
        code: "https://github.com/jwayn/chameleon",
        demo: "https://chameleon.jwayne.dev"
    },
    {
        year: "future",
        name: "Index Zer0",
        type: "hobby",
        tech: ["HTML, CSS, JavaScript, React, Node.js, Express, PostgreSQL, JSON Web Tokens"],
        description: "Index Zer0 is an ambitious work-in-progress. The goal of the project is to provide a self-hosted Q&A knowledge base platform in the style of Stack Overflow. Built on Node.js, PostgreSQL, and React, the app currently has user signup with email verification, authentication with JSON Web Tokens, and the creation and display of content with markdown support.",
        image: "index0.png",
        code: "https://github.com/jwayn/indexzero",
        demo: "unavailable"
    },
    
];


// Create our navigation bar clone to be shown when scrolled past header
let nav = document.querySelector('nav');
let navClone = nav.cloneNode(true);
navClone.classList.add('sticky-nav');
document.querySelector('body').insertBefore(navClone, nav);


//Show navigation bar if we're scrolled past it, hide otherwise
function showNav() {
    let page = window.pageYOffset;
    if(page >= window.innerHeight + 50) {
        navClone.classList.add('active-nav');
        document.querySelector('.header__intro').innerHTML = 'Thank you for visiting!';
        document.querySelector('.header__typewriter').style.visibility = 'hidden';
    } else {
        navClone.classList.remove('active-nav');
    }
}

//Create our timeline clone to be sticky when scrolled past portfolio
const originalTimeline = document.querySelector('.portfolio__timeline');

function checkTimelineProgress() {
    let yearSections = document.querySelectorAll('.portfolio__content__year');
    yearSections.forEach(yearSection => {
        let bounding = yearSection.getBoundingClientRect();
        if (bounding.top <= window.innerHeight / 2 && bounding.bottom >= window.innerHeight / 2) {
            document.querySelectorAll(`.marker-${yearSection.id.split('-')[1]}`).forEach(marker => {
                marker.classList.add('marker-active');
            })
        } else {
            document.querySelectorAll(`.marker-${yearSection.id.split('-')[1]}`).forEach(marker => {
                marker.classList.remove('marker-active');
            })
        }
    });

    if(yearSections[0].getBoundingClientRect().top >= 0) {
        document.querySelectorAll(`.marker-${yearSections[0].id.split('-')[1]}`).forEach(marker => {
            marker.classList.add('marker-active');
        })
    }



}

//Ensure our sticky elements are being checked on scroll
showNav();
window.onscroll = e => {
    showNav();
}


// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Timeline navigator
const yearMarkers = document.querySelectorAll('.portfolio__timeline__marker');
let portfolioContent = document.querySelectorAll('.portfolio__content__year');
let portfolioContentItems = document.querySelectorAll('.portfolio__content__item');

let activeYear = '2016';

function setActive(options) {
    if(options.year) {
        activeYear = options.year
    } else {
        activeYear = this.children[0].dataset.year;
    }

    yearMarkers.forEach(marker => {
        marker.classList.remove('marker-active');
    });
    document.querySelectorAll(`.marker-${activeYear}`).forEach(marker => {
        marker.classList.add('marker-active');
    });

    function changeEls() {
        changeElements({year: activeYear});
    }
    if(!options.year) {
        anime({
            targets: [...textElements, '.portfolio__carousel__header__tech', '.portfolio__carousel__content__links'],
            opacity: 0,
            duration: 500,
            easing: 'cubicBezier(.51,.97,.63,.95)',
            complete: changeEls
        });
    }
}

// Setup event listeners for each of our markers
yearMarkers.forEach(year => {
    year.addEventListener('click', setActive);
});

function checkTimelineProgress() {
    let yearSections = document.querySelectorAll('.portfolio__content__year');
    yearSections.forEach(yearSection => {
        let bounding = yearSection.getBoundingClientRect();
        if (bounding.top <= window.innerHeight / 2 && bounding.bottom >= window.innerHeight / 2) {
            document.querySelectorAll(`.marker-${yearSection.id.split('-')[1]}`).forEach(marker => {
                marker.classList.add('marker-active');
            })
        } else {
            document.querySelectorAll(`.marker-${yearSection.id.split('-')[1]}`).forEach(marker => {
                marker.classList.remove('marker-active');
            })
        }
    });

    console.log('Top section: ', yearSections[0].getBoundingClientRect().top);
    console.log(window.innerHeight);
    if(yearSections[0].getBoundingClientRect().top >= 0) {
        document.querySelectorAll(`.marker-${yearSections[0].id.split('-')[1]}`).forEach(marker => {
            marker.classList.add('marker-active');
        })
    }
}


let carousel = {};
carousel.year = document.querySelector('.portfolio__carousel__year');
carousel.title = document.querySelector('.portfolio__carousel__header__title__name');
carousel.projectType = document.querySelector('.portfolio__carousel__header__project-type');
carousel.techTitle = document.querySelector('.portfolio__carousel__header__tech__title');
carousel.tech = document.querySelector('.portfolio__carousel__header__tech__content');
carousel.descTitle = document.querySelector('.portfolio__carousel__content__description-title')
carousel.description = document.querySelector('.portfolio__carousel__content__description');
carousel.code = document.querySelector('.portfolio__carousel__content__links__code');
carousel.demo = document.querySelector('.portfolio__carousel__content__links__demo');
carousel.image = document.querySelector('.portfolio__carousel__content__image');

let textElements = [carousel.title, carousel.projectType, carousel.techTitle, carousel.tech, carousel.descTitle, carousel.description, carousel.code, carousel.demo, carousel.image];
let direction = -1000;

function changeElements(options) {
    if(options.year) {
        let selectedProject = projects.filter(el => {
            return el.year == options.year;
        });
        projectsPosition = projects.indexOf(selectedProject[0]);
    }

    
    let project = projects[projectsPosition];
    setActive({year: project.year});

    carousel.year.innerHTML = project.year.charAt(0).toUpperCase() + project.year.slice(1);
    carousel.title.innerHTML = project.name;
    carousel.projectType.innerHTML = project.type;
    carousel.tech.innerHTML = project.tech;
    carousel.description.innerHTML = project.description;

    if(project.code !== 'unavailable') {
        carousel.code.style.display = 'initial';
        carousel.code.setAttribute('href', project.code);
    } else {
        carousel.code.style.display = 'none';
    }

    if(project.demo !== 'unavailable') {
        carousel.demo.style.display = 'initial';
        carousel.demo.setAttribute('href', project.demo);
    } else {
        carousel.demo.style.display = 'none';
    }

    carousel.image.src = `./images/${project.image}`;

    if(options.year) {
        anime({
            targets: [...textElements, '.portfolio__carousel__header__tech', '.portfolio__carousel__content__links'],
            opacity: 1,
            duration: 500,
            easing: 'cubicBezier(.51,.97,.63,.95)',
        });
    } else {
        anime({
            targets: [...textElements, '.portfolio__carousel__header__tech', '.portfolio__carousel__content__links'],
            translateX: [options.direction * -1, 0],
            duration: 500,
            easing: 'cubicBezier(.51,.97,.63,.95)'
        });
    }
}


// Display portfolio content
function portfolioMove(e) {
    if (e.target.classList.contains('portfolio__carousel__button--next')) {
        if(projectsPosition === projects.length - 1) {
            projectsPosition = 0;
        } else {
            projectsPosition++;
        }
        direction = -1000;
    } else {
        if(projectsPosition === 0) {
            projectsPosition = projects.length - 1;
        } else {
            projectsPosition--;
        }
        direction = 1000;
    }

    function callChange() {
        changeElements({direction});
    }


    anime({
        targets: [...textElements, '.portfolio__carousel__header__tech', '.portfolio__carousel__content__links'],
        translateX: direction,
        duration: 500,
        easing: 'cubicBezier(.74,.38,.16,1.03)',
        complete: callChange
    });
      
}


// 3d effect for image on carousel

document.querySelector('.portfolio').addEventListener("mousemove", effect3d);
const moveableEls = document.querySelectorAll('.moveable-3d');

const limit = 65;
const sensitivity = 50;


function effect3d(event) {
    function doEffect(el, event) {

        let w = el.scrollWidth;
        let h = el.scrollHeight;
        let mouseX = Math.round(event.pageX - el.getBoundingClientRect().left);
        let mouseY = Math.round(event.pageY - scrollY - el.getBoundingClientRect().top);
        
        //pos of the mouse position in relation to the center of the element
        let dx = mouseX - w / 2;
        let dy = mouseY - h / 2;

        // alter dx and dy by our sensitivy and limit
        // to create a smoother experience
        try {
            let ax = dx / sensitivity;
            if(ax >= limit) ax = limit;
            if(ax <= -limit) ay = limit;
            let ay = dy / sensitivity;
            if(ay > limit) ay = limit;
            if(ay < -limit) ay = -limit;
            el.style.transform = `rotateX(${-ay}deg) rotateY(${ax}deg)`
        } catch (err) {

        }
    }

    //
    moveableEls.forEach(el => {
        doEffect(el, event);
    })
}




const prevCarousel = document.querySelector('.portfolio__carousel__button--prev');
const nextCarousel = document.querySelector('.portfolio__carousel__button--next');
prevCarousel.addEventListener('click', portfolioMove);
nextCarousel.addEventListener('click', portfolioMove);

