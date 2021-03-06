var ename = "pikachu";
var elvl = 10;//enemy's level (just for show)
var maxEHP = 100;//enemy's max health
var EHP = 100; //enemy's current health

var name = "pikachu";//this lets the player choose a custom name in the settings.
var lvl = 10;//players level (just for show)
var maxHP = 100;//players max health
var HP = 100; //players current health

var battleOpen = false; //the state of the battle menu
var bagOpen = false;
var pokemonOpen = false;

//var atck1 = [name, dmg, effect, life gian, max pp, current pp (how many times an attack can be used)]

var atck1 = ["tackle", 10, 0, 0, 10, 10]; //player attack info
var atck2 = ["tackle", 10, 0, 0, 10, 10];
var atck3 = ["tackle", 10, 0, 0, 10, 10];
var atck4 = ["tackle", 10, 0, 0, 10, 10];

var eatck1 = ["tackle", 10, 0, 0, 10, 10]; //enemy attack info
var eatck2 = ["tackle", 10, 0, 0, 10, 10]; 
var eatck3 = ["tackle", 10, 0, 0, 10, 10]; 
var eatck4 = ["tackle", 10, 0, 0, 10, 10];

var button1 = document.getElementById("op1");
var button2 = document.getElementById("op2");
var button3 = document.getElementById("op3");
var button4 = document.getElementById("op4");

document.getElementById("ename").innerHTML = ename;
document.getElementById("elvl").innerHTML = elvl;

document.getElementById("name").innerHTML = name;
document.getElementById("lvl").innerHTML = lvl;
document.getElementById("hp").innerHTML = HP + " / " + maxHP;

document.getElementById("text").innerHTML ="What will " + name + " do?";

function battleButtons() {

	battleOpen = true;

	button1.innerHTML = atck1[0];
	button1.setAttribute("onclick" , "options(atck1)");
	
	button2.innerHTML = atck2[0];
	button2.setAttribute("onclick" , "options(atck2)");
	
	button3.innerHTML = atck3[0];
	button3.setAttribute("onclick" , "options(atck3)");

	button4.innerHTML = atck4[0];
	button4.setAttribute("onclick" , "options(atck4)");

	//make a button that makes you go back to the option screen
}//makes you look at your attacks

document.addEventListener("keypress", function(e) { 	
if (battleOpen == true || bagOpen == true || pokemonOpen == true &&  e.keyCode == "13") {
	optionButtons();
}
});//if the enter key is pressed while the player is in a menu they get sent back to the options

function options() {
	optionButtons()
	atck1[5] = atck1[5] - 1;

	if (EHP - atck1[1] >= 0) {
		EHP = EHP - atck1[1];
	}else{
		EHP = 0;
	}
	
	if ((HP + atck1[3]) <= maxHP) {
		HP = HP + atck1[3];
	}else {
		HP = maxHP;
	}
	console.log(EHP);
	console.log(HP);

	document.getElementById("ehpBar").style.width = EHP/maxEHP*document.getElementById("ehpBarGrey").clientWidth + "px"; //adjusts the hpbar
	document.getElementById("hpBar").style.width = HP/maxHP*document.getElementById("hpBarGrey").clientWidth + "px"; //adjusts the hpbar
	//make max uses
}//Uses your attack




function bagButtons() {
	//heal item 1
	//heal item 2
	//heal item 3
	//heal item 4
	//back
}//makes you look inside your bag

function pokemonButtons() {
	//pokemon 1
	//pokemon 2
	//pokemon 3
	//pokemon 4
	//back
}//need to make an array to contain pokemon data

function optionButtons() {
	button1.innerHTML = "FIGHT";
	button1.setAttribute("onclick" , "battleButtons()");
	
	button2.innerHTML = "BAG";
	button2.setAttribute("onclick" , "bagButtons()");
	
	button3.innerHTML = "POKEMON";
	button3.setAttribute("onclick" , "pokemonButtons()");

	button4.innerHTML = "RUN";
	button4.setAttribute("onclick" , "titleScreen()");

}//makes you go back to the menu where you can choose what you want to do

function titleScreen() {
	window.location.href = "../titleScreen/titleScreen.html";
}//brings you back to the title screen