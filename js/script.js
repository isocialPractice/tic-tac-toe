////////////////////////////////////////////////////////////////////////
// ****************************************************************** //   
// ************************ TIC TAC TOE GAME ************************ //   
// ****************************************************************** //   
////////////////////////////////////////////////////////////////////////

/***********************************************************************\
 *   Exercise in utilizing JS conditional logic.                       *                                  
 *   Game derived from:                                                *
 *    https://www.thinkful.com/bootcamp/atlanta-coding-bootcamp/       *
 *                                                                     * 
 *   While enrolled in:                                                *         
 *    https://www.thinkful.com/                                        *
\**********************************************************************/

//For Storage
document.getElementById('gameStorage').style.display = 'none';
document.getElementById('storeStart').style.display = 'none';

var cellOne, cellTwo, cellThree, cellFour, 
    cellFive, cellSix, cellSeven, 
    cellEight, cellNine;
    
cellOne = document.getElementById("a1");
cellTwo = document.getElementById("a2");
cellThree = document.getElementById("a3");
cellFour = document.getElementById("a4");
cellFive = document.getElementById("a5");
cellSix = document.getElementById("a6");
cellSeven = document.getElementById("a7");
cellEight = document.getElementById("a8");
cellNine = document.getElementById("a9");

//Globals
//Storage and starters
var starter, theStarter, storeStart;
var storageBox = document.getElementById('gameStorage');
var storage = storageBox.getElementsByTagName("h4");
starter = document.getElementById("storeStart");
starter.innerHTML = "x";
theStarter = starter.innerHTML;
storeStart = document.getElementById("storeStart");
storeStart.innerHTML = "";
// Player value/image, switch turn, and check current move
var x, o;
x = 
"<img style='width:80%; padding: 5px' src='img/IMG_X.png'>";
o = 
"<img style='width:80%; padding: 5px' src='img/IMG_0.png'>";

var turn;
var Turn;
var checkMove;
var moves;
var One, Two;
One = 0;
Two = 0;

// Check win, tie, and cells. Keep score.
var xScores, oScores;
xScores = 0;	
oScores = 0;
var list, list2;
var fullList = [1,2,3,4,5,6,7,8,9];
list = [];
list2 = [];
var squares = document.getElementsByClassName("gameBox");

//start of game variables and adds click Event Listener
function Start() {
 addClick();
 start();
}

//Clears Storage and squares
function clear() {
	for (var i = 0; i < squares.length; i++) {
  squares[i].innerHTML = "";
		storage[i].innerHTML = "";
  }	
}

//Clears list and list2
function cleared() {
	list = [];
	list2 = [];
}

//Pick starter
function startAs(startMove) {
	var sMove;
	if (startMove == "varX" && (
  cellOne.innerHTML == "" && 
  cellTwo.innerHTML == "" && 
  cellThree.innerHTML == "" &&
		cellFour.innerHTML == "" && 
  cellFive.innerHTML == "" && 
  cellSix.innerHTML == "" &&
		cellSeven.innerHTML == "" && 
  cellEight.innerHTML == "" && 
  cellNine.innerHTML == "") && 
  (
  storeStart.innerHTML == "" || 
  storeStart.innerHTML == "theOStarter")) 
	{
		sMove = "x";
		starter.innerHTML = sMove;
		theStarter = starter.innerHTML;
		
  alert(
  theStarter.toUpperCase() + 
  " will start now!");
  
		storeStart.innerHTML = "theXStarter";
		start();
	}
	else if (startMove == "varO" &&
		(cellOne.innerHTML == "" && 
  cellTwo.innerHTML == "" && 
  cellThree.innerHTML == "" &&
		cellFour.innerHTML == "" && 
  cellFive.innerHTML == "" && 
  cellSix.innerHTML == "" &&
		cellSeven.innerHTML == "" && 
  cellEight.innerHTML == "" && 
  cellNine.innerHTML == "") && 
  (
   storeStart.innerHTML == "" || 
   storeStart.innerHTML == "theXStarter")) 
	{
		sMove = "o";
		starter.innerHTML = sMove;
		theStarter = starter.innerHTML;
		
  alert(theStarter.toUpperCase() + 
  " will start now!");
  
		storeStart.innerHTML = "theOStarter";
		start();
	}
}

//sets inital variables
function start() {
	turn = theStarter;
	Turn = x;	
    moves = 0;	    
    clear();
	cleared();	
}

//Annouces game has started
function play() {	
	if (turn == "x" || turn == "o") {
		alert("Play Tic-Tac-Toe");		
	}
}

//make storage list to check for a win
function clicked(theX) {
	var cell1,cell2,cell3,cell4,
     cell5,cell6,cell7,cell8,cell9;	
     
	var one = 0;
	var two = 0;
	var X;
 
	if (theX == "1") {
		cell1 = theX;			
	} else if (theX == "2") {
		cell2 = theX;		
	} else if (theX == "3") {
		cell3 = theX;
	} else if (theX == "4") {
		cell4 = theX;
	} else if (theX == "5") {
		cell5 = theX;
	} else if (theX == "6") {
		cell6 = theX;
	} else if (theX == "7") {
		cell7 = theX;
	} else if (theX == "8") {
		cell8 = theX;
	} else if (theX == "9") {
		cell9 = theX;
	}
	one++;
	One++;
	X = theX;
	if (One > Two && one > two && 
    (
     cell1 == theX || cell2 == theX || 
     cell3 == theX || cell4 == theX || 
     cell5 == theX || cell6 == theX || 
     cell7 == theX || cell8 == theX || 
     cell9 == theX
    ) &&
		turn == turn)
	{
		two++;					
		Two++;
  
		if (X == "1" && cellOne.innerHTML == "") {				
			cellOne.innerHTML = turn;								
		} 
		else if (X == "2" && cellTwo.innerHTML == "") {					
			cellTwo.innerHTML = turn;
		} 
		else if (X == "3" && cellThree.innerHTML == "") {				
			cellThree.innerHTML = turn;
		} 
		else if (X == "4" && cellFour.innerHTML == "") {				
			cellFour.innerHTML = turn;				
		} 
		else if (X == "5" && cellFive.innerHTML == "") {				
			cellFive.innerHTML = turn;
		} 
		else if (X == "6" && cellSix.innerHTML == "") {				
			cellSix.innerHTML = turn;
		} 
		else if (X == "7" && cellSeven.innerHTML == "") {				
			cellSeven.innerHTML = turn;
		} 
		else if (X == "8" && cellEight.innerHTML == "") {				
			cellEight.innerHTML = turn;
		} 
		else if (X == "9" && cellNine.innerHTML == "") {				
			cellNine.innerHTML = turn;
		}
	} 
	else if (
  one == Two && (
  cell1 == theX || cell2 == theX ||
  cell3 == theX || cell4 == theX || 
  cell5 == theX || cell6 == theX || 
  cell7 == theX || cell8 == theX || 
  cell9 == theX) && 
		turn == turn)
	{
		Two = 0;
		One = 0;
		if (X == "1" && cellOne.innerHTML == "") {				
			cellOne.innerHTML = turn;								
		} 
		else if (X == "2" && cellTwo.innerHTML == "") {					
			cellTwo.innerHTML = turn;
		} 
		else if (X == "3" && cellThree.innerHTML == "") {				
			cellThree.innerHTML = turn;
		} 
		else if (X == "4" && cellFour.innerHTML == "") {				
			cellFour.innerHTML = turn;				
		} 
		else if (X == "5" && cellFive.innerHTML == "") {				
			cellFive.innerHTML = turn;
		} 
		else if (X == "6" && cellSix.innerHTML == "") {				
			cellSix.innerHTML = turn;
		} 
		else if (X == "7" && cellSeven.innerHTML == "") {				
			cellSeven.innerHTML = turn;
		} 
		else if (X == "8" && cellEight.innerHTML == "") {				
			cellEight.innerHTML = turn;
		} 
		else if (X == "9" && cellNine.innerHTML == "") {				
			cellNine.innerHTML = turn;
		}
	}	
}

//Alternate Turn
function alternate_turn() {			
	if (turn == "x") {
  turn = "o";
		Turn = o;
		moves = moves + 1;		
  } 
 else if (turn == "o") {
		turn = "x";
		Turn = x;
		moves = moves + 1;		
	}
}

//Do not alternate turn
function noAlternate() {
	if (turn == "o") {
		turn = "o";
		Turn = o;
		moves = moves + 0;		
	} else if (turn == "x") {
		turn = "x";
		Turn = x;
		moves = moves + 0;		
	}
}

//Inserts current turn into cell and checks for win, checks for tie.
//Also checks for wrong move, and alternates turn
function addClick() {
 for (var i = 0; i < squares.length; i++) {		
  squares[i].addEventListener("click", 
  function() {
   var forList = parseInt(this.getAttribute('id'));						
   if (turn == "o") {
    Turn = o;
   } else if (turn == "x") {				
    Turn = x;
   }			
   if (!(
   list.includes(forList) ||
   list2.includes(forList))) {								
    checkMove = 1;
    //moves = moves;				
    squares.innerHTML = Turn;					
    this.innerHTML = Turn;				
    list.push(forList);						
   }             
   else if (list.includes(forList) || list2.includes(forList)) {	
    checkMove = 0;						
   } else if (list.includes(forList) || list2.includes(forList)) {	
    checkMove = 0;					
   }						

// Win, Tie, wrong Move, or alternate turn
// Win - every possible win. Never doing chess exercise.
   if (( 
     cellOne.innerHTML == "x" && 
     cellTwo.innerHTML == "x" && 
     cellThree.innerHTML == "x") || 
     (
     cellOne.innerHTML == "o" &&
     cellTwo.innerHTML == "o" && 
     cellThree.innerHTML == "o") || 
     (
     cellFour.innerHTML == "x" && 
     cellFive.innerHTML == "x" && 
     cellSix.innerHTML == "x") || 
     (
     cellFour.innerHTML == "o" &&
     cellFive.innerHTML == "o" && 
     cellSix.innerHTML == "o") ||
     (
     cellSeven.innerHTML == "x" && 
     cellEight.innerHTML == "x" && 
     cellNine.innerHTML == "x") || 
     (
     cellSeven.innerHTML == "o" &&
     cellEight.innerHTML == "o" && 
     cellNine.innerHTML == "o") ||
     (
     cellOne.innerHTML == "x" && 
     cellFour.innerHTML == "x" && 
     cellSeven.innerHTML == "x") || 
     (
     cellOne.innerHTML == "o" &&
     cellFour.innerHTML == "o" && 
     cellSeven.innerHTML == "o") ||
     (
     cellTwo.innerHTML == "x" && 
     cellFive.innerHTML == "x" && 
     cellEight.innerHTML == "x") || 
     (
     cellTwo.innerHTML == "o" &&
     cellFive.innerHTML == "o" && 
     cellEight.innerHTML == "o") ||
     (
     cellThree.innerHTML == "x" && 
     cellSix.innerHTML == "x" && 
     cellNine.innerHTML == "x") || 
     (
     cellThree.innerHTML == "o" &&
     cellSix.innerHTML == "o" && 
     cellNine.innerHTML == "o") ||
     (
     cellOne.innerHTML == "x" && 
     cellFive.innerHTML == "x" && 
     cellNine.innerHTML == "x") || 
     (
     cellOne.innerHTML == "o" &&
     cellFive.innerHTML == "o" && 
     cellNine.innerHTML == "o") ||
     (
     cellThree.innerHTML == "x" && 
     cellFive.innerHTML == "x" && 
     cellSeven.innerHTML == "x") || 
     (
     cellThree.innerHTML == "o" &&
     cellFive.innerHTML == "o" && 
     cellSeven.innerHTML == "o"
     ))			
   {
    alert(turn + " wins!");	
    if (turn == "x") {
     xScores++;
     document.getElementById('xScore').innerHTML = xScores;
    } else if (turn == "o") {
     oScores++;
     document.getElementById('oScore').innerHTML = oScores;
    }
    storeStart.innerHTML = "";
    start();				
    play();
   }
   
 // Tie
   else if (
    (
    moves >= 8 && checkMove >= 1 && 
    (list.length >= 5 || list2.length >= 5)
    ) || (
    cellOne.innerHTML != "" && cellTwo.innerHTML != "" && 
    cellThree.innerHTML !="" && cellFour.innerHTML != "" && 
    cellFive.innerHTML != "" && cellSix.innerHTML != "" && 
    cellSeven.innerHTML != "" && cellEight.innerHTML != "" && 
    cellNine.innerHTML != ""
    )) 
   {
    alert("Tie game!");
    storeStart.innerHTML = "";
    start();
    play();
   }
 // Wrong Move
   else if (checkMove == 0) {
    noAlternate();
   }
 // Alternate Turn	
   else if (checkMove == 1) {				
    alternate_turn();					
   }							
  });
 }
}

// Start Start Start
Start();
