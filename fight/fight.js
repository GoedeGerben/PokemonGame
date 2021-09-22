class Pokemon {
	constructor(name, energyType, hitpoints, health, attack1, attack2, attack3, attack4, weakness, resistance){
		this.name = name;
		this.energyType = energyType;
		this.hitpoints = hitpoints;
		this.health = hitpoints;
		this.attack1 = attack1;
		this.attack2 = attack2;
		this.attack3 = attack3;
		this.attack4 = attack4;
		this.weakness = weakness;
		this.resistance = resistance;
	}
	newhealth(dmg, type) {
		var dmgModifier = 1;
		if(type == this.weakness) {
			dmgModifier = 1.5;
		} else if(type == this.resistance) {
			dmgModifier = 0.5;
		}

		this.health = this.health - (dmg * dmgModifier);

		if(this.health >= 0){
			return this.health;
		} else {
			this.health = 0;
			return 0;
		}
	}
	getPopulation() {
	}
	getPopulationHealth() {
		
	}
}

class energy {
	constructor(name, weakness, resistance){
		this.name = name;
		this.weakness = weakness;
		this.resistance = resistance;
	}
}

class attack {
	constructor(name, energy, dmg){
		this.name = name;
		this.energy = energy;
		this.dmg = dmg;
	}
}

let lightning = new energy("lightning", "fire", "fighting")
let fire = new energy("fire", "water", "lightning")
let water = new energy("water", "fighting", "fire")
let fighting = new energy("fire", "lightning", "water")

let electricRing = new attack("electric ring", lightning, 20)
let pikaPunch = new attack("pika punch", fighting, 20)
let headButt = new attack("head butt", fighting, 20)
let flare = new attack("flare", fire, 20)

let pikachu = new Pokemon("bert", "lightning", 60, 60, electricRing, pikaPunch, "", "", fire, fighting)
let charmeleon = new Pokemon("geert", "fire", 60, 60, headButt, flare, "", "", water, lightning)

var ename = "pikachu";
var elvl = 10;//enemy's level (just for show)
var maxEHP = 300;//enemy's max health
var EHP = 200; //enemy's current health

var pokemon = [
["pikachu", 10, 300, 200], 
["charmander", 10, 300, 200] , 
["totodile", 10, 300, 300], 
["geodude", 10, 300, 300]
];

var name = pokemon[0][0];//this lets the player choose a custom name in the settings.
var lvl = pokemon[0][1];//players level (just for show)
var maxHP = pokemon[0][2];//players max health
var HP = pokemon[0][3]; //players current health

var bagOpen = false; //the state of the menu's

var currentPokemon = [pokemon[0][0], 0];

var item = ["potion", 20, "super potion", 50, "hyper potion", 200, "max potion", maxHP];

//var atck1 = [name, dmg, effect, life gian, max pp, current pp (how many times an attack can be used)]
var attacks = {
	atck1: ["tackle", 10, 0, 0, 10, 10],
	atck2: ["tackle", 10, 0, 0, 10, 10],
	atck3: ["tackle", 10, 0, 0, 10, 10],
	atck4: ["tickle", 100, 0, 0, 10, 10]
}

var eattacks = {
	atck1: ["tackle", 10, 0, 0, 10, 10],
	atck2: ["tackle", 10, 0, 0, 10, 10],
	atck3: ["tackle", 10, 0, 0, 10, 10],
	atck4: ["tickle", 100, 0, 0, 10, 10]
}

var button1 = document.getElementById("op1");
var button2 = document.getElementById("op2");
var button3 = document.getElementById("op3");
var button4 = document.getElementById("op4");

document.getElementById("ename").innerHTML = ename;
document.getElementById("elvl").innerHTML = elvl;
document.getElementById("ehpBar").style.width = EHP/maxEHP*document.getElementById("ehpBarGrey").clientWidth + "px"; //adjusts the hpbar

document.getElementById("name").innerHTML = name;
document.getElementById("lvl").innerHTML = lvl;
document.getElementById("hp").innerHTML = HP + " / " + maxHP;
document.getElementById("hpBar").style.width = HP/maxHP*document.getElementById("hpBarGrey").clientWidth + "px"; //adjusts the hpbar

document.getElementById("text").innerHTML = "What will " + name + " do?";

function battleButtons() {
	bagOpen = true;

	button1.innerHTML = attacks.atck1[0];
	button1.setAttribute("onclick" , "options(attacks.atck1)");
	
	button2.innerHTML = attacks.atck2[0];
	button2.setAttribute("onclick" , "options(attacks.atck2)");
	
	button3.innerHTML = attacks.atck3[0];
	button3.setAttribute("onclick" , "options(attacks.atck3)");

	button4.innerHTML = attacks.atck4[0];
	button4.setAttribute("onclick" , "options(attacks.atck4)");

	document.getElementById("text").innerHTML = "What attack will " + name + " use?"
}//makes you look at your attacks

document.addEventListener("keypress", function(e) { 	
if (bagOpen == true &&  e.keyCode == "13") {
	optionButtons();
}
});//if the enter key is pressed while the player is in a menu they get sent back to the options

function options() {
	if (arguments[0][5] > 0) {//max uses
		arguments[0][5] = arguments[0][5] - 1;

		if (EHP - arguments[0][1] > 0) {
			EHP = EHP - arguments[0][1];
		}else{
			EHP = 0;
			document.getElementById("text").innerHTML = "" + ename + " has fainted!";
		}
		
		if ((HP + arguments[0][3]) <= maxHP) {
			HP = HP + arguments[0][3];
		}else {
			HP = maxHP;
		}
		button1.innerHTML = "";
		button1.removeAttribute("onclick");
		
		button2.innerHTML = "";
		button2.removeAttribute("onclick");
		
		button3.innerHTML = "";
		button3.removeAttribute("onclick");

		button4.innerHTML = "";
		button4.removeAttribute("onclick");

		document.getElementById("ehpBar").style.width = EHP/maxEHP*document.getElementById("ehpBarGrey").clientWidth + "px"; //adjusts the hpbar
		document.getElementById("hpBar").style.width = HP/maxHP*document.getElementById("hpBarGrey").clientWidth + "px"; //adjusts the hpbar
		document.getElementById("hp").innerHTML = HP + " / " + maxHP;
		document.getElementById("text").innerHTML = "" + name + " used " + arguments[0][0] + "";
		pokemon[currentPokemon[1]][3] = HP;
		setTimeout(enemyTurn, 2500);
	}else {
		document.getElementById("text").innerHTML = "You dont have any more uses left for this attack.";
	}

}//Uses your attack

function bagButtons() {
	bagOpen = true;

	button1.innerHTML = item[0];
	button1.setAttribute("onclick" , "use(1)");
	
	button2.innerHTML = item[2];
	button2.setAttribute("onclick" , "use(3)");
	
	button3.innerHTML = item[4];
	button3.setAttribute("onclick" , "use(5)");

	button4.innerHTML = item[6];
	button4.setAttribute("onclick" , "use(7)");

	document.getElementById("text").innerHTML = "What item will you use?"
}//makes you look inside your bag

function use() {
	if ((HP + item[arguments[0]]) <= maxHP) {
		HP = HP + item[arguments[0]];
	}else {
		HP = maxHP;
	}

	document.getElementById("hpBar").style.width = HP/maxHP*document.getElementById("hpBarGrey").clientWidth + "px"; //adjusts the hpbar
	document.getElementById("hp").innerHTML = HP + " / " + maxHP;
	pokemon[currentPokemon[1]][3] = HP;

	optionButtons();
}

function pokemonButtons() {
	bagOpen = true;
	button1.innerHTML = pokemon[0][0];
	button1.setAttribute("onclick" , "changePokemon(0)");
	
	button2.innerHTML = pokemon[1][0];
	button2.setAttribute("onclick" , "changePokemon(1)");
	
	button3.innerHTML = pokemon[2][0];
	button3.setAttribute("onclick" , "changePokemon(2)");

	button4.innerHTML = pokemon[3][0];
	button4.setAttribute("onclick" , "changePokemon(3)");

	document.getElementById("text").innerHTML = "What pokemon will you use?"
}//need to make an array to contain pokemon data

function changePokemon() {
	currentPokemon[0] = pokemon[arguments[0]];
	currentPokemon[1] = arguments[0];
	name = pokemon[arguments[0]][0];
	lvl = pokemon[arguments[0]][1];
	maxHP = pokemon[arguments[0]][2];
	HP = pokemon[arguments[0]][3];

	document.getElementById("hpBar").style.width = HP/maxHP*document.getElementById("hpBarGrey").clientWidth + "px"; //adjusts the hpbar
	document.getElementById("hp").innerHTML = HP + " / " + maxHP;
	document.getElementById("name").innerHTML = name;

	optionButtons();
}

function optionButtons() {
	bagOpen = false;
	button1.innerHTML = "FIGHT";
	button1.setAttribute("onclick" , "battleButtons()");
	
	button2.innerHTML = "BAG";
	button2.setAttribute("onclick" , "bagButtons()");
	
	button3.innerHTML = "POKEMON";
	button3.setAttribute("onclick" , "pokemonButtons()");

	button4.innerHTML = "RUN";
	button4.setAttribute("onclick" , "titleScreen()");

	document.getElementById("text").innerHTML = "What will " + name + " do?";
}//makes you go back to the menu where you can choose what you want to do

function titleScreen() {
	if (confirm("Are yo sure you want to go back to the menu? Your progress will NOT be saved.")) {
  		window.location.href = "../titleScreen/titleScreen.html";
	}
}//brings you back to the title screen

function enemyTurn() {
	var whatAttack = eattacks["atck" + Math.floor((Math.random() * 4) + 1)];

		if (HP - whatAttack[1] > 0) {
			HP = HP - whatAttack[1];
		}else{
			HP = 0;
			document.getElementById("text").innerHTML = "" + name + " has fainted!";
		}
		
		if ((EHP + whatAttack[3]) <= maxEHP) {
			EHP = EHP + whatAttack[3];
		}else {
			EHP = maxEHP;
		}

		document.getElementById("ehpBar").style.width = EHP/maxEHP*document.getElementById("ehpBarGrey").clientWidth + "px"; //adjusts the hpbar
		document.getElementById("hpBar").style.width = HP/maxHP*document.getElementById("hpBarGrey").clientWidth + "px"; //adjusts the hpbar
		document.getElementById("hp").innerHTML = HP + " / " + maxHP;
		document.getElementById("text").innerHTML = "The enemy " + ename + " used " + whatAttack[0] + "";
		pokemon[currentPokemon[1]][3] = HP;
		
	
	setTimeout(optionButtons, 2500);
}