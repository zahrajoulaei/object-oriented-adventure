import { Adventurer, Character, Companion, AdventurerFactory } from "./adventurer.js";

const robin = new Adventurer("Robin", "Healer");
const zahra = new Adventurer("Zahra", "Wizard");

robin.duel(zahra);
robin.scout();
zahra.scout();

const leo = new Companion("Leo", "Fighter");

const frank = new Companion("Frank");

// Add Frank as a companion to Leo:
leo.addCompanion(frank);

// Optional: Uncomment to test companion methods
// leo.roll(1);
// frank.roll(1);
// leo.scout();
// leo.companion.scout();

const healers = new AdventurerFactory("Healer");
const robin2 = healers.generate("Robin");
console.log(healers.findByName("Robin"));