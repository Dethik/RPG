import Character from "../src/js/character.js"
import { classes } from "../src/js/classes.js"
import { weapons } from "../src/js/weapons.js"
import { armors } from '../src/js/armors.js'


describe('Character', () => {
  test('Should correctly create PC object', () => {
    const character = new Character("Brute", {}, {}, {});
    expect(character.name).toEqual("Brute");
    expect(character.pcClass).toEqual({});
    expect(character.weaponType).toEqual({});
    expect(character.armorType).toEqual({});
  });
});

describe('Character.createCharacter', () => {
  test('Should properly assign class, weapon, and armor to a character', () => {
    const userInputA = armors.Power
    const userInputW = weapons.Melee
    const userInputC = classes.soldier
    const name = "Brute"
    const character = new Character(name, userInputC, userInputW, userInputA);
    // character.createCharacter(userInputC, userInputW, userInputA)
    expect(character).toEqual({"armorType": {"con": 4, "str": 3, "wis": 1}, "name": "Brute", "pcClass": {"atk": 2, "cha": 2, "con": 4, "dex": 1, "hp": 20, "int": 1, "str": 6, "wis": 1}, "weaponType": {"atk": 3, "dmg": 7, "str": 2}});
  });
});