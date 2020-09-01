function* createIdGenerator(){
    let i = 0;
    while(true)
        yield i++;
}

const idGenerator = createIdGenerator();

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#generatorRun').addEventListener('click', ()=>{
        document.querySelector('#outputField').innerText = idGenerator.next().value;
        document.querySelector('#outputField').classList.remove('d-none')
    })
})


let fontSize = 14;
var fontGenerator = function *(value) {
        if(value === 'up'){
            ++fontSize
        }
        else if(value === 'down'){
            --fontSize
        }
        yield value;
}


console.log(fontGenerator('up').next(), fontSize)
console.log(fontGenerator('up').next(), fontSize)
console.log(fontGenerator('up').next(), fontSize)
console.log(fontGenerator('down').next(), fontSize)
console.log(fontGenerator('down').next(), fontSize)