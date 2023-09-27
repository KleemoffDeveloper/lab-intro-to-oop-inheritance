// Create class below
class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }

  status() {
    console.log(
      `My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${
        this.energy
      }\nI am${this.sick ? "" : " not"} sick`
    );
  }

  eat() {
    this.full += 2;
    this.energy--;
    this.sick = this.full > 10;
  }

  medicate() {
    if (this.sick) {
      this.full = 9;
      this.energy -= 3;
    } else {
      console.log(`refusal to take medicine`);
      this.energy--;
    }
  }

  play() {
    if (this.sick) {
      this.mood--;
      this.energy--;
      return;
    }
    if (this.mood > 9) {
      this.energy -= 2;
      this.full--;
      return;
    }
    if (this.energy <= 3) {
      console.log(`I am too tired to play`);
      this.energy--;
      return;
    }
    this.mood += 2;
    this.energy--;
    this.full--;
  }

  sleep() {
    this.energy += 4;
    this.full -= 3;
  }

  timePasses() {
    if (this.sick) {
      this.mood -= 3;
      this.full -= 2;
      this.energy -= 2;
    } else {
      this.mood -= 2;
      this.full--;
      this.energy--;
    }
  }

  badGuardian() {
    this.rehomed = this.energy <= 0 || this.mood <= 0 || this.full <= 0;

    if (this.rehomed) {
      console.log(`${this.name} has been rehomed`);
    }
  }
}

// const tamagotchi = new Tamagotchi("Sam");

// tamagotchi.greet();
// tamagotchi.status();
// tamagotchi.eat();
// tamagotchi.medicate();
// tamagotchi.play();
// tamagotchi.sleep();
// tamagotchi.timePasses();
// tamagotchi.badGuardian();

// Do not edit below this line

// commented out for React
//module.exports = Tamagotchi;
