export const btnExit = document.querySelector('.fa-x');
export const btnMenu = document.querySelector('.fa-bars');
export const linkScrools = document.querySelectorAll('.nav__lista a[href^="#"]')

export const mostrarMenu = () => {
    const elemento = btnExit.parentElement
    const menu = document.querySelector('.nav__lista');
    elemento.classList.toggle('mostrar-fa-x')
    menu.classList.toggle('mostrarMenu')
}

export const quitarMenu = () => {
    const elemento = btnExit.parentElement
    const menu = document.querySelector('.nav__lista');
    elemento.classList.toggle('mostrar-fa-x')
    menu.classList.toggle('mostrarMenu')
}

export const scriptMenu = () => {
    btnMenu.addEventListener('click', mostrarMenu)
    btnExit.addEventListener('click', quitarMenu)
    linkScrools.forEach(linkScrools => {
        linkScrools.addEventListener('click', quitarMenu)
    })
}