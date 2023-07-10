class Soldier {
    
    constructor(health, strength) {
        this.health=health;
        this.strength=strength;
        // this.receiveDamage = ((damage)=>{
        //     this.health=this.health-damage;
        // });        
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health=this.health-damage;
    }
    
}

module.exports = Soldier;
