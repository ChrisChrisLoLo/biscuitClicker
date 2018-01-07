//
console.log("hi");
//document.getElementById("title").innerHTML = "green";

var clicks = 0;
var MILLIS_PER_CALL = 50;
//default console message
var DEF_MESSAGE = "So far so good!";

function bisEntity(name,yeild,cost,costIncrease){
	this.name = name;
	this.amount = 0;
	this.yeild = yeild;
	this.cost = cost;
	this.costIncrease = costIncrease;
	this.buy = function(buyMultiplier) {
		if (this.cost>clicks){
			printToConsole("Insufficient clicks! Costs: "+Math.round(this.cost),2000);
			//console.log("insufficient clicks! Costs: "+this.cost);
			return;
		}
		else{
			//buys x amount of entities
			this.amount += buyMultiplier;
			clicks -= this.cost;
			this.cost += this.cost*this.costIncrease;
			console.log(this.cost);
			document.getElementById(this.name+"Num").innerHTML = this.amount;
			console.log(this.name+"Num");
			//document.getElementById("nim")
		}
	}
}

var bisEntityArray=[
	//costIncrease is a percentage, yield is per second
	//bisEntity(name,yeild,cost,costIncrease)
	new bisEntity("miner"   ,     1,   20,0.15),
	new bisEntity("printer" ,    10,  200,0.25),
	new bisEntity("rancher" ,    53,  500,0.20),
	new bisEntity("mafia"   ,   400, 2500,0.23),
	new bisEntity("market"  ,  1300, 8900,0.32),
	new bisEntity("database", 15232,    1,0.21)
	//120000
]

//To be migrated to buttonFunc.js----------------
function biscuitClick(){
	clicks++;
	console.log(clicks);
	update();
}

//updates all values. while this is "not efficient", the code is much cleaner and less prone to errors
function update(){
	document.getElementById("score").innerHTML = Math.round(clicks).toLocaleString();
	document.getElementById("bps").innerHTML = biscuitPerSec.toLocaleString();
	//.toLocaleString adds commas to the numbers
}

function correctId(entity,buttonID){
	return entity.name === "wantedID";
}


function buyEntity(buttonID){
	wantedEntity = bisEntityArray.find(function(entity){return entity.name === buttonID;});
	console.log(wantedEntity);
	wantedEntity.buy(1);
	calcBisPerSec();
	update();
} 
var biscuitPerSec = 0;
function calcBisPerSec(){
	biscuitPerSec = 0;
	for(var i=0;i<bisEntityArray.length;i++){
		biscuitPerSec += bisEntityArray[i].yeild*bisEntityArray[i].amount;
	}
	document.getElementById("bps").innerHTML = biscuitPerSec;
}


function addBisPerSec(){
	//clicks will be real number with decimals, but will be displayed as an integer
	//
	clicks += (biscuitPerSec*(MILLIS_PER_CALL/1000));
	update();
	//console.log(biscuitPerSec)
}
//use setInterval for miners
function printToConsole(string,duration){
	document.getElementById("console").innerHTML = string;
	//set message back after duration
	setTimeout(function(){document.getElementById("console").innerHTML = DEF_MESSAGE;},duration);
}

//add the biscuits per second to the total clicks every MILLIS_PER_CALL
setInterval(addBisPerSec,MILLIS_PER_CALL);


