function* createIdGenerator(){
    let i = 0;
    while(true)
        yield i++;
}

const idGenerator = createIdGenerator();


let title = document.querySelector('#fontSizeChanger h3');
let fontSize = +window.getComputedStyle(title,null).getPropertyValue('font-size').split('px')[0];

const fontGenerator = function *(action) {
    if(fontSize < 10 || fontSize > 100){
        alert('Enough!!!')
        return
    }

    if(action === 'up'){
        title.style.fontSize = `${++fontSize}px`;
    }
    else if(action === 'down'){
        title.style.fontSize = `${--fontSize}px`;
    }
    yield action;
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#generatorRun').addEventListener('click', ()=>{
        document.querySelector('#outputField').innerText = idGenerator.next().value;
        document.querySelector('#outputField').classList.remove('d-none')
    })

    document.querySelectorAll('#fontSizeChanger button').forEach(button => {
        let action = button.innerText.toLowerCase();
        button.addEventListener('click', ()=>{
            fontGenerator(action).next();
        })
    })
})