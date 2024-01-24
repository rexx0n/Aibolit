export function functionModal() {
    let cross = document.querySelector('.modal__info > svg')
    let city = document.querySelector('.header__address')
    let cities = document.querySelectorAll('.modal__choice > a')
    let modalEl = document.querySelector('.modal')

    let choice

    cities.forEach(e => {
        e.addEventListener('click', (event) => {
            event.preventDefault()
            choice = e.textContent.trim()
            modalEl.classList.add('modal__none')
            city.querySelector('a').textContent = choice
        })
    })
    modalClose(cross, '.modal')
    modalOpen(city, '.modal')


}

function modalOpen(element, modal) {
    let modalEl = document.querySelector(`${modal}`)
    element.addEventListener('click', () => {
        modalEl.classList.remove('modal__none')
    })
}

function modalClose(element, modal) {
    let modalEl = document.querySelector(`${modal}`)
    element.addEventListener('click', () => {
        modalEl.classList.add('modal__none')
    })
}


let entryBtns = document.querySelectorAll('.entry__buttons button')
let crossEntry = document.querySelector('.modal--entry .modal__info > svg')
entryBtns.forEach(e => {
    e.addEventListener('click', () => {
        modalOpen(e, '.modal--entry')
    })
})
modalClose(crossEntry, '.modal--entry')

