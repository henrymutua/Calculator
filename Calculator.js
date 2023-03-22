
const add = (...args) =>{
let total = 0;
for(const arg of args){
    total +=arg;
}
return total;

}

const subtract = (a,b, ...args) => {
    let difference = 0;
    for(const arg of args){
        difference-=arg;
    }
    return difference;
}

const multiply = (a, b, ...args) =>{
    let product = a*b;
    for (const arg of args){
        product*=arg;
    }
    return product;
}

const divide = (a,b, ...args) => {
    let divisionresult = a/b;
    for (const arg of args){
        divisionresult/=arg;
    }
    return divisionresult;
}

let displayValue = 0;
let displayArea = document.getElementByClassName('screen');
displayArea.innerHTML += displayValue;

const button = document.querySelectorAll('numbers');
button.forEach(numbers => {
    addEventListener('click', (e)=>{
    updateDisplay(e);
})
})

let updateDisplay = (e) => {
    displayValue = e.target.id;
    displayArea.innerHTML = displayValue;
}

