const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
const navLink = document.querySelectorAll('.nav__link')

let color = ' '
let textColor = ''
if(localStorage.getItem('bg-color') !== null){
    color = localStorage.getItem('bg-color')
    textColor = localStorage.getItem('text-color')

    navLink.forEach(el => {
        el.style.color = textColor
    })
    header.style.background = color
    footer.style.background = color
}

function choiceDark(){
    console.log (header.style)
    header.style.backgroundColor = 'rgb(0, 0, 0)'
    footer.style.backgroundColor = 'rgb(0, 0, 0)'
    
    header.style.transition = '1s ease-out'
    footer.style.transition = '1s ease-out'

     navLink.forEach( el => {
        el.style.color = 'white'
        el.style.transition = '1s ease-out'
     })
     localStorage.setItem('text-color',' white')

    localStorage.setItem('bg-color', 'rgb(0, 0, 0)')
}
function choiceLight(){
    header.style.backgroundColor = 'white'
    footer.style.backgroundColor = 'white'

    header.style.transition = '1s ease-out'
    footer.style.transition = '1s ease-out'

    navLink.forEach( el => {
        el.style.color = 'rgb(0, 0, 0)'
        el.style.transition = '1s ease-out'
        
     })
     localStorage.setItem('text-color',' rgb(0, 0, 0)')
    localStorage.setItem('bg-color', 'white')
}


