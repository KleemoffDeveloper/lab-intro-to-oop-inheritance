// Create class below
class Food {
  constructor(name, daysToSpoil, fresh = true) {
    this.name = name;
    this.daysToSpoil = daysToSpoil;
    this.fresh = fresh;
  }

  prepare() {
    console.log(`${this.name} is being prepared`);
  }

  isFresh() {
    if (this.daysToSpoil > 0) {
      console.log(
        `There are ${this.daysToSpoil} days left before ${this.name} spoils.`
      );
    } else {
      console.log(`${this.name} has spoiled.`);
    }
  }

  aDayPasses() {
    this.daysToSpoil -= 1;
    this.isFresh();
  }
}

class BadFood extends Food {
  constructor(
    name,
    daysToSpoil,
    fresh,
    weapons = [{ hitPoints: 3 }, { hitPoints: 4 }, { hitPoints: 5 }]
  ) {
    super(name, daysToSpoil, fresh);
    this.weapons = weapons;
  }

  prepare() {
    const messageIndex = Math.floor(Math.random() * 2);
    const messages = [
      `I am ${this.name} and my calories are too high to count!`,
      `I am ${this.name} and you are just a passing trend!`,
    ];
    console.log(messages[messageIndex]);
  }

  /**
   * Takes in an instance of a BadFood, selects a random fight method
   * and decreases the hit points by the number from the selected
   * fight method.
   * @param {BadFood} enemyFood
   */
  fight(enemyFood) {
    enemyFood.daysToSpoil -= enemyFood.isBlocking
      ? 0
      : this.weapons[Math.floor(Math.random() * this.weapons.length)];
    enemyFood.isBlocking = false;

    // We win
    if (enemyFood.daysToSpoil < this.daysToSpoil) {
      this.victory(this, enemyFood);
    }
    // They win
    else if (this.daysToSpoil < enemyFood.daysToSpoil) {
        this.victory(enemyFood, this);
    }
    // Still fighting
    else {
      console.log(
        `${enemyFood.name} is down ${enemyFood.daysToSpoil} , but I am still up ${this.daysToSpoil} !`
      );
    }
  }

  heal() {
    this.daysToSpoil++;
    console.log(`${this.name} healed!`);
  }

  block() {
    this.isBlocking = true;
  }

  /**
   * Unless 'action' is specified, the BadFood will perform a random
   * fight action.
   * @param {number} action
   */
  actionSelector(action) {
    const actionMap = [this.fight, this.heal, this.block];

    if (action) {
      actionMap[action];
    } else {
      actionMap[Math.floor(Math.random() * actionMap.length)];
    }
  }

  /**
   *
   * @param {BadFood} winner
   * @param {BadFood} loser
   */
  victory(winner, loser) {
    console.log(`${winner.name} Wins!\n${loser.name} Loses!`);
  }
}

// const bagel = new Food("Everything Bagel", 15, true);

// bagel.prepare();
// bagel.isFresh();
// bagel.aDayPasses();

// Do not edit below this line
module.exports = {Food, BadFood};
