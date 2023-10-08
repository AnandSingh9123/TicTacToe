var xScore = [];
var oScore = [];
var wincombo = [[2,7,6],[9,5,1],[4,3,8],[2,9,4],[7,5,3],[6,1,8],[2,5,8],[6,5,4]];
var currentPlayer = "X";

function changePlayer() {
    console.log(currentPlayer + " " + xScore + " " + oScore);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function score(val) {
   currentPlayer === "X"?xScore.push(val):oScore.push(val);
}

function scores(id,val){
	document.getElementById(id).value = currentPlayer;
	document.getElementById(id).disabled = true;
	document.getElementById("mode").disabled=true;
	document.getElementById("but").disabled=false;
    score(val);
	//console.log("countAutoPlay = "+countAutoPlay);
    checkWinner(currentPlayer);
	changePlayer();
	if(currentMode==="Computer"){
		
		if(!countAutoPlay) autoPlay();
		countAutoPlay=0;
	}
}

function checkWinner(currentPlayer) {
	
	if(currentPlayer==="X"){
		
		wincombo.every((arr) => {
			//console.log(arr)
		if(arr.every((ele) => {
			//console.log(ele)
			 return xScore.includes(ele);
		}) ){
			for (var node of document.getElementsByClassName("row")){
			for(var child of node.children){		
			child.disabled = true;				
			}
			document.getElementById("winMessage").innerHTML = currentPlayer +" is winner";

		}
	}
	//console.log(arr);
	return arr;
	} );
}
	if(currentPlayer==="O"){
		
		wincombo.every((arr) => {
		if(arr.every((ele) => {
			console.log(arr.every((ele) => {
		}));
			return oScore.includes(ele);
		})){
			for (var node of document.getElementsByClassName("row")){
			for(var child of node.children){		
			child.disabled = true;				
			}
			document.getElementById("winMessage").innerHTML = currentPlayer +" is winner";

		}
	} //console.log(arr); 
	return arr;
	});
}
}

function reStart(){
	location.reload();
}
var currentMode="Manual";
function Mode(){
	currentMode=currentMode==="Manual"?"Computer":"Manual";
	console.log(currentMode);
	document.getElementById("mode").innerText=currentMode;
}
var countAutoPlay=0;
function autoPlay(){
	var avaChild=[];
	for (var node of document.getElementsByClassName("row")){
		for(var child of node.children){
			//console.log(child;
			if(child.disabled !== true) {
			avaChild.push(child);
			//console.log(child.id)
			}			
		}		
}
countAutoPlay=1;
let x = Math.floor((Math.random() * avaChild.length));
console.log(x);
		console.log(avaChild[x].click());
		

}