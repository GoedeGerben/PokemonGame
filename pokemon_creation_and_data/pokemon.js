/**
 * @constructor
 */
class Pokemon {
	static pokeCount = 0;

	#name;
	#energyType;
	#hitpoints;
	#health;
	#attacks;
	#weakness;
	#resistance;
	#status;
	/**
	 * constructor that construct a new pokemon.
	 * 
	 * @param {string} name the cuntom of the pokemon.
	 * @param {object} energyType the energy type of the pokemon.
	 * @param {number} hitpoints the maximum hp of the pokemon.
	 * @param {number} health the current health of the pokemon.
	 * @param {Array} attacks the attacks the pokemon has .
	 * @param {object} weakness the energy type the pokemon is weak against.
	 * @param {object} resistance the energy type the pokemon is strong against.
	 */
	constructor(name, energyType, hitpoints, health, attacks, weakness, resistance, status){		
		this.#name = name;
		this.#energyType = energyType;
		this.#hitpoints = hitpoints;
		this.#health = health;
		this.#attacks = attacks;
		this.#weakness = weakness;
		this.#resistance = resistance;
		this.#status = status;
		Pokemon.pokeCount++
	}
	/**
	 * logs the death message, sets enemy health to 0, sets its status to dead, subtracts 1 from pokeCount
	 * @returns enemy health
	 */
	#death() {
		console.log(this.#name + " has fainted... F")
		this.#health = 0;
		this.#status = "dead";
		Pokemon.pokeCount = Pokemon.pokeCount - 1;
		return this.#health;
	}
	/**
	 * sets the damage for the attack  to the correct ammount for resistances and weaknesses.
	 * checks if the enemy is dead.
	 * kills the enemy.
	 * @param {number} dmg the demage the attack does.
	 * @param {object} type the energy type of the attack.
	 * @param {object} enemy the enemy thats being attacked
	 * @returns the pokemons new health.
	 */
	#newhealth(dmg, type, enemy) {
		var dmgModifier = 1;
		if(type == this.#weakness) {
			dmgModifier = 1.5;
		} else if(type == this.#resistance) {
			dmgModifier = 0.5;
		}

		if(this.#health - (dmg * dmgModifier) >= 1){
			this.#health = this.#health - (dmg * dmgModifier);
			return this.#health;
		} else if (enemy.#status == "dead") {
			console.log("He's already dead!")
		}else {
			enemy.#death();
		}
		//pikachu.attack(headButt, charmeleon)
	}
	/**
	 * checks if the attacking pokemon is alive and has the attack it wants to use.
	 * @param {object} atck the attack that is being used. 
	 * @param {object} enemy the enemy that is being attacked.
	 * @returns the new health of the attacked enemy.
	 */
	attack(atck, enemy) {
		if (this.#status == 'alive' && this.#attacks.includes(atck)) {
		return enemy.#newhealth(atck.dmg, atck.energy, enemy)
		} else {
			console.log("you can't attack when you're dead or with an attack you dont have")
		}
	}
	/**
	 * 
	 * @returns the amount of living pokemon.
	 */
	static getPopulation() {
		return Pokemon.pokeCount;
	}//Pokemon.getPopulation()
	/**
	 * logs the name and health of a pokemon object in the console.
	 */
	getInfo(){
		console.log(this.#name + "'s health is "+ this.#health)
		console.log(this.#status)
		console.log(Pokemon.getPopulation())
		/* console.log(this.#name, this.#energyType, this.#hitpoints, this.#health, this.#attack1, this.#attack2, this.#attack3, this.#attack4, this.#weakness, this.#resistance); */
	}
}