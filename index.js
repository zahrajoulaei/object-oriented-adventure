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
        `the ${role} is invalid. valid roles are: ${Adventurer.ROLES.join(
          ", "
        )}`
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
      `the result of duesl is ${result}'. the name: ${this.name}. the current health: ${this.health} the opponent name: ${opponent.name}, the oponent healt: ${opponent.health}`
    );
  }
}

const robin = new Adventurer("Robin", "Healer");
const zahra = new Adventurer("Zahra", "Wizard");

robin.duel(zahra);
robin.scout();
zahra.scout();

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
const leo = new Companion("Leo", "Fighter");

const frank = new Companion("Frank");

//add Frank as a companion to Leo:
leo.addCompanion(frank);

// leo.roll(1);
// frank.roll(1);
// leo.scout();
// leo.companion.scout();

class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name) {
    const newAdventurer = new Adventurer(name, this.role);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

// const healers = new AdventurerFactory("Healer");
// const robin2 = healers.generate("Robin");
