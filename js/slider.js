export function slider() {
    let cards = document.querySelector('.history__cards')
    let btnLeft = document.querySelector('.history__left')
    let btnRight = document.querySelector('.history__right')
    let translate

    btnRight.addEventListener('click', () => {
        translate = -1158
        cards.style.transform = `translate(${translate}px) `
    })
    btnLeft.addEventListener('click', () => {
        translate = 0
        cards.style.transform = `translate(${translate}px)`
    })
}