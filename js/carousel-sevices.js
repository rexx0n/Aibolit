let elements = document.querySelector('.section__elements')
let btn = document.querySelector('.section__carousel > svg')
btn.addEventListener(('click'), ()=> {
    // -572px
    elements.style.transform = 'translate(-572px)'
})