import Character from "./character.js"
import { classes } from "./classes.js"
import { weapons } from "./weapons.js"
import { armors } from "./armors.js"

export class Enemy {
  constructor(lvl, hp, atk, dmg, xp) {
    this.lvl = lvl;
    this.hp = hp;
    this.atk = atk;
    this.dmg = dmg;
    this.xp = xp
  }
}

export class Combat {
  constructor(playerHpRemain, enemyHpRemain) {
    // this.turns = 0;
    // this.roll = 0;
    // this.dmgDeal = 0;
    // this.playerHpRemain = playerHpRemain;
    // this.enemyHpRemain = enemyHpRemain;
  }
  addPlayerHp() {

  }
}
//combat constructor
  //turns taken
  //damage dealt
  //rolls?
  //hp remaining

// Combat functionality
// prototype functions
  // attack - roll to check against CON
  // damage - subtracts from HP if successful
  // turn(player>enemy>player>enemy)