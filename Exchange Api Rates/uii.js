function UII(){
   this.firstParameter = document.getElementById("outputFirst");
   this.secondParameter = document.getElementById("outputSecond");
   this.resultParameter = document.getElementById("outputResult");
    
}
UII.prototype.changeFirst = function(newFirst){
   this.firstParameter.textContent = newFirst;
    
}

UII.prototype.changeSecond = function(newSecond){
    this.secondParameter.textContent = newSecond;

}

UII.prototype.changeResult = function(newResult){
    this.resultParameter.value = newResult;

}

