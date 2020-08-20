const getRandomChinese = (length) =>{
    let promise;
    if(length > 0){
        promise = getChar('');
        let x = 1;
        while(x < length){
            promise = promise.then(result =>{
                return getChar(result)
            })
            x++
        }
        return promise;
    }
    else{
        return new Promise((reject) =>{
            reject(error)
        });
    }
    
}

const getChar = (char) =>{
    return new Promise(resolve =>{
        const sign = String.fromCharCode(String(Date.now()).slice(-5));
        char += sign;
        setTimeout(() => {
            resolve(char);
        }, 50);
    })
}


document.addEventListener('DOMContentLoaded', ()=>{
    const button = document.querySelector('#getCharsButton');
    const input = document.querySelector('#charsQuantityInput');
    const output = document.querySelector('#outputField');

    button.addEventListener('click', ()=>{
        console.log(`Approximate time to get the result - ${+input.value * 50}ms`)
        getRandomChinese(+input.value)
        .then(result => {
            output.innerText = result
            output.classList.remove('d-none')
        })
        .catch(() => console.log(`Check input value`))
    });
})