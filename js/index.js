let heightRatio
if (screen.width > '900' && screen.width <= "1200") {
    heightRatio = 0.5
} else {
    heightRatio = 1.1
}
// Splide Init
const config = {
    type: "loop",
    // cover: true,
    lazyLoad: true,
    heightRatio: heightRatio

    // heightRatio: 1,
}




$(window).on('load', function () {

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
                    link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.5}s`
                }
            })


            // Burger animation 
            burger.classList.toggle('nav__burger__toggle')
        })


    }
    // window.onscroll = function () { scrollFunction() };
    // function scrollFunction() {
    //     if (screen.width > '1024') {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             document.getElementById("nav").style.backgroundColor = "white";
    //             $('.nav__link').css({ 'color': 'black' });
    //             $('.nav__stripe').css({ 'color': 'black' });
    //             $('#logo_wit').css({ 'display': 'none' })
    //             $('#logo_groen').css({ 'display': 'block' })
    //         } else {
    //             document.getElementById("nav").style.backgroundColor = "transparent";
    //             $('.nav__link').css({ 'color': 'white' });
    //             $('.nav__stripe').css({ 'color': 'white' });
    //             $('#logo_wit').css({ 'display': 'block' })
    //             $('#logo_groen').css({ 'display': 'none' })
    //         }
    //     } else {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             document.getElementById("nav").style.backgroundColor = "white";
    //             $('.nav__link').css({ 'color': 'black' });
    //             $('.nav__stripe').css({ 'color': 'black' });
    //             $('#logo_wit').css({ 'display': 'none' })
    //             $('#logo_groen').css({ 'display': 'block' })
    //         } else {
    //             document.getElementById("nav").style.backgroundColor = "transparent";
    //             $('.nav__link').css({ 'color': 'white' });
    //             $('.page__link').css({ 'color': 'black' });
    //             $('.nav__stripe').css({ 'color': 'white' });
    //             $('#logo_wit').css({ 'display': 'block' })
    //             $('#logo_groen').css({ 'display': 'none' })
    //         }
    //     }
    // }

    // If initial position of the screen is not at the top 
    function initialFix() {
        if (screen.width > '1024') {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("nav").style.backgroundColor = "white";
                $('.nav__link').css({ 'color': 'black' });
                $('.nav__stripe').css({ 'color': 'black' });
                $('#logo_wit').css({ 'display': 'none' })
                $('#logo_groen').css({ 'display': 'block' })
            }
        }
    }
    initialFix()
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

    // Button hover animation
    let buttons = $(".animation-button")
    let chevron = $(".animation-button-chevron")
    buttons.each(function (index) {
        $(this).hover(function () {
            gsap.to(chevron.eq(index), {
                duration: 0.5,
                x: 8,
                ease: "ease-out",
            })
        }, function () {
            gsap.to(chevron.eq(index), {
                duration: 0.5,
                x: 0,
                ease: "ease-out",
            })
        })
    })
    // button.hover(function () {
    //     gsap.to(chevron, {
    //         duration: 0.5,
    //         x: 8,
    //         ease: "ease-out",
    //     })
    // }, function () {
    //     gsap.to(chevron, {
    //         duration: 0.5,
    //         x: 0,
    //         ease: "ease-out",
    //     })
    // })



    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size


    document.addEventListener("DOMContentLoaded", function () {
        var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

        if ("IntersectionObserver" in window) {
            var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (video) {
                    if (video.isIntersecting) {
                        for (var source in video.target.children) {
                            var videoSource = video.target.children[source];
                            if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                                videoSource.src = videoSource.dataset.src;
                            }
                        }

                        video.target.load();
                        video.target.classList.remove("lazy");
                        lazyVideoObserver.unobserve(video.target);
                    }
                });
            });

            lazyVideos.forEach(function (lazyVideo) {
                lazyVideoObserver.observe(lazyVideo);
            });
        }
    });

    // Gsap animations
    gsap.registerPlugin(ScrollTrigger)

    // gsap.from(".fade_up", {
    //     scrollTrigger: ".fade_up", // start the animation when ".box" enters the viewport (once)
    //     duration: 0.8,
    //     y: "45px",
    //     ease: "ease-out",
    //     opacity: "0"
    //   });

    gsap.to(".accomodaties__hero__img__overlay", {
        duration: 1,
        scaleX: 0,
        transformOrigin: "100% 50%",
        ease: "power2.out"
    })

    gsap.utils.toArray(".fade_up").forEach(element => {
        gsap.from(element, {
            // scrollTrigger: element, // start the animation when ".box" enters the viewport (once)
            duration: 0.5,
            y: "35px",
            ease: "ease-out",
            opacity: "0",
            scrollTrigger: {
                trigger: element,

            }
        })
    })

    gsap.utils.toArray(".slide_right").forEach(element => {
        gsap.from(element, {
            scrollTrigger: element, // start the animation when ".box" enters the viewport (once)
            duration: 2,
            scaleX: 0,
            transformOrigin: "0 50%",
            stagger: 3,
            ease: "ease-in-out"
        })
    })

    gsap.utils.toArray(".slide_left").forEach(element => {
        gsap.from(element, {
            scrollTrigger: element, // start the animation when ".box" enters the viewport (once)
            duration: 1.5,
            scaleX: 0,
            transformOrigin: "100% 50%",

            ease: "ease-in-out"
        })
    })
});

var elms = document.getElementsByClassName('splide');
for (var i = 0, len = elms.length; i < len; i++) {
    new Splide(elms[i], config).mount();
}