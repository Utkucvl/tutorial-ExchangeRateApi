

function Exchangee(firstSelect,secondSelect,amount){

    
    this.firstSelect = firstSelect;
    this.secondSelect=secondSelect;
    this.amount=amount;
    this.apikey = `https://api.exchangerate.host/latest?base=`;
    this.xhr = new XMLHttpRequest();

}

Exchangee.prototype.transleteAll = function(callback){
    const endpoint = `${this.apikey}${this.firstSelect}`;
    this.xhr.open("GET",endpoint);

    this.xhr.onload = () => {

        if(this.xhr.status ===200){

            const amount3 = Number(this.amount);

            const  json = JSON.parse(this.xhr.responseText);
            
            const jsonn = json["rates"][this.secondSelect];

            const total = jsonn * amount3;

            
            

            callback(null,total);
        
        }

        else{
            callback("Bir hata var " , null);
        }


    }

    this.xhr.send();
}
Exchangee.prototype.changeAllParameters = function(newAmount , newFirstSelect, newSecondSelect){
    this.amount = newAmount;
    this.firstSelect = newFirstSelect;
    this.secondSelect = newSecondSelect;

}