import { scriptMenu } from './scriptsMenu.js'

scriptMenu()

const inputs = document.querySelectorAll('input');
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