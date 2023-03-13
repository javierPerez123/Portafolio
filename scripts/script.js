import { scriptMenu } from './scriptsMenu.js'

scriptMenu()

const inputs = document.querySelectorAll('input[class^="formulario__entrada"]');
inputs.forEach(
    input => {
        input.onfocus = function () {
            input.previousElementSibling.classList.add('focus');
            input.classList.remove('error1')
            input.classList.add('bottom')

        }
        input.onblur = function () {
            input.value = input.value.trim();
            console.log(input.value.trim())
            console.log(input.value)
            if (input.value.trim().length == 0) {
                input.previousElementSibling.classList.remove('focus');
                input.classList.add('error1')
            }
            else {
                input.classList.remove('error1')
            }
            if (input.value.trim().length == 1 || input.value.trim().length == 2) {
                input.classList.add('error1')
            }




            input.classList.remove('bottom')

        }
    }
);
