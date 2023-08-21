// total
const totalPrice = document.getElementById('total-price').innerText
const totalPriceValue = parseFloat(totalPrice)
const discount = totalPriceValue * 0.2
const total = totalPriceValue - discount
if(totalPriceValue >= 200) {
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total
}
else {
    document.getElementById('total').innerText = totalPriceValue
}


// product quantity 
document.getElementById('prod1').addEventListener('click' function(){
    const prod1 = totalPriceValue
})