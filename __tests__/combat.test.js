import { Enemy, Combat } from "../src/js/combat.js"
import Character from "../src/js/character.js"
import { classes } from "../src/js/classes.js"
import { weapons } from "../src/js/weapons.js"
import { armors } from "../src/js/armors.js"

describe('Enemy', () => {
  test('That the enemy constructor creates an enemy with stats', () => {
    const thug = new Enemy(1, 8, 3, 2, 10)
    expect(thug).toEqual({lvl: 1, hp: 8, atk: 3, dmg: 2, xp:10})
  })
});

describe('Combat', () => {
  test('That the combat constructor creates an object containing combat stats', () => {
    const thug = new Enemy(1, 8, 3, 2, 10)
    const name = "Brute"
    const userInputA = armors.Power
    const userInputW = weapons.Melee
    const userInputC = classes.medic
    const char = new Character(name, userInputC, userInputW, userInputA);
    const newCombat = new Combat(char.pcClass.hp, thug.hp)
    expect(newCombat).toEqual({"dmgDeal": 0, "enemyHpRemain": 8, "playerHpRemain": 16, "roll": 0, "turns": 0}
    );
  });
})