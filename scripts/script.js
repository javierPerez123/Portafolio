const inputs = document.querySelectorAll('input');
const btnExit = document.querySelector('.fa-x');
const btnMenu = document.querySelector('.fa-bars');
const linkScrools = document.querySelectorAll('.nav__link')

const mostrarMenu = (evento) => {
    const elemento = btnExit.parentElement
    const menu = document.querySelector('.nav__lista');
    elemento.classList.toggle('mostrar-fa-x')
    menu.classList.toggle('mostrarMenu')
}

const quitarMenu = (evento) => {
    const elemento = evento.target.parentElement
    const menu = document.querySelector('.nav__lista');
    elemento.classList.toggle('mostrar-fa-x')
    menu.classList.toggle('mostrarMenu')
}

btnMenu.addEventListener('click', mostrarMenu)
btnExit.addEventListener('click', quitarMenu)
inputs.forEach(
    input => {
        input.onfocus = function () {
            input.previousElementSibling.classList.add('focus');
            input.classList.add('bottom')
        }
        input.onblur = function () {
            input.value = input.value.trim();
            if (input.value.trim().length == 0) {
                input.previousElementSibling.classList.remove('focus');
            }
            input.classList.remove('bottom')
        }
    }
);