class Charmeleon extends Pokemon {
	constructor() {
		let name = "geert";
		let energyType = Energy.fire;
		let hitpoints = 60;
		let health = 60;
		let attacks = [Attack.headButt, Attack.flare];
		let weakness = Energy.water;
		let resistance = Energy.lightning;
		let status = "alive";
		super(name, energyType, hitpoints, health, attacks, weakness, resistance, status)
	}
}