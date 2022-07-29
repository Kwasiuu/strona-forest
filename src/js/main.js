const buttons = document.querySelector('.hamburger-nav__buttons')
const buttonBars = document.querySelector('.fa-bars')
const buttonX = document.querySelector('.fa-x')
const hamburgerNav = document.querySelector('.hamburger-nav__items')
const thisYear = document.querySelector('.this-year')


const handleNav = () => {
    buttonBars.classList.toggle('hide')
    buttonX.classList.toggle('hide')
    buttons.classList.toggle('active')
    hamburgerNav.classList.toggle('active')

    document.body.classList.toggle('sticky-body')
}


const pasteYear = () => {
    let data = new Date()
    thisYear.textContent = data.getFullYear()
}


buttons.addEventListener('click', handleNav)
hamburgerNav.addEventListener('click', handleNav)
window.addEventListener('load', pasteYear)
