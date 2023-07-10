const Soldier = require("../soldier/Soldier");

class Viking extends Soldier{

    constructor(name, health, strength){
        super(health, strength);
        this.name=name;
        // this.receiveDamage = ((damage)=>{
        //     this.health=this.health-damage;
        //     return this.name +" has received "+damage+" points of damage";
        // });
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        if(damage>=this.health){
            this.health=this.health-damage;
            return this.name +" has died in act of combat";
        }
        else{
            this.health=this.health-damage;
            return this.name +" has received "+damage+" points of damage";
        }        
    }

    battleCry(){
        return "Odin Owns You All!"
    }

}

module.exports = Viking;
