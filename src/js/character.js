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

  createCharacter(userInputC, userInputW, userInputA) {
    // this.pcClass = userInputC;
    // this.weaponType = userInputW;
    // this.armorType = userInputA;
  }


  // addClass(userClass) {
  //   this.pcClass = userClass;
  // }

  // addWeapon(userWeapon) {
  //   this.weaponType = userWeapon;
  // }

  // addArmor(userArmor) {
  //   this.armorType = userArmor;
  // }
}