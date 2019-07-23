const titles = [' Front End Web Developer', 'n Open Source Advocate', ' Back End Web Developer', ' Designer', ' JavaScript Fanboy', ' React Developer', ' Tinkerer', ' Musician'];
new Typewriter('.header__title', {
    strings: titles,
    autoStart: true,
    loop: true
});

let nav = document.querySelector('nav');
let navClone = nav.cloneNode(true);
navClone.classList.add('sticky');
document.querySelector('body').insertBefore(navClone, nav);

window.onscroll = function(e) {
    page = window.pageYOffset;
    if(page >= window.innerHeight + 50) {
        navClone.classList.add('active');
        document.querySelector('.header__intro').innerHTML = 'Thank you for visiting!';
        document.querySelector('.header__typewriter').style.visibility = 'hidden';
    } else {
        navClone.classList.remove('active');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



