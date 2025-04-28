const input = document.querySelector('.input-field');
const buttons =  document.querySelector('table');
const display = document.querySelector('.display');
let span = document.createElement('span');

let currentValue = '';
let operator = '';
let savedValue = null;

function operate(op, num, current){
    if(op === '+') return num + current;
    if(op === '−') return num - current;
    if(op === '×') return num * current;
    if(op === '÷') return num / current;
}

let handleButtonClick = buttons.addEventListener('click', (e) => {
    let attribute = e.target.getAttribute('class');
    let innerText = e.target.innerText; 

    if(e.target.tagName === 'BUTTON' && (attribute === 'number' || innerText === '.')){
        input.value += e.target.innerText;
        currentValue += e.target.innerText;
    }
});

let handleOperatorClick = buttons.addEventListener('click', (e) => {
    let innerText = e.target.innerText;
    let lastChar = input.value[input.value.length - 1];

    if(innerText === '+' && input.value != 0){
        if(!isNaN(lastChar)){
            input.value += innerText;
            operator = innerText;

            if(savedValue === null){
                savedValue = Number(currentValue);
            } else {
                savedValue += Number(currentValue);
            }
            currentValue = '';
        }
    } else if (innerText === '÷' && input.value != 0){
        if(!isNaN(lastChar)){
            input.value += innerText;
            operator = innerText;

            if(savedValue === null){
                savedValue = Number(currentValue);
                currentValue = '';
            } else if(currentValue !== '') {
                savedValue = Number(savedValue) / Number(currentValue);
                currentValue = '';
            }
        }
    } else if (innerText === '×' && input.value != 0){
        if(!isNaN(lastChar)){
            input.value += innerText;
            operator = innerText;

            if(savedValue === null){
                savedValue = Number(currentValue);
                currentValue = '';
            } else if(savedValue !== ''){
                savedValue = Number(savedValue) * Number(currentValue);
                currentValue = '';
            }
        }
    } else if (innerText === '−' && input.value != 0){
        if(!isNaN(lastChar)){
            input.value += innerText;
            operator = innerText;

            if(savedValue === null){
                savedValue = Number(currentValue);
            } else {
                savedValue = Number(savedValue) - Number(currentValue);
            }
            currentValue = '';
        }
    } else if(innerText === 'AC'){
        input.value = '';
        savedValue = null;
        operator = '';
        currentValue = '';
    }
});

let handleEqualClick = buttons.addEventListener('click', (e) => {
    let innerText = e.target.innerText;
    let numOne = Number(savedValue);
    let numTwo = Number(currentValue);

    if(innerText === '=' && input.value != 0){
        if(operator === '+'){
            input.value = `${operate(operator ,numOne, numTwo)}`;
            savedValue = operate(operator ,numOne, numTwo);
            currentValue = '';
            operator = '';
        } else if(operator === '−'){
            input.value = `${operate(operator ,numOne, numTwo)}`;
            savedValue = operate(operator ,numOne, numTwo);
            currentValue = '';
            operator = '';
        } else if(operator === '×'){
            input.value = `${operate(operator ,numOne, numTwo)}`;
            savedValue = operate(operator ,numOne, numTwo);
            currentValue = '';
            operator = '';
        } else if(operator === '÷'){
            input.value = `${operate(operator ,numOne, numTwo)}`;
            savedValue = operate(operator ,numOne, numTwo);
            currentValue = '';
            operator = '';
        }
    }
})

