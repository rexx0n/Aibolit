import '../scss/style.scss'
import {madeTargetActive} from './nav.js'
import {functionModal} from "./modal.js";

madeTargetActive()
functionModal()

let cards = document.querySelector('.history__cards')
let btnLeft = document.querySelector('.history__left')
let btnRight = document.querySelector('.history__right')
let translate
let count = 0

btnRight.addEventListener('click', () => {
    translate = -1158
    cards.style.transform = `translate(${translate}px) `
})
btnLeft.addEventListener('click', () => {
    translate = 0
    cards.style.transform = `translate(${translate}px)`
})
