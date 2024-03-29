// /**
//  * 
//  */
//  class Energy {
// 	constructor(name, weakness, resistance){
// 		this.name = name;
// 		this.weakness = weakness;
// 		this.resistance = resistance;
// 	}
// }
// /**
//  * 
//  */
// class Attack {
// 	//alle attacks hier defineren
// 	constructor(name, energy, dmg){
// 		this.name = name;
// 		this.energy = energy;
// 		this.dmg = dmg;
// 	}
// }

// class Pokemon {
// 	static pokeCount = 0;

// 	static lightning = new Energy("lightning", "fire", "fighting")	
// 	static fire = new Energy("fire", "water", "lightning")
// 	static fighting = new Energy("fighting", "lightning", "water")
// 	static water = new Energy("water", "fighting", "fire")

// 	static headButt = new Attack("head butt", Pokemon.fighting, 10)
// 	static flare = new Attack("flare", Pokemon.fire, 30)
// 	static electricRing = new Attack("electric ring", Pokemon.lightning, 50)
// 	static pikaPunch = new Attack("pika punch", Pokemon.fighting, 20)

// 	#name;
// 	#energyType;
// 	#hitpoints;
// 	#health;
// 	#attacks;
// 	#weakness;
// 	#resistance;
// 	#status;
// 	/**
// 	 * constructor that construct a new pokemon.
// 	 * 
// 	 * @param {string} name the cuntom of the pokemon.
// 	 * @param {object} energyType the energy type of the pokemon.
// 	 * @param {number} hitpoints the maximum hp of the pokemon.
// 	 * @param {number} health the current health of the pokemon.
// 	 * @param {Array} attacks the attacks the pokemon has .
// 	 * @param {object} weakness the energy type the pokemon is weak against.
// 	 * @param {object} resistance the energy type the pokemon is strong against.
// 	 */
// 	constructor(name, energyType, hitpoints, health, attacks, weakness, resistance, status){		
// 		this.#name = name;
// 		this.#energyType = energyType;
// 		this.#hitpoints = hitpoints;
// 		this.#health = hitpoints;
// 		this.#attacks = attacks;
// 		this.#weakness = weakness;
// 		this.#resistance = resistance;
// 		this.#status = status;
// 		Pokemon.pokeCount++
// 	}
// 	/**
// 	 * logs the death message, sets enemy health to 0, sets its status to dead, subtracts 1 from pokeCount
// 	 * @returns enemy health
// 	 */
// 	death() {
// 		console.log(this.#name + " has fainted... F")
// 		this.#health = 0;
// 		this.#status = "dead";
// 		Pokemon.pokeCount = Pokemon.pokeCount - 1;
// 		return this.#health;
// 	}
// 	/**
// 	 * sets the damage for the attack  to the correct ammount for resistances and weaknesses.
// 	 * checks if the enemy is dead.
// 	 * kills the enemy.
// 	 * @param {number} dmg the demage the attack does.
// 	 * @param {object} type the energy type of the attack.
// 	 * @param {object} enemy the enemy thats being attacked
// 	 * @returns the pokemons new health.
// 	 */
// 	#newhealth(dmg, type, enemy) {
// 		var dmgModifier = 1;
// 		if(type == this.#weakness) {
// 			dmgModifier = 1.5;
// 		} else if(type == this.#resistance) {
// 			dmgModifier = 0.5;
// 		}

// 		if(this.#health - (dmg * dmgModifier) >= 1){
// 			this.#health = this.#health - (dmg * dmgModifier);
// 			return this.#health;
// 		} else if (enemy.#status == "dead") {
// 			console.log("He's already dead!")
// 		}else {
// 			enemy.death();
// 		}
// 		//pikachu.attack(headButt, charmeleon)
// 	}
// 	/**
// 	 * checks if the attacking pokemon is alive and has the attack it wants to use.
// 	 * @param {object} atck the attack that is being used. 
// 	 * @param {object} enemy the enemy that is being attacked.
// 	 * @returns the new health of the attacked enemy.
// 	 */
// 	attack(atck, enemy) {
// 		if (this.#status == 'alive' && this.#attacks.includes(atck)) {
// 		return enemy.#newhealth(atck.dmg, atck.energy, enemy)
// 		} else {
// 			console.log("you can't attack when you're dead or with an attack you dont have")
// 		}
// 	}
// 	/**
// 	 * 
// 	 * @returns the amount of living pokemon.
// 	 */
// 	static getPopulation() {
// 		return Pokemon.pokeCount;
// 	}//Pokemon.getPopulation()
// 	/**
// 	 * logs the name and health of a pokemon object in the console.
// 	 */
// 	getInfo(){
// 		console.log(this.#name + "'s health is "+ this.#health)
// 		console.log(this.#status)
// 		console.log(Pokemon.getPopulation())
// 		/* console.log(this.#name, this.#energyType, this.#hitpoints, this.#health, this.#attack1, this.#attack2, this.#attack3, this.#attack4, this.#weakness, this.#resistance); */
// 	}
// }

// class Pikachu extends Pokemon {
// 	constructor(coolName) {
// 		let name = coolName;
// 		let energyType = Pokemon.lightning;
// 		let hitpoints = 60;
// 		let health = 60;
// 		let attacks = [Pokemon.electricRing, Pokemon.pikaPunch];
// 		let weakness = Pokemon.fire;
// 		let resistance = Pokemon.fighting;
// 		let status = "alive";
// 		super(name, energyType, hitpoints, health, attacks, weakness, resistance, status)	
// 	}
// }

// class Charmeleon extends Pokemon {
// 	constructor(coolName) {
// 		let name = coolName;
// 		let energyType = Pokemon.fire;
// 		let hitpoints = 60;
// 		let health = 60;
// 		let attacks = [Pokemon.headButt, Pokemon.flare];
// 		let weakness = Pokemon.water;
// 		let resistance = Pokemon.lightning;
// 		let status = "alive";
// 		super(name, energyType, hitpoints, health, attacks, weakness, resistance, status)
// 	}
// }

let pikaBro = new Pikachu("bert");
let charredCorpse = new Charmeleon("geert");

function killThatPokemon(pokemon1, pokemon2) {
	pokemon1.attack(Attack.electricRing, pokemon2)
	pokemon2.getInfo();

	pokemon2.attack(Attack.flare, pokemon1)
	pokemon1.getInfo();

	console.log("the 2 turns have ended.")

	pokemon1.attack(Attack.pikaPunch, pokemon2)
	pokemon2.getInfo();

	pokemon2.attack(Attack.headButt, pokemon1)
	pokemon1.getInfo();

	console.log("the 2 turns have ended.")

	pokemon1.attack(Attack.electricRing, pokemon2)
	pokemon2.getInfo();

	pokemon2.attack(Attack.flare, pokemon1)
	pokemon1.getInfo();

	console.log("the 2 turns have ended.")

	pokemon1.attack(Attack.pikaPunch, pokemon2)
	pokemon2.getInfo();

	pokemon2.attack(Attack.headButt, pokemon1)
	pokemon1.getInfo();

	console.log("the 2 turns have ended.")

	pokemon1.attack(Attack.electricRing, pokemon2)
	pokemon2.getInfo();

	pokemon2.attack(Attack.flare, pokemon1)
	pokemon1.getInfo();

	console.log("the 2 turns have ended.")
}//killThatPokemon(pikaBro, charredCorpse)

/* Hier onder is het begin van het daadwerkelijke gevecht */
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