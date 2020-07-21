//1
const getMaxDigit = (number) =>{
    let numbersArray = String(number).split('');
    let maxDigit = 0;
    numbersArray.map(e => {
        if(parseInt(e) > maxDigit){
            maxDigit = parseInt(e);
        }
    })
    return maxDigit
}

//2
const getValueToPow = (number, pow) =>{
    let result = number;
    if(pow === 0){
        result = 1;
    }
    else if(pow < 0){
        for(let i = 1; i < -1*pow; i++){
            result *= number;
        }
        result = 1/result;
    }
    else{
        for(let i = 1; i < pow; i++){
            result *= number;
        }
    }
    return result
}

//3
const normalizeName = (name) =>{
    if(typeof name === 'string'){
        let nameToFix = name.toLowerCase();
        nameToFix[0].toUpperCase();
        return nameToFix[0].toUpperCase() + nameToFix.slice(1);
    }
    else{
        return 'Error: Check input values'
    }
}

//4
const getPriceWithoutTax = (price, tax) => {
    if(isNaN(price) || isNaN(tax)){
        return 'Error: Check input values'
    }
    else{
        return price - ((price*tax)/100)
    }
}

//5
const getRandomNumber = (minValue, maxValue) =>{
    if(isNaN(minValue) || isNaN(maxValue)){
        return 'Error: Check input values'
    }
    else{
        return Math.round(Math.random() * (maxValue - minValue)) + minValue
    }
}

//6
const countLetter = (letter, word) =>{
    if((typeof letter && typeof word) === 'string'){
        let count = 0;
        for(let i = 0; i < word.length; i++){
            if(letter === word.toLowerCase()[i]){
                count++
            }
        }
        return count;
    }
    else{
        return 'Error: Check input values'
    }
}

//7
const convertCurrency = (amount) =>{
    let USD = 27.5;
    if(amount.match(/uah/gi)){
        return (amount
            .toLowerCase()
            .split('uah')[0]/USD)
            .toFixed(2) + '$';
    }
    else if(amount.match(/$$/)){
        return amount.split('$')[0] * USD + 'UAH';
    }
    else{
        return 'Error: Check input values';
    }
}

//8
const getRandomPassword = (passwordLength = 8) =>{
    if(!isNaN(passwordLength) &&  passwordLength > 0){
        let password = [];
        for(let i = 0; i < passwordLength; i++){
            password[i] = +(Math.floor(Math.random() * 10)).toFixed(0);
        }
        return password.join('');
    }
    else{
        return 'Error: Check input values';
    }
}

//9
const deleteLetters = (letter, sentence) =>{
    if((typeof letter === 'string' || typeof letter === 'number') && (typeof sentence === 'string' || typeof sentence === 'number')){
        let removedLetter = new RegExp(letter, 'g');
        return String(sentence).toLowerCase().replace(removedLetter, '');
    }
    else{
        return 'Error: Check input values';
    }
}

//10
const isPalyndrom = (sentence) =>{
    if(typeof sentence === 'string'){
        let oldSentence = sentence.toLowerCase().replace(/\s/g, '');
        let newSentence = oldSentence.split('').reverse().join('');
        if(oldSentence === newSentence){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Error: Check input values';
    }
}

//11
const deleteDuplicateLetter = (sentence) =>{
    
    if(typeof sentence === 'string'){
        let lettersArray = sentence.toLowerCase().split('');
        let result = lettersArray.filter((el, i, array) => {
            return array.lastIndexOf(el) === array.indexOf(el);
        });
        return result.join('')
    }
    else{
        return 'Error: Check input values';
    }
}

document.writeln(`<p>Функція №1: ${getMaxDigit(98274651)}</p>`);
document.writeln(`<p>Функція №2: ${getValueToPow(2,3)}</p>`);
document.writeln(`<p>Функція №3: ${normalizeName('liubomyr')}</p>`);
document.writeln(`<p>Функція №4: ${getPriceWithoutTax(100, 19.5)}</p>`);
document.writeln(`<p>Функція №5: ${getRandomNumber(0,1000000)}</p>`);
document.writeln(`<p>Функція №6: ${countLetter('a', 'blablabla')}</p>`);
document.writeln(`<p>Функція №7: ${convertCurrency('100UAH')}</p>`);
document.writeln(`<p>Функція №8: ${getRandomPassword()}</p>`);
document.writeln(`<p>Функція №9: ${deleteLetters('a', 'blablabla')}</p>`);
document.writeln(`<p>Функція №10: ${isPalyndrom('Я несу гусеня')}</p>`);
document.writeln(`<p>Функція №11: ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}</p>`);
