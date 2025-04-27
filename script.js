const input = document.querySelector('.input-field');
const buttons =  document.querySelector('table');
const display = document.querySelector('.display');
const span = document.createElement('span');

let number = [];
let result = 0;


function addNum(arr){
    let result = arr.reduce((sumTotal, current) => {
        return sumTotal += current;
    }, 0)
    return result;
}

function subtractNum(arr){
    let result = arr.reduce((total, current) => {
        return total -= current;
    }, 0)
    return result;
}

function multiplyNum(arr){
    let result = arr.reduce((product, current) => {
        return product *= current;
    }, 0)
    return result;
}

function divideNum(arr){
    let result = arr.reduce((quotient, current) => {
        return quotient /= current;
    })
    return result;
}


buttons.addEventListener('click', (e) => {
    let attribute = e.target.getAttribute('class');

    if(e.target.tagName === 'BUTTON' && attribute === 'number'){
        input.value += e.target.innerText;
    }
});

buttons.addEventListener('click', (e) => {
    let attribute = e.target.getAttribute('class');
    let tagName = e.target.tagName;
    let innerText = e.target.innerText;
    let lastChar = input.value[input.value.length - 1];

    if(tagName === 'BUTTON' && innerText === '+' && input.value != 0){
        if(!isNaN(lastChar)){
            let removeLast = [];
            let mappedNum;

            input.value += innerText;
            number = input.value.split('+');
            removeLast = number.pop();
            mappedNum = number.map((num) => {return Number(num)});
            console.log(addNum(mappedNum));
            span.textContent = `${addNum(mappedNum)}`;
            display.appendChild(span);
        }
    } else if (innerText === '÷' && input.value != 0){
        if(!isNaN(lastChar)){
            let removeLast = [];
            let mappedNum;

            input.value += innerText;
            number = input.value.split('÷')

            removeLast = number.pop();
            mappedNum = number.map((num) => {return Number(num)});
            console.log(divideNum(mappedNum));
            span.textContent = `${divideNum(mappedNum)}`;
            display.appendChild(span);
        }
    } else if (innerText === '×' && input.value != 0){
        if(!isNaN(lastChar)){
            input.value += innerText;
            number = input.value.split('×');
        }
    } else if (innerText === '−' && input.value != 0){
        if(!isNaN(lastChar)){
            input.value += innerText;
            number = input.value.split('−');
        }
    } else if (innerText === '.' && input.value != 0){
        if(!isNaN(lastChar)){
            input.value += innerText;
        }
    }
})

