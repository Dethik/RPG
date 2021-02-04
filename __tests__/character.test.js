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

// describe('Character.addClass', () => {
//   test('Should properly assign a class to a character', () => {
//     const character = new Character("Brute");
//     const userClass = classes.soldier
//     character.addClass(userClass)
//     expect(character.pcClass).toEqual(classes.soldier);
//   });
// });

// describe('Character.addWeapon', () => {
//   test('Should properly assign a class to a character', () => {
//     const character = new Character("Brute");
//     const userWeapon = weapons.Melee
//     character.addWeapon(userWeapon)
//     expect(character.weaponType).toEqual(weapons.Melee);
//   });
// });

// describe('Character.addArmor', () => {
//   test('Should properly assign a class to a character', () => {
//     const character = new Character("Brute");
//     const userArmor = armors.Power
//     character.addArmor(userArmor)
//     expect(character.armorType).toEqual(armors.Power);
//   });
// });

describe('Character.createCharacter', () => {
  test('Should properly assign class, weapon, and armor to a character', () => {
    const character = new Character("Brute");
    const userArmor = armors.Power
    const userWeapon = weapons.Melee
    const userClass = classes.soldier
    character.createCharacter(userClass, userWeapon, userArmor)
    expect(character).toEqual("Brute", classes.soldier, weapons.Melee, armors.Power);
  });
});