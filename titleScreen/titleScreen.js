var button1 = document.getElementById("b1");
var button2 = document.getElementById("b2");
var button3 = document.getElementById("b3");
var buttons = document.getElementsByClassName("buttons");
var ballButton = document.getElementById("ballButton");
var ball1 = document.getElementById("pokeball1");
var ball2 = document.getElementById("pokeball2");

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
		elem.style.marginLeft = '-4rem';
		elem.style.transition = 'margin 2s ease';
		setTimeout(function() {
			elem.classList.add('overlay');
		}, 500);		
	}

	setTimeout(function() {
		if (window.innerWidth < 786) {
			button1.style.marginTop = '285px';
		}else {

			button1.style.marginTop = '250px';
		}
	}, 1);

	setTimeout(function(){
		button1.classList.add("overlay");
		button2.classList.add("overlay");
		button3.classList.add("overlay");
	}, 3000);
}//opens the pokeball to reveal the title screen

function settings() {
	window.location.href = "../settings/settings.html";
}

function startGame() {
	window.location.href = "../fight/fight.html";
}