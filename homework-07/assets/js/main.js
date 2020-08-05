const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(salary){
    return salary * this.tax
}

//2
function getMiddleTaxes(){
    return +(this.tax * this.middleSalary).toFixed(2)
}

//3
function getTotalTaxes(){
    return this.tax * this.middleSalary * this.vacancies
}

//4
function getMySalary(){
    let salary = Math.floor((Math.random() * 500) + 1500);
    let taxes = +(this.tax * salary).toFixed(2);
    let profit = +(salary - taxes).toFixed(2);
    return{
        salary: salary,
        taxes: taxes,
        profit: profit
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#countryTaxCalculatorButton').addEventListener('click', ()=>{
        const country = document.querySelector('#countryTaxCalculatorSelect').value;
        const salary = +document.querySelector('#countryTaxCalculatorInput').value;
        switch(country){
            case 'ukraine':
                document.querySelector('#countryTaxCalculatorResult').innerHTML = getMyTaxes.call(ukraine, salary) + ' UAH';
                document.querySelector('#countryTaxCalculatorResult').classList.remove('d-none');

                break;
            case 'latvia':
                document.querySelector('#countryTaxCalculatorResult').innerHTML = getMyTaxes.call(latvia, salary) + ' EUR';
                document.querySelector('#countryTaxCalculatorResult').classList.remove('d-none');
                break;
            case 'litva':
                document.querySelector('#countryTaxCalculatorResult').innerHTML = getMyTaxes.call(litva, salary) + ' EUR';
                document.querySelector('#countryTaxCalculatorResult').classList.remove('d-none');
                break;
            default:
                alert('Choose a country');
        }
    });
    document.querySelector('#showCountryTaxButton').addEventListener('click', ()=>{
        const country = document.querySelector('#countryTaxSelect').value;
        switch(country){
            case 'ukraine':
                document.querySelector('#countryTaxResult').innerHTML = getMiddleTaxes.call(ukraine) + ' UAH';
                document.querySelector('#countryTaxResult').classList.remove('d-none');
                break;
            case 'latvia':
                document.querySelector('#countryTaxResult').innerHTML = getMiddleTaxes.call(latvia) + ' EUR';
                document.querySelector('#countryTaxResult').classList.remove('d-none');
                break;
            case 'litva':
                document.querySelector('#countryTaxResult').innerHTML = getMiddleTaxes.call(litva) + ' EUR';
                document.querySelector('#countryTaxResult').classList.remove('d-none');
                break;
            default:
                alert('Choose a country');
        }
    });
    document.querySelector('#showTotalTaxButton').addEventListener('click', ()=>{
        const country = document.querySelector('#countryTotalTaxSelect').value;
        switch(country){
            case 'ukraine':
                document.querySelector('#totalTaxResult').innerHTML = getTotalTaxes.call(ukraine) + ' UAH';
                document.querySelector('#totalTaxResult').classList.remove('d-none');
                break;
            case 'latvia':
                document.querySelector('#totalTaxResult').innerHTML = getTotalTaxes.call(latvia) + ' EUR';
                document.querySelector('#totalTaxResult').classList.remove('d-none');
                break;
            case 'litva':
                document.querySelector('#totalTaxResult').innerHTML = getTotalTaxes.call(litva) + ' EUR';
                document.querySelector('#totalTaxResult').classList.remove('d-none');
                break;
            default:
                alert('Choose a country');
        }
    });
    document.querySelector('#showTotalTaxButton').addEventListener('click', ()=>{
        const country = document.querySelector('#countryTotalTaxSelect').value;
        switch(country){
            case 'ukraine':
                document.querySelector('#totalTaxResult').innerHTML = getTotalTaxes.call(ukraine) + ' UAH';
                document.querySelector('#totalTaxResult').classList.remove('d-none');
                break;
            case 'latvia':
                document.querySelector('#totalTaxResult').innerHTML = getTotalTaxes.call(latvia) + ' EUR';
                document.querySelector('#totalTaxResult').classList.remove('d-none');
                break;
            case 'litva':
                document.querySelector('#totalTaxResult').innerHTML = getTotalTaxes.call(litva) + ' EUR';
                document.querySelector('#totalTaxResult').classList.remove('d-none');
                break;
            default:
                alert('Choose a country');
        }
    });
    document.querySelector('#randomSalaryUkraine').addEventListener('click', (e)=>{
        if(document.querySelector('#randomSalaryUkraine').hasAttribute('isPressed') === false){
            document.querySelector('#randomSalaryUkraine').setAttribute('isPressed', true);
            document.querySelector('#randomSalaryStopButton').click();
            let resultField = document.querySelector('#randomSalaryResult');
            let timer = setInterval(function getSalaryWithTimer() {
                let resultArray = Object.keys(getMySalary.call(ukraine)).map(el =>{
                    return `${el} : ${getMySalary.call(ukraine)[el]} UAH`
                });
                resultField.innerHTML = resultArray.join(', ');
                return getSalaryWithTimer;
            }(), 10000);
            document.querySelector('#randomSalaryStopButton').addEventListener('click', ()=>{
                clearInterval(timer);
                document.querySelector('#randomSalaryUkraine').removeAttribute('isPressed');
                document.querySelector('#randomSalaryResult').classList.add('d-none');
            })
        }
        document.querySelector('#randomSalaryResult').classList.remove('d-none')
    });
    document.querySelector('#randomSalaryLatvia').addEventListener('click', ()=>{
        if(document.querySelector('#randomSalaryLatvia').hasAttribute('isPressed') === false){
            document.querySelector('#randomSalaryLatvia').setAttribute('isPressed', true);
            document.querySelector('#randomSalaryStopButton').click();
            let resultField = document.querySelector('#randomSalaryResult');
            let timer = setInterval(function getSalaryWithTimer() {
                let resultArray = Object.keys(getMySalary.call(latvia)).map(el =>{
                    return `${el} : ${getMySalary.call(latvia)[el]} UAH`
                });
                resultField.innerHTML = resultArray.join(', ');
                return getSalaryWithTimer;
            }(), 10000);
            document.querySelector('#randomSalaryStopButton').addEventListener('click', ()=>{
                clearInterval(timer);
                document.querySelector('#randomSalaryLatvia').removeAttribute('isPressed');
                document.querySelector('#randomSalaryResult').classList.add('d-none');
            })
        }
        document.querySelector('#randomSalaryResult').classList.remove('d-none')
    });
    document.querySelector('#randomSalaryLitva').addEventListener('click', ()=>{
        if(document.querySelector('#randomSalaryLitva').hasAttribute('isPressed') === false){
            document.querySelector('#randomSalaryLitva').setAttribute('isPressed', true);
            document.querySelector('#randomSalaryStopButton').click();
            let resultField = document.querySelector('#randomSalaryResult');
            let timer = setInterval(function getSalaryWithTimer() {
                let resultArray = Object.keys(getMySalary.call(litva)).map(el =>{
                    return `${el} : ${getMySalary.call(litva)[el]} UAH`
                });
                resultField.innerHTML = resultArray.join(', ');
                return getSalaryWithTimer;
            }(), 10000);
            document.querySelector('#randomSalaryStopButton').addEventListener('click', ()=>{
                clearInterval(timer);
                document.querySelector('#randomSalaryLitva').removeAttribute('isPressed');
                document.querySelector('#randomSalaryResult').classList.add('d-none');
            });
        };
        document.querySelector('#randomSalaryResult').classList.remove('d-none');
    });
});

// let timer = setInterval(function getSalaryWithTimer() {
//     getMySalary.call(ukraine);
//     return getSalaryWithTimer;
// }(), 10000);


