const form = document.querySelector('.form')
const balanceValue = document.querySelector('.balance-value')

const depositButton = document.querySelector('#btndeposit')
const withdrawButton = document.querySelector('#btnwithdraw')

depositButton.addEventListener('click', event => {
    event.preventDefault()

    const regex = /\d+(.\d{2})?/g

    const inputValue = document.querySelector('#inputValue').value.trim()

    const sum = Number(balanceValue.textContent.match(regex).join('')) + Number(inputValue);
    balanceValue.innerHTML = `<p>R$ ${Number(sum).toFixed(2)}</p>`

    form.reset()
})

withdrawButton.addEventListener('click', event => {
    event.preventDefault()

    const regex = /\d+(.\d{2})?/g

    const inputValue = document.querySelector('#inputValue').value.trim()

    const difference = Number(balanceValue.textContent.match(regex).join('')) - Number(inputValue);
    if (difference < 0) {
        alert('Saldo insuficiente')
    } else {
        balanceValue.innerHTML = `<p>R$ ${Number(difference).toFixed(2)}</p>`
    }

    form.reset()
})
