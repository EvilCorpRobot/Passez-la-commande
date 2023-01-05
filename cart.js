const saveCommandLocalStorage = (command) => {

}

let command = [
    {
        name: "kebab",
        quantity: 1,
        price: 10
    },
    {
        name: "tacos",
        quantity: 1,
        price: 10
    },{
        name: "kebab",
        quantity: 1,
        price: 10
    },
    {
        name: "tacos",
        quantity: 1,
        price: 10
    },{
        name: "kebab",
        quantity: 1,
        price: 10
    },
    {
        name: "tacos",
        quantity: 1,
        price: 10
    },{
        name: "kebab",
        quantity: 1,
        price: 10
    },
    {
        name: "tacos",
        quantity: 1,
        price: 10
    },
    {
        name: "kebab",
        quantity: 1,
        price: 10
    },
    {
        name: "tacos",
        quantity: 1,
        price: 10
    },{
        name: "kebab",
        quantity: 1,
        price: 10
    },
    {
        name: "tacos",
        quantity: 1,
        price: 10
    },
    

]
// recuperer la div content
const cartContent = document.querySelector(".item-container")


command.map((item, index) => {
    // creation de la balise item
    const itemDiv = document.createElement("div")
    itemDiv.classList.add("item")
    itemDiv.id = "item-" + index

    //creation de l'ajout et la supression de la quantiter
    const quantityDiv = document.createElement("div")
    quantityDiv.classList.add("quantity")
    const pMinus = document.createElement("p")
    pMinus.classList.add("minus")
    pMinus.innerHTML = "&minus;"
    pMinus.addEventListener("click", (e) => {
        if (command[index].quantity === 1) {
            if (index > -1) {
                itemDiv.remove()
                delete command[index]
                return
            }
            saveCommandLocalStorage(command)
            
        } else {
            command[index].quantity--
            saveCommandLocalStorage(command)
        }
        pQuantity.innerHTML = command[index].quantity
        itemDiv.querySelector(".price").innerHTML = item.price * item.quantity + " €"
    })
    quantityDiv.appendChild(pMinus)
    const pQuantity = document.createElement("p")
    pQuantity.classList.add("nbr")
    pQuantity.innerText = item.quantity
    quantityDiv.appendChild(pQuantity)
    const pPlus = document.createElement("p")
    pPlus.classList.add("plus")
    pPlus.innerHTML = "&plus;"
    pPlus.addEventListener("click", (e) => {
        command[index].quantity++
        pQuantity.innerHTML = command[index].quantity
        itemDiv.querySelector(".price").innerHTML = item.price * item.quantity + " €"
        saveCommandLocalStorage(command)
    })
    quantityDiv.appendChild(pPlus)
    itemDiv.appendChild(quantityDiv)
    
    
    const pTitleItem = document.createElement("p")
    pTitleItem.classList.add("title-item")
    pTitleItem.innerHTML = item.name
    const pPrice = document.createElement("p")
    pPrice.classList.add("price")
    pPrice.innerHTML = item.price * item.quantity + " €"
    itemDiv.appendChild(pTitleItem)
    itemDiv.appendChild(pPrice)
    
    cartContent.appendChild(itemDiv)
})