// Typewrite text in header
const titles = [' Front End Web Developer', 'n Open Source Advocate', ' Back End Web Developer', ' Designer', ' JavaScript Fanboy', ' React Developer', ' Tinkerer', ' Musician'];
new Typewriter('.header__title', {
    strings: titles,
    autoStart: true,
    loop: true
});


// Create our navigation bar clone to be shown when scrolled past header
let nav = document.querySelector('nav');
let navClone = nav.cloneNode(true);
navClone.classList.add('sticky-nav');
document.querySelector('body').insertBefore(navClone, nav);


//Show navigation bar if we're scrolled past it, hide otherwise
function showNav() {
    page = window.pageYOffset;
    if(page >= window.innerHeight + 50) {
        navClone.classList.add('active-nav');
        document.querySelector('.header__intro').innerHTML = 'Thank you for visiting!';
        document.querySelector('.header__typewriter').style.visibility = 'hidden';
    } else {
        navClone.classList.remove('active-nav');
    }
}

//Create our timeline clone to be sticky when scrolled past portfolio
const timeline = document.querySelector('.portfolio__timeline');
const timelineClone = timeline.cloneNode(true);
timelineClone.classList.add('sticky-timeline');
document.querySelector('.portfolio').insertBefore(timelineClone, timeline);

function showTimeline() {
    page = window.pageYOffset;
    if(page >= (window.innerHeight * 2) + 100) {
        timelineClone.classList.add('active-timeline');
    } else {
        timelineClone.classList.remove('active-timeline');
    }

    if(page >= document.querySelector('.contact').getBoundingClientRect().top + scrollY - 200) {
        timelineClone.classList.remove('active-timeline');
    }
}

//Ensure our sticky elements are being checked on scroll
showNav();
window.onscroll = e => {
    showTimeline();
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

function setActive() {
    yearMarkers.forEach(year => {
        year.classList.remove('marker-active');
    });
    activeYear = this.children[0].dataset.year;
    console.log(activeYear);
    document.querySelectorAll(`.marker-${activeYear}`).forEach(marker => {
        console.log(marker);
        marker.classList.add('marker-active');
    })
    //this.classList.add('marker-active');

    document.querySelector(`#year-${activeYear}`).scrollIntoView({
        behavior: 'smooth'
    })
}

// Setup event listeners for each of our markers
yearMarkers.forEach(year => {
    year.addEventListener('click', setActive);
})

