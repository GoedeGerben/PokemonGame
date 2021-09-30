class Charmeleon extends Pokemon {
	constructor() {
		let name = "geert";
		let energyType = Pokemon.fire;
		let hitpoints = 60;
		let health = 60;
		let attacks = [Pokemon.headButt, Pokemon.flare];
		let weakness = Pokemon.water;
		let resistance = Pokemon.lightning;
		let status = "alive";
		super(name, energyType, hitpoints, health, attacks, weakness, resistance, status)
	}
}