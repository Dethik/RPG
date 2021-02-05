import { classes } from "./classes.js"
import { weapons } from "./weapons.js"
import { armors } from "./armors.js"

export default class Character {
  constructor(name, userInputC, userInputW, userInputA) {
    this.name = name;
    this.pcClass = userInputC;
    this.weaponType = userInputW;
    this.armorType = userInputA;
  }
}