// Create class below
export class Food {
  constructor(name, daysToSpoil = 0, fresh = true) {
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

export class BadFood extends Food {
  constructor(
    name,
    daysToSpoil,
    fresh,
    weapons = [{ hitPoints: 3 }, { hitPoints: 4 }, { hitPoints: 5 }],
    isBlocking = false,
    wonFight = false
  ) {
    super(name, daysToSpoil, fresh);
    this.weapons = weapons;
    this.isBlocking = isBlocking;
    this.wonFight = wonFight;
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
    enemyFood.daysToSpoil -= (enemyFood.isBlocking ? 0 : this.weapons[Math.floor((Math.random() * this.weapons.length))].hitPoints);
    enemyFood.isBlocking = false;

    // We win
    if (enemyFood.daysToSpoil <= 0) {
      return this.victory(this, enemyFood);
    }
    // They win
    else if (this.daysToSpoil <= 0) {
      return this.victory(enemyFood, this);
    }
    // Still fighting
    else {
      const log = `${enemyFood.name} is down ${enemyFood.daysToSpoil} , but I am still up ${this.daysToSpoil} !`;
      console.log(log);
      return log;
    }
  }

  heal() {
    const log = `${this.name} healed!`;
    this.daysToSpoil++;
    console.log(log);
    return log;
  }

  block() {
    const log = `${this.name} is using block!`;
    this.isBlocking = true;
    return log;
  }

  /**
   * Unless 'action' is specified, the BadFood will perform a random
   * fight action.
   * @param {number} action
   */
  actionSelector(action) {
    const actionMap = [this.fight, this.heal, this.block];

    if (action) {
      return actionMap[action];
    } else {
      return actionMap[Math.floor(Math.random() * actionMap.length)];
    }
  }

  /**
   *
   * @param {BadFood} winner
   * @param {BadFood} loser
   */
  victory(winner, loser) {
    this.wonFight = this === winner;
    const log = `${winner.name} Wins!\n${loser.name} Loses!`;
    console.log(log);
    return log;
  }
}

// const bagel = new Food("Everything Bagel", 15, true);

// bagel.prepare();
// bagel.isFresh();
// bagel.aDayPasses();

// Do not edit below this line

// commented out for React
//module.exports = { Food, BadFood };
