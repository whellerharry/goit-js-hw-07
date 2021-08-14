const totalValue = document.querySelector('#value');
const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');
decrementValue.addEventListener('click', clickOnDecrement);
incrementValue.addEventListener('click', clickOnIncrement);
let counterValue = 0;
function clickOnDecrement(){
    counterValue -=1;
    totalValue.innerHTML=counterValue;
};
function clickOnIncrement(){
    counterValue +=1;
    totalValue.innerHTML=counterValue;
};