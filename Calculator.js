
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

const operate = () => {
    let operate;
    if(buttonAdd)
    {
        operate = sum();
    }
    else if(buttonSubtract){operate = subtract();
    }
    else if(buttonMultiply){operate = multiply();} 
    else if (buttonDivide){operate = divide();}
    
}