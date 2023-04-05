class Exchange{
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.xhr = new XMLHttpRequest();
        this.amount = null;
        this.url = "https://api.exchangerate.host/latest?base="

    }

    excahnge(){
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency )
            .then(response => response.json())
            .then(data =>{
                const parity = data["rates"][this.secondCurrency];

                const amount2 = Number(this.amount);

                const total = amount2 * parity ;

                resolve(total);
            }
                

                
                ).catch(err => reject(err))
                
        })

    }
    changeAmount(newAmount){

        this.amount = newAmount;
    }
    changeFirstCurrency(newFirstCurrency){

        this.firstCurrency = newFirstCurrency
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;

    }
}