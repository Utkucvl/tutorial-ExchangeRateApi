const amountPlace = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const exchangees = new Exchangee(firstSelect.options[firstSelect.selectedIndex].textContent,secondSelect.options[secondSelect.selectedIndex].textContent,amountPlace.value);
const uii = new UII();
eventListeners();


function eventListeners(){
    amountPlace.addEventListener("input",transleteMoney);
    firstSelect.onchange = function(){
        uii.changeFirst(firstSelect.options[firstSelect.selectedIndex].textContent);

    }
    secondSelect.onchange = function(){
        uii.changeSecond(secondSelect.options[secondSelect.selectedIndex].textContent);

    }
}

function transleteMoney(e){
    exchangees.changeAllParameters(amountPlace.value,firstSelect.options[firstSelect.selectedIndex].textContent,secondSelect.options[secondSelect.selectedIndex].textContent);
    exchangees.transleteAll(function(err,response){

        if(err === null){
             uii.changeResult(response);
            
          
        }
        else{
            console.log(err);
        }

    });

    e.preventDefault();

}