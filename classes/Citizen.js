export default class Citizen {
  constructor(name, job, life = 100, status = "alive") {
    this.name = name;
    this.job = job;
    this.life = life;
    this.maxLife = life;
    this.status = status;
  }

  takeDamage(amount) {
    if (this.status === "dead") return;

    this.life -= amount;

    if (this.life <= 0) {
      this.life = 0;
      this.status = "dead";
    }
  }

  heal(amount) {
    if (this.status === "dead") return;

    this.life += amount;

    if (this.life > this.maxLife) {
      this.life = this.maxLife;
    }
  }

  changeJob(newJob) {
    this.job = newJob;
  }

  isAlive() {
    return this.status === "alive";
  }

  getInfo() {
    return `${this.name} is a ${this.job}. Life: ${this.life}/${this.maxLife}. Status: ${this.status}`;
  }
}
