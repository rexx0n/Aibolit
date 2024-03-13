import '../scss/style.scss'
import {madeTargetActive} from './nav.js'
import {functionModal} from "./modal.js";
import {slider} from './slider.js'

madeTargetActive()
functionModal()
try {
    slider()
}
catch (err) {
    console.log(err)
}

let btns = document.querySelectorAll('.main__info button')
btns.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
        window.location.href = '../entry.html'
    })
})

try {
    let entryPayBtn = document.querySelector('.entry__pay button')
    let entryButton = document.querySelector('.entry__form form > button')
    let entryPay = document.querySelector('.entry__pay')
    console.log(entryButton)
    entryPayBtn.addEventListener('click', (event)=> {
        event.preventDefault()
        entryPay.style.display = 'none'
        entryButton.classList.remove('entry--none')
    })
}
catch (err) {
    console.log(err)
}
