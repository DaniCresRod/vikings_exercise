class War {

    constructor(){
        this.vikingArmy=[];
        this.saxonArmy=[];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let random=Math.floor(Math.random()*this.saxonArmy.length);
        let result=this.saxonArmy[random].receiveDamage(this.vikingArmy[random].strength);

        if(this.saxonArmy[random].health<=0){
            this.saxonArmy.splice(random, 1);
        }

        return result;
    }

    saxonAttack(){
        let random=Math.floor(Math.random()*this.saxonArmy.length);
        let result=this.vikingArmy[random].receiveDamage(this.saxonArmy[random].strength);

        if(this.vikingArmy[random].health<=0){
            this.vikingArmy.splice(random, 1);
        }

        return result;
    }

    showStatus(){
        if(this.saxonArmy.length===0){
            return "Vikings have won the war of the century!"
        }
        else if(this.vikingArmy.length===0){
            return "Saxons have fought for their lives and survive another day..."
        }
        else if((this.saxonArmy.length>=1) && (this.vikingArmy.length>=1)){
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}

module.exports = War;
