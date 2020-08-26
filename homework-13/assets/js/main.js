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

// function* newFontGenerator(fontSize){
//     while(true)
//         yield fontSize += 2
// }

// const fontGenerator = newFontGenerator(14);

