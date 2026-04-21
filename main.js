import Player from "./classes/Player.js";
import Merchant from "./classes/Merchant.js";
import Guard from "./classes/Guard.js";

const player1 = new Player("Nikos", "Potter", 100);
const merchant1 = new Merchant("Damon");
const guard1 = new Guard("Theon");

console.log(player1.getInfo());
console.log(merchant1.getInfo());
console.log(guard1.getInfo());

player1.addItem("Clay");
guard1.attack(player1);

console.log(player1.getInfo());
console.log(merchant1.sellItem("wine"));
