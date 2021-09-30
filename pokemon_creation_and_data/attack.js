/**
 * 
 */
 class Attack {
    static headButt = new Attack("head butt", Energy.fighting, 10)
	static flare = new Attack("flare", Energy.fire, 30)
	static electricRing = new Attack("electric ring", Energy.lightning, 50)
	static pikaPunch = new Attack("pika punch", Energy.fighting, 20)

	constructor(name, energy, dmg){
		this.name = name;
		this.energy = energy;
		this.dmg = dmg;
	}
}