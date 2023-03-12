export const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id')
            console.log(id)
            const sectionLink = document.querySelector(`.nav__lista a[href^="#${id}"]`)
            if (entry.isIntersecting) {
                document.querySelector('.nav__lista a.linkObservado').classList.remove('linkObservado')
                sectionLink.classList.add('linkObservado')
            }
            if (id == 'contacto') {
                document.querySelector('.cabecera').classList.toggle('cabeceraEnContacto')
            }
            else {
                document.querySelector('.cabecera').classList.remove('cabeceraEnContacto')
            }
        })
    },
    { rootMargin: "-50% 0px -50% 0px" }
);