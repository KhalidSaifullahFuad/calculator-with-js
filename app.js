const expressionDisplay = document.querySelector('.expression');
const resultDisplay = document.querySelector('.result');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => btn.addEventListener("click", (e) => {
    const btnClass = e.target.classList;
    
    if(btnClass.contains('number')){
        resultDisplay.innerHTML += this.innerHTML;
        expressionDisplay.innerHTML += this.innerHTML;
    }else if(btnClass.contains('btn-clear')){
        resultDisplay.innerHTML = 0;
        expressionDisplay.innerHTML = 0;
    }else if(btnClass.contains('btn-backspace') && resultDisplay.innerHTML.length > 0){
        resultDisplay.innerHTML = (resultDisplay.innerHTML.length == 1)?0: resultDisplay.innerHTML.slice(0, -1);
        expressionDisplay.innerHTML = (expressionDisplay.innerHTML.length == 1)?0:expressionDisplay.innerHTML.slice(0, -1);
    }
}));

