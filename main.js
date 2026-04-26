import Player from "./classes/Player.js";

const player1 = new Player("Nikos", "Potter", 100);

console.log(player1.getInfo());

player1.addItem("Clay");

console.log(player1.getInfo());
