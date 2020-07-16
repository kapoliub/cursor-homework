const TOMATO_PRICE = 15.678;
const POTATO_PRICE = 123.965;
const BANANA_PRICE = 90.2345;
const MY_MONEY = 500;


let allPrices = [TOMATO_PRICE, POTATO_PRICE, BANANA_PRICE];
let reducer = (accumulator, currentValue) => accumulator + currentValue;


let maxPrice = Math.max.apply(null, allPrices);
console.log(maxPrice);

let minPrice = Math.min.apply(null, allPrices);
console.log(minPrice);

let totalAmount = allPrices.reduce(reducer); 
console.log(totalAmount);

let getAmountWithoutCents = (pricesArray) =>{
    let totalAmount = 0;
    pricesArray.forEach(element => {
        return totalAmount += Math.floor(element);
    });
    return totalAmount;
}
console.log(getAmountWithoutCents(allPrices));

let amountToHundreds = Math.ceil(totalAmount/100)*100;
console.log(amountToHundreds);

let evenOddNumber = (sum) =>{
    let number = Math.floor(sum);
    return (number % 2 === 0)? 'парна' : 'непарна'
}

console.log(evenOddNumber(totalAmount));

let shortChange = MY_MONEY - totalAmount;
console.log(shortChange);

let averagePrice = (array) =>{
    return +(array.reduce(reducer)/array.length).toFixed(2);
}
console.log(averagePrice(allPrices));


let deal = (amount) =>{
    let randomDiscount = +(Math.random() * 100).toFixed(0);
    let discountAmount = (amount * randomDiscount)/100;
    let priceWithDiscount = +(amount - discountAmount).toFixed(2);
    let netProfit = +(amount/2 - discountAmount).toFixed(2);
    return {priceWithDiscount, netProfit};
}

console.log(deal(totalAmount))

let outputResults = () => {
    let div = document.querySelector('.results')
    div.innerHTML =
    `
        <p>Максимальна ціна: <b>${maxPrice} UAH</b></p>
        <p>Мінімальна ціна: <b>${minPrice} UAH</b></p>
        <p>Вартість всіх товарів <b>${totalAmount} UAH</b></p>
        <p>Вартість товарів без копійок (округленні в меншу сторону) <b>${getAmountWithoutCents(allPrices)} UAH</b></p>
        <p>Сума товарів округленна до сотень <b>${amountToHundreds} UAH</b></p>
        <p>Сума всіх товарів - <b>${evenOddNumber(totalAmount)}</b></p>
        <p>Сума решти з 500 грн: <b>${shortChange} UAH</b></p>
        <p>Середнє значення цін, округлене до другого знаку після коми <b>${averagePrice(allPrices)} UAH</b></p>
        <br>
        <h3>Задачка</h3>
        <p>Сума до оплати <b>${deal(totalAmount).priceWithDiscount} UAH</b></p>
        <p>Чистий прибуток <b>${deal(totalAmount).netProfit} UAH</b></p>
    `;
}

outputResults();



