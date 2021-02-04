import Character from "../src/js/character.js"
import { soldier, techromancer, medic, scoundrel } from "../src/js/classes.js"
import { SMG, AR, SG, Melee, Launchers } from "../src/js/weapons.js"
import { Power, Heavy, Medium, Light } from '../src/js/armors.js'


describe('Character', () => {
  test('Should correctly create PC object', () => {
    const character = new Character("Brute", {}, {}, {});
    expect(character.name).toEqual("Brute");
    expect(character.pcClass).toEqual({});
    expect(character.weaponType).toEqual({});
    expect(character.armorType).toEqual({});
  });
});

describe('Character.addClass', () => {
  test('Should properly assign a class to a character', () => {
    const character = new Character("Brute");
    // const userClass = soldier;
    // addClass(userClass) {
    //   this.pcClass[soldier] = userClass;
    // }
    const userClass = "soldier"
    character.addClass(userClass)
    expect(character.pcClass).toEqual({
      hp: 20,
      str: 6,
      dex: 1,
      con: 4,
      int: 1,
      wis: 1,
      cha: 2,
      atk: 2
    });
  });
});
