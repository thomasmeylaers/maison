const navSlide = () => {
    const burger = document.querySelector('.nav__burger')
    const nav = document.querySelector('.nav__links')
    const navLinks = document.querySelectorAll('.nav__links li')


    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav__not_active')
        nav.classList.toggle('nav__active')

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {

                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index/7 + 0.5}s`
            }
        })


        // Burger animation 
        burger.classList.toggle('nav__burger__toggle')
    })


}


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

navSlide()

// Splide Init
const config = {
    type: "loop",
<<<<<<< HEAD
    cover: true,
    heightRatio: 1.2,
=======
    // cover: true,
    // heightRatio: 0.5,
>>>>>>> c288d5d8fa1a7972b4f6cfc136b023598c64daca
}

var elms = document.getElementsByClassName('splide');
for (var i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[i], config).mount();
}


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (screen.width > '1024')
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("nav").style.backgroundColor = "white";
            $('.nav__link').css({ 'color': 'black' });
            $('.nav__stripe').css({ 'color': 'black' });


        } else {
            document.getElementById("nav").style.backgroundColor = "transparent";
            $('.nav__link').css({ 'color': 'white' });
            $('.nav__stripe').css({ 'color': 'white' });



        }
}