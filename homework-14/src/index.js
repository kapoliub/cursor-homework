import './content.css';
import Icon from './webpack_logo.svg';

function component() {
    const element = document.createElement('div');
    element.classList.add('hello')

    const icon = new Image();
    icon.classList.add('logo')
    icon.src = `./dist/${Icon}`;

    element.innerHTML = `<div>Result is in console</div>`
    element.appendChild(icon);

    return element;
}

document.querySelector('.content__block').appendChild(component());