const total = parseFloat(localStorage.getItem("totalPrice"))

document.querySelector("#total").innerHTML = total + " €"