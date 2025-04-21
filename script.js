const input = document.querySelector('.input-field');
const buttons =  document.querySelector('table');
let number = [];

buttons.addEventListener('click', (e) => {
    let attribute = e.target.getAttribute('class');
    if(e.target.tagName === 'BUTTON' && attribute === 'number'){
        input.value += Number(e.target.innerText);
    }
});


function addNum(...args){
    let result = args.reduce((sumTotal, current) => {
        return sumTotal += current;
    })
    return result;
}

function subtractNum(...args){
    let result = args.reduce((total, current) => {
        return total -= current;
    })
    return result;
}

function multiplyNum(...args){
    let result = args.reduce((product, current) => {
        return product *= current;
    })
    return result;
}

function divideNum(...args){
    let result = args.reduce((quotient, current) => {
        return quotient /= current;
    })
    return result;
}
