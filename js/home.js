
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