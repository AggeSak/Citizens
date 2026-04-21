import Citizen from "./Citizen.js";

export default class Player extends Citizen {
  constructor(name, job, life = 100) {
    super(name, job, life);
    this.inventory = [];
    this.level = 1;
    this.gold = 10;
  }

  addItem(item) {
    this.inventory.push(item);
  }

  levelUp() {
    this.level += 1;
    this.maxLife += 10;
    this.life = this.maxLife;
  }

  getInfo() {
    return `${this.name} is a ${this.job}. Level: ${this.level}. Life: ${this.life}/${this.maxLife}. Gold: ${this.gold}. Status: ${this.status}`;
  }
}
