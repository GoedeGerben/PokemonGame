class Pikachu extends Pokemon {
	constructor() {
		let name = "bert";
		let energyType = Energy.lightning;
		let hitpoints = 60;
		let health = 60;
		let attacks = [Attack.electricRing, Attack.pikaPunch];
		let weakness = Energy.fire;
		let resistance = Energy.fighting;
		let status = "alive";
		super(name, energyType, hitpoints, health, attacks, weakness, resistance, status)	
	}
}