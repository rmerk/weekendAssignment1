var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

//created 5 new claims, via the claim constructor function.
var claim6 = new claim("Chip Swanson","Emergency",2000);
var claim7 = new claim("Dave Skeels","Optical",75);
var claim8 = new claim("Emily Watson","Specialist",200);
var claim9 = new claim("Jessica Nelson","Emergency",100000);
var claim10 = new claim("Paul Douglas","Primary Care",200);

var initialList = [claim1, claim2, claim3, claim4, claim5, claim6, claim7,
									 claim8, claim9, claim10];

var totalPayedOut = 0;

compileValues(initialList); //runs the program
console.log("Total amount paid out, $" + totalPayedOut); //consoles the total value.
$('ul').append('<li>Total amount paid out, <strong>$' + totalPayedOut + '</strong></li>');


function compileValues(initialList){
	for(var iter = 0; iter < initialList.length; iter++){
		console.log("Paid out $" + amountCovered(initialList[iter]) + " for " + initialList[iter].patientName);
		totalPayedOut += amountCovered(initialList[iter]); // this calculates the total of payouts.
		$('ul').append('<li>' + "Paid out $" + amountCovered(initialList[iter]) + " for " + initialList[iter].patientName + '</li>');
	}
	return totalPayedOut;
}//end compileValues()

//constructor function for claims
function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function percentCovered(initialList){

var checkVisitType = initialList.visitType; //variable for reusable code
var percent; //used to store return value

		if(checkVisitType == "Optical"){
			percent = 0;
		}else if(checkVisitType == "Specialist"){
			percent = .10;
		}else if(checkVisitType == "Emergency"){
		  percent = 1;
		}else if(checkVisitType == "Primary Care"){
			percent = .50;
		}
	return percent;
}//end percentCovered

//function to determine amount covered
function amountCovered(initialList){

  var amountPaid = 0;

	amountPaid = initialList.visitCost * percentCovered(initialList);

	return amountPaid;
}//end amountCovered
