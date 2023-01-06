const btnArray = document.querySelectorAll('.addToCartBtn')
let orderArray

if (JSON.parse(localStorage.getItem(`Order`)) === null) {

    localStorage.setItem("Order", JSON.stringify([]))
    orderArray = JSON.parse(localStorage.getItem(`Order`))
} else {

    orderArray = JSON.parse(localStorage.getItem(`Order`))
}


for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].onclick = () => addToCart(btnArray[i], i)
    btnArray[i].classList.add("no-checked")
}

orderArray.forEach(item => {
    if (item == null) {
        return
    }
    const btn = btnArray[item.indexBtn]
    btn.innerHTML = "&#x2714;"
    btn.classList.remove("no-checked")
    btn.classList.add("checked")
});

function addToCart(choice, indexBtn) {


    if (btnArray[indexBtn].classList.contains("no-checked")) {
        const btn = btnArray[indexBtn]
        btn.innerHTML = "&#x2714;"
        btn.classList.remove("no-checked")
        btn.classList.add("checked")
    } else {
        const btn = btnArray[indexBtn]
        btn.innerHTML = "Panier"
        btn.classList.remove("checked")
        btn.classList.add("no-checked")
    }

    const name = choice.parentElement.parentElement.querySelector('h3').textContent
    const price = choice.parentElement.querySelector('.price').textContent.split('')
    price.shift()

    console.log(name)
    console.log(price.join(''))


    const body = {
        name: name,
        price: parseFloat(price.join('')),
        quantity: 1,
        indexBtn: indexBtn
    }


    for (let i = 0; i < orderArray.length; i++) {
        if (orderArray[i] != null || orderArray[i] != undefined) {

            if (body.name === orderArray[i].name) {
                delete orderArray[i]
                localStorage.setItem("Order", JSON.stringify(orderArray))
                return
            }
        }
    }


    orderArray.push(body)

    localStorage.setItem("Order", JSON.stringify(orderArray))
    console.log(JSON.parse(localStorage.getItem(`Order`)));

}

//---------------------------//
//----------SLIDER-----------//
//---------------------------//

const sliderBtnArray = document.querySelectorAll('.addToCartBtn-slider')
console.log(sliderBtnArray)
for (let i = 0; i < sliderBtnArray.length; i++) {
    sliderBtnArray[i].onclick = () => sliderAddToCart(sliderBtnArray[i], i)

}


function sliderAddToCart(choice, indexBtn) {
    const name = choice.parentElement.parentElement.querySelector('.infos .name').textContent
    const price = choice.parentElement.parentElement.querySelector('.prix').textContent.split('')
    price.pop()
    const body = {
        name: name,
        price: parseFloat(price.join('')),
        quantity: 1,
        indexBtn: indexBtn
    }


    for (let i = 0; i < orderArray.length; i++) {
        if (orderArray[i] != null || orderArray[i] != undefined) {

            if (body.name === orderArray[i].name) {
                delete orderArray[i]
                localStorage.setItem("Order", JSON.stringify(orderArray))
                return
            }
        }
    }


    orderArray.push(body)

    localStorage.setItem("Order", JSON.stringify(orderArray))
}   