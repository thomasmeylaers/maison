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

navSlide()

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (screen.width > '1024')
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("nav__logo__image").style.width = "10rem";
        } else {
            document.getElementById("nav__logo__image").style.width = "15rem";
        }
}