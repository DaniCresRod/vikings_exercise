class Soldier {
    
    constructor(healthArg, strengthArg) {
        this.health=healthArg;
        this.strength=strengthArg;
        this.receiveDamage = ((damage)=>{
            this.health=this.health-damage;
        });        
    }

    attack(){
        return this.strength;
    }
}

module.exports = Soldier;
