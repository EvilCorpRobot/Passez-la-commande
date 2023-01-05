const btnArray = document.querySelectorAll('.addToCartBtn')
const orderArray = []


for(let i=0 ; i< btnArray.length; i++){
    btnArray[i].onclick = () => addToCart(btnArray[i])
}



function addToCart(choice) {
 const price = choice.parentElement.querySelector('.price').textContent.split('')
 price.shift()
 const name = choice.parentElement.querySelector('h3').textContent
 
    console.log(name)
    console.log(price.join(''))

    
    const body = {
        name: name,
        price:price.join(''),
        quantity:1
    }

    
    for(let i = 0; i<orderArray.length; i++){
        if(body.name === orderArray[i].name){
            console.log("element found")
        }
    }
 

    orderArray.push(body)  
   
    localStorage.setItem("Order", JSON.stringify(orderArray))

}

console.log(JSON.parse(
    localStorage.getItem(`Order`)))




