export function madeTargetActive() {
    let links = document.querySelectorAll('.main > nav a')
    links.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.preventDefault()
            deleteActive(links)
            e.classList.add('main__active')
        })
    })
}

export function deleteActive(links) {
    links.forEach(e => {
        e.classList.remove('main__active')
    })
}