
let usedIndices = []

let textSelector = $('#text-selector')
let nameSelector = $('#name-selector')
let textSelectorMobile = $('#text-selector-mobile')
let nameSelectorMobile = $('#name-selector-mobile')
let help = $("#help1")
function fillReview(randomNumber) {
    textSelector.text(recensies[randomNumber].text)
    nameSelector.text("-" + recensies[randomNumber].name)
    textSelectorMobile.html(recensies[randomNumber].text)
    nameSelectorMobile.html("-" + recensies[randomNumber].name)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; i < 4; i++) {
    let completed = false
    while (!completed) {
        const randomNum = getRandomInt(9)
        if (!usedIndices.includes(randomNum)) {
            $(".text-selector").eq(i).text(recensies[randomNum].text)
            $(".name-selector").eq(i).text("-" + recensies[randomNum].name)
            $(".text-selector-mobile").eq(i).html(recensies[randomNum].text)
            $(".name-selector-mobile").eq(i).html("-" + recensies[randomNum].name)
            usedIndices.push(randomNum)
            completed = true
        }
    }
}

const fadeUp = document.querySelectorAll('.fade-up')
const container = document.querySelector('#fixed-container')
let height = fadeUp[0].getBoundingClientRect().height
fadeUp.forEach((element, i) => {
    // let height = element.getBoundingClientRect().height
    gsap.from(element, {
        duration: 0.5,
        y: "35px",
        ease: "ease-out",
        opacity: "0",
        scrollTrigger: {
            trigger: element,
            // markers: { startColor: "green", endColor: "red", fontSize: "12px" },
            // start: 100 + window.innerWidth < 800 ? 1300 * i : 550 * i
            start: 100 + height * i * 1.1
        }
    })
});

// window.onscroll = function () { console.log(container.getBoundingClientRect().y, container.getBoundingClientRect().height, window.scrollY) };
