import { observer } from "./scriptObservador.js";

const btnExit = document.querySelector('.nav__button-fa-x');
const btnMenu = document.querySelector('.nav__button-fa-bars');
const linkScrools = document.querySelectorAll('.nav__lista a[href^="#"]');

export const mostrarMenu = () => {
    const menu = document.querySelector('.nav__lista');
    btnExit.classList.toggle('mostrar-fa-x');
    menu.classList.toggle('mostrarMenu');
}

export const quitarMenu = () => {
    const menu = document.querySelector('.nav__lista');
    btnExit.classList.toggle('mostrar-fa-x');
    menu.classList.toggle('mostrarMenu');


}

export const scriptMenu = () => {
    btnMenu.addEventListener('click', mostrarMenu)
    btnExit.addEventListener('click', quitarMenu)
    linkScrools.forEach(linkScrools => {
        linkScrools.addEventListener('click', quitarMenu);

        const hrefLink = linkScrools.getAttribute('href');
        const target = document.querySelector(hrefLink);
        if (target) {
            observer.observe(target);
        }
    })
}