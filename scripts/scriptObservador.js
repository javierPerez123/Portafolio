export const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id')
            console.log(id)
            const sectionLink = document.querySelector(`.nav__lista a[href^="#${id}"]`)

            if (entry.isIntersecting) {
                const icon = () => {
                    const elemento = document.createElement('i')
                    elemento.classList.add('fa-solid', 'fa-mug-hot')
                    return elemento
                }
                document.querySelector('.nav__lista a.linkObservado i').remove()
                document.querySelector('.nav__lista a.linkObservado').classList.remove('linkObservado')

                sectionLink.classList.add('linkObservado')
                sectionLink.appendChild(icon())
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