document.getElementById('contact-form-id').addEventListener('submit', submitForm)

errorMessages = {
  'nl': {
    1: "Vul de reCaptcha in.",
    2: "Er is een probleem opgetreden. Onze excuses."
  },
  'fr': {
    1: "Remplissez le reCaptcha.",
    2: "Il y a eu un problème. Nos excuses."
  },
  'en': {
    1: "Please fill in the reCaptcha",
    2: "A problem has occurred. Our apologies."
  },
}

function submitForm(e) {
  e.preventDefault()
  const voornaam = document.querySelector('#contact-form-voornaam').value
  const achternaam = document.querySelector('#contact-form-achternaam').value
  const email = document.querySelector('#contact-form-email').value
  const telefoon = document.querySelector('#contact-form-telefoon').value
  const bericht = document.querySelector('#contact-form-bericht').value
  const language = document.querySelector('#language').value
  const captcha = document.querySelector('#g-recaptcha-response').value

  fetch('http://127.0.0.1:4000/mailserver/simulatie', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plan, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ voornaam, achternaam, email, telefoon, language, bericht, captcha })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success != true) {
        if (data.msg === "Please select captcha") {
          if (language == '') {
            $('#filler').html(errorMessages['nl'][1]);
          } else {
            $('#filler').html(errorMessages[language][1]);
          }
        } else {
          if (language == '') {
            $('#filler').html(errorMessages['nl'][2]);
          } else {
            $('#filler').html(errorMessages[language][2]);
          }
        }
      }
    })
}
