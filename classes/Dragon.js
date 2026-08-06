import Citizen from "./Citizen.js";

export default class Dragon extends Citizen {
  constructor(name, job, life = 2000) {
    super(name, job, life);
    this.inventory = [];
    this.level = 1;
    this.gold = 5000000000;
    this.damage = 1;
  }

  addItem(item) {
    this.inventory.push(item);
  }

  levelUp() {
    this.level += 1;
    this.maxLife += 100;
    this.life = this.maxLife;
  }

  getInfo() {
    return `${this.name} is a ${this.job}. Level: ${this.level}. Life: ${this.life}/${this.maxLife}. Gold: ${this.gold}. Status: ${this.status}`;
  }

  kill() {
    this.life = 0;
  }
  
  resurction() {
    this.life = 5000000000;
  }

  fire()
    this.damage = 15;

}
