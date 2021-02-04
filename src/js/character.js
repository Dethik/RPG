import { soldier, techromancer, medic, scoundrel } from "./classes.js"
import { SMG, AR, SG, Melee, Launchers } from "./weapons.js"
import { Power, Heavy, Medium, Light } from "./armors.js"

export default class Character {
  constructor(name) {
    this.name = name;
    this.pcClass = {};
    this.weaponType = {};
    this.armorType = {};
  }

  addClass(userClass) {
    this.pcClass[userClass] = soldier;
  }
}