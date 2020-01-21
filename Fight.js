var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");

var HP = 0; //players health
var EHP = 0; //enemy's health

var atck1 = [0]; //player attack info
var atck2 = [0];
var atck3 = [0];
var atck4 = [0];

var eatck1 = [0]; //enemy attack info
var eatck2 = [0]; 
var eatck3 = [0]; 
var eatck4 = [0];

function pokeBall() {
	button1.innerHTML = "";
	button1.setAttribute("onclick", "openTitle()")
	button1.style.backgroundImage = 'url(images/pokeball.png';

	button2.innerHTML = "";
	button2.style.display = 'none'
	button3.innerHTML = "";
	button3.style.display = 'none'
} 
pokeBall()

function openTitle() {
	button1.innerHTML = "Start";
	button1.setAttribute("onclick", "startGame()")
	button1.style.backgroundImage = 'url(images/pokeball.png';
	button2.style.display = 'inline-block'
	button2.innerHTML = "settings";
	button2.setAttribute("onclick", "settings()")
	button3.style.display = 'inline-block'
	button3.innerHTML = "credits";
	button3.setAttribute("onclick", "alert('i made this')")

}//opens the pokeball to reveal the title screen

function settings() {

}






function startGame() {

}