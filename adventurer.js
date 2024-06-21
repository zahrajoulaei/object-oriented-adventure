class Character {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    static MAX_HEALTH = 100;
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
      return result;
    }
  }
  
  class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard", "Elf"];
  
    constructor(name, role) {
      super(name);
  
      if (!Adventurer.ROLES.includes(role)) {
        throw Error(
          `The ${role} is invalid. Valid roles are: ${Adventurer.ROLES.join(", ")}`
        );
      }
      this.role = role;
  
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    duel(opponent) {
      const adventurerRoll = this.roll();
      const opponentRoll = opponent.roll();
      let result;
      if (adventurerRoll > opponentRoll) {
        opponent.health--;
        result = `${this.name} wins!!`;
      } else if (adventurerRoll < opponentRoll) {
        this.health--;
        result = `${opponent.name} wins!!`;
      } else {
        result = "it's a tie!!";
      }
      console.log(
        `The result of the duel is ${result}. The name: ${this.name}. The current health: ${this.health} The opponent name: ${opponent.name}, the opponent health: ${opponent.health}`
      );
    }
  }
  
  class Companion extends Character {
    constructor(name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    addCompanion(companion) {
      this.companion = companion;
    }
  }
  
  class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
    generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
      return newAdventurer; // Ensure the new adventurer is returned
    }
    findByIndex(index) {
      return this.adventurers[index];
    }
    findByName(name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  export { Character, Adventurer, Companion, AdventurerFactory };