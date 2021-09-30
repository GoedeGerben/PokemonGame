/**
 * 
 */
 class Energy {
    static lightning = new Energy("lightning", "fire", "fighting")	
	static fire = new Energy("fire", "water", "lightning")
	static fighting = new Energy("fighting", "lightning", "water")
	static water = new Energy("water", "fighting", "fire")
    
	constructor(name, weakness, resistance){
		this.name = name;
		this.weakness = weakness;
		this.resistance = resistance;
	}
}