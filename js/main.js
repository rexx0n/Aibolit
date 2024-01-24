import '../scss/style.scss'
import {madeTargetActive} from './nav.js'
import {functionModal} from "./modal.js";
import {slider} from './slider.js'

madeTargetActive()
functionModal()
slider()





let btns = document.querySelectorAll('.main__info button')
btns.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
        window.location.href = '../entry.html'
    })
})
