const randomColor = () =>{
    let random = [];
    for(let i = 0; i < 6; i++){
        random[i] = Math.floor(Math.random() * 10)
    }
    return `#${random.join('')}`;
}

const generateBlocks = (sideSize) =>{
    const outputArea = document.querySelector('.squares__block');
    if(outputArea.children.length > 4){
        outputArea.innerHTML = '';
    }
    for(let i = 0; i < sideSize; i++){
        let row = document.createElement('div');
        for(let j = 0; j < sideSize; j++){
            let newElement = document.createElement('div');
            newElement.classList.add('square')
            newElement.style.backgroundColor = randomColor();
            row.append(newElement)
        }
        outputArea.append(row)
    }
}

generateBlocks(5);

const generateBlocksInterval = () =>{
    generateBlocks(5)
    let timerId = setInterval(() => generateBlocks(5), 1000);
    document.querySelector('#startButton').removeEventListener('click', generateBlocksInterval);
    document.querySelector('#stopButton').addEventListener('click', ()=>{
        clearInterval(timerId);
        document.querySelector('#startButton').addEventListener('click', generateBlocksInterval);
    });
}

document.querySelector('#startButton').addEventListener('click', generateBlocksInterval);


