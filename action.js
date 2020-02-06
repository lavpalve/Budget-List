
/* 
	Note: document.querySelector use for both class(.) and id(#).
	Change Html Value using js code its not apply inline css
*/

var DOMString = {            // To make Simple class to varible
	inputType: '.add__type',
	inputDescription: '.add__description',
	inputValue: '.add__value',
	balance: '.balance',
	income: '.income_balance',
	expence_balance: '.expence_balance',
	expence_percent: '.expence_percent'
};

const init = () => {
	document.querySelector(DOMString.balance).textContent = 0;   /* DOMString.balance  === '.balance' */
	document.getElementById('income_balance').textContent = 0;
	document.querySelector('.expence_balance').textContent = 0;
	document.querySelector(DOMString.expence_percent).textContent = '%'; 

	
}

	init();

const reset = () => {
	init();
	let index = 0;
	//console.log("index");
	let element = document.getElementsByTagName('p');
	//console.log('ele-'+element);
	for(index = element.length-1;index >= 0;index--){
		element[index].parentNode.removeChild(element[index]);
	}	

 }

var x = Date();
document.querySelector("#month").textContent = x.substring(4,15);

var totIncome = 0;
var totExpenses = 0;
var remBalance = 0;
var remPctBalance = 0;

const addItem = () => {
	let inputDec = document.querySelector(DOMString.inputDescription).value;
	let inputType = document.querySelector(DOMString.inputType).value;
	let inputVal = document.querySelector(DOMString.inputValue).value;
	//console.log(inputType);
	if(inputDec == "" || inputVal == ""){
		alert("Please enter all fields");
	}else{
		if(inputType === 'inc'){
			var newItem = document.createElement("p");
			newItem.innerHTML = inputDec+" - "+inputVal+"rs";
			document.querySelector('.income_list').appendChild(newItem);
			totIncome = parseInt(totIncome) + parseInt(inputVal);
			console.log(totIncome);
			document.querySelector(DOMString.income).textContent = totIncome+"rs";
			remPctBalance = (totExpenses/totIncome)*100;
			document.querySelector(DOMString.expence_percent).textContent = Math.round(remPctBalance,1)+"%";
			console.log(remPctBalance);
		}else{
			var newItem = document.createElement("p");
			newItem.innerHTML = inputDec+" - "+inputVal+"rs";
			document.querySelector('.expenses_list').appendChild(newItem);
			totExpenses = parseInt(totExpenses) + parseInt(inputVal);
			console.log(totExpenses);
			document.querySelector(DOMString.expence_balance).textContent = totExpenses+"rs";
			remPctBalance = (totExpenses/totIncome)*100;
			document.querySelector(DOMString.expence_percent).textContent = Math.round(remPctBalance,1)+"%";
			console.log(remPctBalance);
		}
		remBalance = totIncome - totExpenses;
		if(remBalance < 0){
			document.querySelector(DOMString.balance).textContent = remBalance+"rs";
			document.getElementById("balance").style.color = "red";
		}else{
			document.querySelector(DOMString.balance).textContent = "+"+remBalance+" rs";
			document.getElementById("balance").style.color = "green";
		}
	}
	
}
