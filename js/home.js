window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (screen.width > '1024') {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("nav").style.backgroundColor = "white";
      $('.nav__link').css({ 'color': 'black' });
      $('.nav__stripe').css({ 'color': 'black' });
      $('#logo_wit').css({ 'display': 'none' })
      $('#logo_groen').css({ 'display': 'block' })
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
      $('.nav__link').css({ 'color': 'white' });
      $('.nav__stripe').css({ 'color': 'white' });
      $('#logo_wit').css({ 'display': 'block' })
      $('#logo_groen').css({ 'display': 'none' })
    }
  } else {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("nav").style.backgroundColor = "white";
      $('.nav__link').css({ 'color': 'black' });
      $('.nav__stripe').css({ 'color': 'black' });
      $('#logo_wit').css({ 'display': 'none' })
      $('#logo_groen').css({ 'display': 'block' })
    } else {
      document.getElementById("nav").style.backgroundColor = "transparent";
      $('.nav__link').css({ 'color': 'white' });
      $('.page__link').css({ 'color': 'black' });
      $('.nav__stripe').css({ 'color': 'white' });
      $('#logo_wit').css({ 'display': 'block' })
      $('#logo_groen').css({ 'display': 'none' })
    }
  }
}

let video = document.getElementById("video")
let playButton = document.getElementById("i-play-button")
let muteButton = document.getElementById("i-mute-button")
let playSvg = document.getElementById("i-play-svg")
let pauseSvg = document.getElementById("i-pause-svg")
let muteSvg = document.getElementById("i-mute-svg")
let audioSvg = document.getElementById("i-audio-svg")
let heroTitle = document.getElementById("i-hero__title")

let videoPlaying = false
let muted = true

video.addEventListener("playing", () => {
  pauseSvg.style.display = "block"
  playSvg.style.display = "none"
  videoPlaying = true
});

video.addEventListener("pause", () => {
  pauseSvg.style.display = "none"
  playSvg.style.display = "block"
  videoPlaying = false
});

// video.addEventListener("seeking", () => {
//   output.innerHTML = "Seeking event triggered";
// });

// video.addEventListener("volumechange", () => {
//   output.innerHTML = "Volumechange event triggered";
// });

const playPause = () => {
  if (videoPlaying) {
    pauseVideo()
  } else {
    playVideo()
  }
}

const muteUnmute = () => {
  video.muted = !video.muted;
  if (video.muted) {
    audioSvg.style.display = "block"
    muteSvg.style.display = "none"
  } else {
    audioSvg.style.display = "none"
    muteSvg.style.display = "block"
  }
}

playVideo = () => {

  video.play()
}

pauseVideo = () => {

  video.pause()
}

heroFadeOut = () => {
  gsap.to("#i-hero__title", {
    opacity: 0,
    duration: 1
  })
}

playButton.onclick = playPause;
muteButton.onclick = muteUnmute

setTimeout(heroFadeOut, 5000)
