const Soldier = require("../soldier/Soldier");

class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        
        if(damage>=this.health){
            this.health=this.health-damage;
            return "A Saxon has died in combat";
        }
        else{         
            this.health=this.health-damage;   
            return "A Saxon has received "+damage+" points of damage";
        }        
    }
}

module.exports = Saxon;
