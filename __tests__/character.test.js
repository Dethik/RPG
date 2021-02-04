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

describe('Character.addClass', () => {
  test('Should properly assign a class to a character', () => {
    const character = new Character("Brute");
    const userClass = classes.soldier
    character.addClass(userClass)
    expect(character.pcClass).toEqual(classes.soldier);
  });
});

describe('Character.addWeapon', () => {
  test('Should properly assign a class to a character', () => {
    const character = new Character("Brute");
    const userWeapon = weapons.Melee
    character.addWeapon(userWeapon)
    expect(character.weaponType).toEqual(weapons.Melee);
  });
});
