//console.log(document);
//var h1 = document.getElementsByTagName('h1')[0];
//console.log(h1);
//1.innerText = "Sain uu";
//h1.style.color="red";
//var h12 = document.getElementsByTagName('h1')[1];
//h12.innerText="Hey";
//h12.style.backgroundColor="aqua"
var imputAge = document.getElementsByTagName('imput')[0];
console.log(imputAge)
var result = document.getElementsByTagName('p')[0];
console.log(result)
var currentYear=2023
function convert() {
    if (inputAge.value > 110) {
        result.innerText = " Naadah chin hudlaa. ";
        result.style.color = "red";
    } else if(inputAge.value < 0){
        result.innerText = " Naadah chin hudlaa. ";
        result.style.color = "red";
    } else if(inputAge.value == ""){
        alert("Hooson utga baina.");
    } else {
        birthYear = currentYear - inputAge.value;
        result.innerText = "Tursun on : "+ birthYear;
    }
}