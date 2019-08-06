'use strict';

let projectsPosition = 0;
const projects = [
    {
        year: "2016",
        name: "D&D Initiative Tracker",
        type: "hobby",
        tech: ["HTML", "CSS", "Javascript", "JQuery"],
        description: "The D&D initiative tracker was one of my first truly interactive projects. It was created to solve the issue of not having an easy solution to track turn order in the popular RPG Dungeons and Dragons. Using JavaScript and jQuery, I learned how to manipulate the DOM with validated form input.",
        image: "init-tracker.png",
        code: "https://codepen.io/yust/pen/GZgejL",
        demo: "https://codepen.io/yust/pen/GZgejL"
    },
    {
        year: "2017",
        name: "YeeBot",
        type: "hobby",
        tech: ["Python", "matplotlib", "SQLite3", "Docker", "Jenkins"],
        description: "YeeBot started with the objective of learning how to write a Discord bot. To accomplish this objective, I also learned some other things along the way. I used SQLite3 to store and retrieve user information in a database, I created a command to plot user data with matplotlib, and I set up the bot continuously deploy to a docker container when new code is pushed.",
        image: "discord-logo.jpg",
        code: "https://github.com/jwayn/YeeBot",
        demo: "unavailable"
    },
    {
        year: "2018",
        name: "Sound of August",
        type: "client",
        tech: ["HTML", "CSS", "JavaScript"],
        description: "The Sound of August website is a client portfolio created for a professional voice actor. The client required a custom audio player to include a link to download his reels, which was created as a part of this project. The code linked below is specifically for the audio player. Full code is available upon request.",
        image: "soundofaugust.png",
        code: "https://codepen.io/yust/pen/OGrxgZ",
        demo: "http://www.soundofaugust.com"
    },
    {
        year: "2019",
        name: "Chameleon",
        type: "hobby",
        tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "WebSockets"],
        description: "With a backend written in Node.js, the Chameleon app is a recreation of a popular board game. I created a lobby system which allows multiple games to occur simultaneously while websockets allow the game’s state to be updated in real time between all players in each game lobby.",
        image: "chameleon.png",
        code: "https://github.com/jwayn/chameleon",
        demo: "https://chameleon.jwayne.dev"
    },
    {
        year: "future",
        name: "Index Zer0",
        type: "hobby",
        tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "PostgreSQL", "JSON Web Tokens"],
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
    if(page >= window.innerHeight - 2) {
        navClone.classList.add('active-nav');
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
carousel.tech = document.querySelector('.portfolio__carousel__header__tech__content');
carousel.descTitle = document.querySelector('.portfolio__carousel__content__description-title')
carousel.description = document.querySelector('.portfolio__carousel__content__description');
carousel.code = document.querySelector('.portfolio__carousel__content__links__code');
carousel.demo = document.querySelector('.portfolio__carousel__content__links__demo');
carousel.image = document.querySelector('.portfolio__carousel__content__image');

let textElements = [carousel.title, carousel.projectType, carousel.descTitle, carousel.description, carousel.code, carousel.demo, carousel.image];
let direction = -4000;

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
    let techList = '';
    project.tech.forEach(techItem => {
        techList = techList + `<span class="portfolio__carousel__header__tech__content__item">${techItem}</span>`
    });
    carousel.tech.innerHTML = techList;

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
        direction = -4000;
    } else {
        if(projectsPosition === 0) {
            projectsPosition = projects.length - 1;
        } else {
            projectsPosition--;
        }
        direction = 4000;
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

const limit = 45;
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



changeElements({year: '2016'});
const prevCarousel = document.querySelector('.portfolio__carousel__button--prev');
const nextCarousel = document.querySelector('.portfolio__carousel__button--next');
prevCarousel.addEventListener('click', portfolioMove);
nextCarousel.addEventListener('click', portfolioMove);



// Embers background

const canvas = document.querySelector('.bgcanvas');
const ctx = canvas.getContext('2d');



// 
const background = "#010932";
const colors = [[128, 17, 0], [182, 34, 32], [252, 100, 0], [250, 192, 0], [252, 191, 73]];
const PI_2 = 2 * Math.PI;

const numEmbers = 350;

//set our initial canvas size
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

function randomRange(min, max) {
    return (Math.random() * (max - min + 1)) - 1;
};

function drawCircle(x, y, r, style) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, PI_2, false);
    ctx.fillStyle = style;
    ctx.fill();
};

//resize canvas with window
window.addEventListener("resize", resizeCanvas, false);
function resizeCanvas(e){
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    if (width != canvas.width || height != canvas.height){
        canvas.width = width;
        canvas.height = height;
    }
}

const Ember = class{
    constructor(){
        this.color = colors[~~randomRange(0, colors.length - 1)];
        this.rgb = 'rgba(' + this.color[0] + ',' + this.color[1] + ',' + this.color[2];
        this.radius = ~~randomRange(2, 8);
        this.diameter = this.radius * 2;
        this.replace();
    }

    //start our ember fresh over in a new random position
    replace(){
        this.opacity = 0;
        this.opacityChange = 0.005 * randomRange(1, 3);
        this.x = ~~randomRange(-this.diameter, window.innerWidth - this.diameter);
        this.y = ~~randomRange(-20, window.innerHeight - this.diameter);
        this.xMax = window.innerWidth - this.radius;
        this.yMax = window.innerHeight + this.radius;
        this.xTravel = randomRange(0, 2) + 8 * 0.5 - 5; 
        this.yTravel = 0.5 * this.radius + randomRange(-1, 1);
    }

    draw(){
        this.x += this.xTravel;
        this.y -= this.yTravel;

        this.opacity += this.opacityChange;

        //fade out embers
        if (this.opacity > 1){
            this.opacity = 1;
            this.opacityChange *= -1;
        }

        //draw a new ember if our opacity reaches 0
        if (this.opacity < 0 || this.y < 0){
            this.replace();
        }

        //rollover the x axis
        if (!(0 < this.x < this.xMax)){
            this.x = (this.x + this.xMax & this.xMax)
        }

        drawCircle(~~this.x, ~~this.y, this.radius, this.rgb + ',' + this.opacity + ')');
    }
}

// House our embers in an array
let embers = []
for (let i = 0; i <= numEmbers; i++){
    embers.push(new Ember);
}

function animateCanvas() {
    let fpsInterval;
    let then;
    let now;
    let elapsed;
    let startTime;
    
    function startAnimateCanvas() {
        fpsInterval = 1000 / 60;
        then = Date.now();
        startTime = then;
        animateCanvas();
    }
    
    function animateCanvas() {
        requestAnimationFrame(animateCanvas);
        now = Date.now();
        elapsed = now - then;

        if (elapsed > fpsInterval) {
            then = now - (elapsed % fpsInterval);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i <= embers.length - 1; i++){
                embers[i].draw();
            }

        }
    }
    
    startAnimateCanvas()
}
animateCanvas();