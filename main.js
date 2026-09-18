const display = document.querySelector(".display");

function appendToDisplay(input) {
     display.value += input;
};

function clearDisplay(){
     display.value = '';
};

function calculate(){
     try{
          display.value = eval(display.value);
     }
     catch(error){
          display.value = 'ERROR!!';
     }
     display.value = eval(display.value);
};

function deletelast() {
     display.value = display.value.slice (0 , -1);
}


const history = document.querySelector('.history');

function addToHistory (expression , result) {
     const item =
document.createElement('p');

     item.textContent = expression + ' = ' + result
     history.appendChild(item);

     if (history.children.length > 3) {
        history.removeChild(history.children[1]);
    }

}

function calculate() {
     try {
          const expression = display.value;
          const result = eval(expression);
          display.value = result;
          addToHistory(expression , result);
     }
     catch {
          display.value = 'ERROR!!'
     }
}
