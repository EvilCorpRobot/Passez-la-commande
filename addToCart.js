const btnArray = document.querySelectorAll('.addToCartBtn')
let orderArray

if (JSON.parse(localStorage.getItem(`Order`)) === null) {

    localStorage.setItem("Order", JSON.stringify([]))
    orderArray = JSON.parse(localStorage.getItem(`Order`))
} else {

    orderArray = JSON.parse(localStorage.getItem(`Order`))
}


for(let i=0 ; i< btnArray.length; i++){
    btnArray[i].onclick = () => addToCart(btnArray[i])

}



function addToCart(choice) {
    const name = choice.parentElement.parentElement.querySelector('h3').textContent
    const price = choice.parentElement.querySelector('.price').textContent.split('')
    price.shift()
 
    console.log(name)
    console.log(price.join(''))

    
    const body = {
        name: name,
        price:parseFloat(price.join('')),
        quantity:1
    }

    
    for(let i = 0; i<orderArray.length; i++){
        if (orderArray[i] != null || orderArray[i] != undefined) {
            if(body.name === orderArray[i].name){
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
for(let i=0 ; i< sliderBtnArray.length; i++){
    sliderBtnArray[i].onclick = () => sliderAddToCart(sliderBtnArray[i])

}


function sliderAddToCart(choice) {
    const name = choice.parentElement.parentElement.querySelector('.infos .name').textContent
    const price = choice.parentElement.parentElement.querySelector('.prix').textContent.split('')
    price.pop()
       console.log(name)
       console.log(price.join(''))
}   