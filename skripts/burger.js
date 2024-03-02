const nav = document.querySelector('.nav__list')
const burger = document.querySelector('.burger')
const navItem = document.querySelectorAll('.nav__item')

function burgerClick(){
    nav.classList.toggle('nav__list_active')
    burger.classList.toggle('active')
    navItem.forEach((el, index) => {
        if(el.style.animation){
            el.style.animation =''
        }else{
            el.style.animation =`navLinkAnim 1.5s ease forwards ${index / 7 + 0.3}s`
        }

    })

}