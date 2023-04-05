const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const exchange = new Exchange("USD","TRY");
const ui = new UI(firstSelect,secondSelect);

eventListeners();


function eventListeners(){

    amountElement.addEventListener("input",exchangeCurrency);

    
    firstSelect.onchange = function(){
       exchange.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
       ui.changeFirst();

        
    }

    secondSelect.onchange = function(){
        exchange.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
        ui.changeSecond();

    }


}

function exchangeCurrency(){

    exchange.changeAmount(amountElement.value)
    exchange.excahnge()
    .then(result => ui.changeResult(result))
    .catch(err => console.log(err))


    
}