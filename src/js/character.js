import { classes } from "./classes.js"
import { weapons } from "./weapons.js"
import { armors } from "./armors.js"

export default class Character {
  constructor(name) {
    this.name = name;
    this.pcClass = {};
    this.weaponType = {};
    this.armorType = {};
  }

  addClass(userClass) {
    this.pcClass = userClass;
  }

  addWeapon(userWeapon) {
    this.weaponType = userWeapon;
  }

  addArmor(userArmor) {
    this.armorType = userArmor;
  }
}