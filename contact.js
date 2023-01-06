const form = document.querySelector('.contact-formulaire form')

form.onsubmit = (e) => {
    e.preventDefault()
    form.style.display = "none"

    const messageContainer = document.createElement('div')
    document.querySelector('.contact-formulaire').appendChild(messageContainer)
    messageContainer.style.background = 'lightgreen'
    messageContainer.style.borderRadius = '50px'
    messageContainer.style.padding = '20px'
    messageContainer.style.boxShadow = '0px 0px 10px lightgrey'



    const messageText = document.createElement('p')
    messageContainer.appendChild(messageText)
    messageContainer.style.color = 'white'
    messageContainer.style.textAlign = 'center'
    messageContainer.style.fontSize = '16px'
    messageContainer.style.fontWeight = '600'


    messageText.textContent ="Merci ! Nous avons bien reçu votre message."

} 
