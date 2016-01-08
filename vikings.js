var Viking = function(name, health, strength){
	this.name = name;
	this.health = health;
	this.strength = strength;	
}

var Saxon = function(){
	this.health = Math.floor((Math.random() * 50) + 1);
	this.strength = Math.floor((Math.random() * 50) + 1);
}

Viking.prototype.warCry = function () {
	console.log("Odin owns you all!");
}

Viking.prototype.attack = function(opponent){
	opponent.health -= this.strength;
}

Saxon.prototype.attack = function(opponent){
	opponent.health -= this.strength;
}

var Pit = function(viking1, viking2){
	this.viking1 = viking1;
	this.viking2 = viking2;
	this.numberOfTurns = 0;
	this.maxNumberOfTurns = 7;

}

Pit.prototype.start = function(){
	var vikingsArray = [this.viking1, this.viking2];
	vikingsArray.shuffle;
	while(this.numberOfTurns <= this.maxNumberOfTurns){
		vikingsArray.forEach(function(viking, index){
			if (this.viking1.health < 5 || this.viking2.health < 5){
				console.log("Pit finished");
				return;
			}
			if (index === 0){
				viking.attack(vikingsArray[1]);
				this.numberOfTurns += 1;
			} else{
				viking.attack(vikingsArray[0]);
				this.numberOfTurns += 1;
			}
		}

		});
	}
	console.log("All turns exhausted");
}

var Assault = function(vikings, saxons){
	this.vikings = vikings;
	this.saxons = saxons;
	this.vikingsCasualties = 0;
	this.saxonsCasualties = 0;
	this.numberOfTurns = 0;
	this.maxNumberOfTurns = Math.floor((Math.random() * 4) + 5);
}

Assault.prototype.start = function(){
	
	while(this.numberOfTurns <= this.maxNumberOfTurns){
		this.vikings.forEach(function(viking, index){
			randomSaxonIndex = Math.floor(Math.random() * saxons.length);
			viking.attack(saxons[randomSaxonIndex]);
			if(saxons[randomSaxonIndex].health <= 0){
				console.log("One saxon less!");
				this.saxonsCasualties += 1;
				break;
			}
			saxons[randomSaxonIndex].attack(viking);
			if(viking.health <= 0){
				console.log("One viking less!");
				this.vikingsCasualties += 1;
				break;
			}
		});			}
	}
	console.log("All turns exhausted");
	if (vikingsCasualties < saxonsCasualties){
		console.log("Saxons won!");
	} else if(vikingsCasualties > saxonsCasualties){
		console.log("Vikings won!");
	} else{
		console.log("DRAW");
	}
}