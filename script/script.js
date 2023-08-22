// product quantity
document.getElementById('prod1').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name1').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity1')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})
document.getElementById('prod2').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name2').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity2')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})
document.getElementById('prod3').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name3').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity3')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})
document.getElementById('prod4').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name4').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity4')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})
document.getElementById('prod5').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name5').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity5')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})
document.getElementById('prod6').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name6').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity6')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})
document.getElementById('prod7').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name7').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity7')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})
document.getElementById('prod8').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name8').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity8')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})
document.getElementById('prod9').addEventListener('click', function(){
    const listItem = document.querySelector('#prod-list')
    const liItem = document.createElement('li')
    const prodName = document.getElementById('name9').innerText
    liItem.innerText = prodName
    listItem.appendChild(liItem)

    const prodPriceValue = document.getElementById('quantity9')
    const prodPriceString = prodPriceValue.innerText
    const prodPrice = parseFloat(prodPriceString)

    const totalElement = document.getElementById('total-price')
    const previousTotalString = totalElement.innerText
    const previousTotal = parseFloat(previousTotalString)

    const currentTotalQuantity = previousTotal + prodPrice
    const currentTotal = currentTotalQuantity.toFixed(2)

    totalElement.innerText = currentTotal

    if(currentTotal >= 200){
        document.getElementById('apply-btn').addEventListener('click', function(){
            const promoInput = document.getElementById('remove-outline')
            const promoInputValue = promoInput.value
            if(promoInputValue === 'SELL200'){
                document.getElementById('apply-btn').disabled = true
                document.getElementById('apply-btn').style.backgroundColor = 'rgba(17, 17, 17, 0.50)'
                const discountValue = currentTotal * 0.2
                const discount = discountValue.toFixed(2)
                const totalValue = currentTotal - discount
                const total = totalValue.toFixed(2)
                document.getElementById('discount').innerText = discount
                document.getElementById('total').innerText = total
            }
            else {
                alert("Invalid coupon code. Please enter a valid coupon code.")
            }
        })
        document.getElementById('apply-btn').disabled = false
        document.getElementById('apply-btn').style.backgroundColor = '#E527B2'
    }

    const discount = 0
    const totalValue = currentTotal - discount
    const total = totalValue.toFixed(2)
    document.getElementById('discount').innerText = discount
    document.getElementById('total').innerText = total

    if(total > 0){
        document.getElementById('purchase-btn').disabled = false
        document.getElementById('purchase-btn').style.backgroundColor = '#E527B2'
    }
})


document.getElementById('purchase-btn')