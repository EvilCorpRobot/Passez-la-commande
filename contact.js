const form = document.querySelector('.contact-formulaire form')

form.onsubmit = (e) => {
    e.preventDefault()
    form.innerHtml = "<p>bonjour</p>"
} 