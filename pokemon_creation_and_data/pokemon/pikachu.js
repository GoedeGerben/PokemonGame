class Pikachu extends Pokemon {
	constructor() {
		let name = "bert";
		let energyType = Pokemon.lightning;
		let hitpoints = 60;
		let health = 60;
		let attacks = [Pokemon.electricRing, Pokemon.pikaPunch];
		let weakness = Pokemon.fire;
		let resistance = Pokemon.fighting;
		let status = "alive";
		super(name, energyType, hitpoints, health, attacks, weakness, resistance, status)	
	}
}