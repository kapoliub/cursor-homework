import './content.css';
import Icon from './webpack_logo.svg';
// import {evenOddNumber} from '../../homework-01/assets/js/main';
//import {getSumOfArray} from '../../homework-02/assets/js/main';


function component() {
    const element = document.createElement('div');
    element.classList.add('hello')

    const icon = new Image();
    icon.classList.add('logo')
    icon.src = `./dist/${Icon}`;

    element.innerHTML = `<div>Hello webpack</div>`
    element.appendChild(icon);

    return element;
}

document.addEventListener('DOMContentLoaded', ()=>{
    // const func = evenOddNumber(350);
})

document.querySelector('.content__block').appendChild(component())

//console.log(evenOddNumber(34621))
// console.log(getSumOfArray())