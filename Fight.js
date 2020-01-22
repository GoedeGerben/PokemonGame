var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");
var buttons = document.getElementsByClassName("buttons");
var ballButton = document.getElementById("ballButton");
var ball1 = document.getElementById("pokeball1");
var ball2 = document.getElementById("pokeball2");

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
	ballButton.innerHTML = "";
	ballButton.setAttribute("onclick", "openTitle()");
	ballButton.style.width = '20rem';
	ballButton.style.height = '20rem';

	button1.innerHTML = "";
	button1.style.display = 'none';
	button2.innerHTML = "";
	button2.style.display = 'none';
	button3.innerHTML = "";
	button3.style.display = 'none';
} 
pokeBall()

function openTitle() {
	ballButton.remove();

	ball2.style.marginTop = "350px";
	button1.innerHTML = "Start";
	button1.setAttribute("onclick", "startGame()");
	button2.innerHTML = "settings";
	button2.setAttribute("onclick", "settings()");
	button3.innerHTML = "credits";
	button3.setAttribute("onclick", "alert('i made this')");

	for(var elem of buttons){
		elem.style.display = 'inline-block';
		elem.style.left = '50%';
		elem.style.marginLeft = '-3rem';
		elem.style.transition = 'margin 2s ease';
		setTimeout(function() {
			elem.classList.add('overlay');
		}, 500);		
	}

	
	setTimeout(function() {
		button1.style.marginTop = '270px';//help change when screen is small.
	}, 1);

	setTimeout(function(){
		button1.classList.add("overlay");
		button2.classList.add("overlay");
		button3.classList.add("overlay");
	}, 1500);

	for(var elem of buttons){
		
	}

}//opens the pokeball to reveal the title screen

function settings() {

}






function startGame() {

}