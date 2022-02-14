const buttons = document.querySelectorAll(".cost-btn")
const monthText = document.querySelector('.month-text')
const priceText = document.querySelector('.price-text')

let saveButton = buttons[1]

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        saveButton.classList.remove('active-btn')
        btn.classList.add("active-btn")
        saveButton = btn
        const month = btn.getAttribute("data-month")
        const price = btn.getAttribute("data-price")
        const fee = 10
        monthText.innerHTML = month
        priceText.innerHTML = String(Number(month) * Number(price) + fee)
    })
})
