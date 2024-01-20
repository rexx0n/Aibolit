export function functionModal() {
    let cross = document.querySelector('.modal__info > svg')
    let modal = document.querySelector('.modal')
    let city = document.querySelector('.header__address')
    let cities = document.querySelectorAll('.modal__choice > a')
    let choice

    cities.forEach(e => {
        e.addEventListener('click', (event) => {
            event.preventDefault()
            choice = e.textContent.trim()
            modal.classList.add('modal__none')
            city.querySelector('a').textContent = choice
        })
    })
    cross.addEventListener('click', () => {
        modal.classList.add('modal__none')
    })

    city.addEventListener('click', () => {
        modal.classList.remove('modal__none')
    })
}