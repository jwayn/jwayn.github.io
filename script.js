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
navClone.classList.add('sticky');
document.querySelector('body').insertBefore(navClone, nav);


//Show navigation bar if we're scrolled past it, hide otherwise
function showNav() {
    page = window.pageYOffset;
    if(page >= window.innerHeight + 50) {
        navClone.classList.add('active');
        document.querySelector('.header__intro').innerHTML = 'Thank you for visiting!';
        document.querySelector('.header__typewriter').style.visibility = 'hidden';
    } else {
        navClone.classList.remove('active');
    }
}

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

const years = document.querySelectorAll('.portfolio__timeline__marker');
let activeYear = '2016';

function setActive() {
    years.forEach(year => {
        year.classList.remove('marker-active');
    });
    Year = this.children[0].dataset.year;
    this.classList.add('marker-active');
}

years.forEach(year => {
    year.addEventListener('click', setActive);
})

