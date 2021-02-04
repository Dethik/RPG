import { Enemy, Combat } from "../src/js/combat.js"
import Character from "../src/js/character.js"
import { classes } from "../src/js/classes.js"
import { weapons } from "../src/js/weapons.js"
import { armors } from "../src/js/armors.js"

describe('Enemy', () => {
  test('That the enemy constructor creates an enemy with stats', () => {
    const thug = new Enemy(1, 8, 3, 2, 10, 2)
    expect(thug).toEqual({lvl: 1, hp: 8, atk: 3, dmg: 2, xp:10, con:2})
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
});

describe('playerTurn', () => {
  test('That the player has missed', () => {
    const thug = new Enemy(1, 8, 3, 2, 10)
    const name = "Brute"
    const userInputA = armors.Power
    const userInputW = weapons.Melee
    const userInputC = classes.medic
    const char = new Character(name, userInputC, userInputW, userInputA);
    const newCombat = new Combat(char.pcClass.hp, thug.hp)
    expect(newCombat.playerTurn()).toEqual("miss")
  })
  test('increases turn count by one', () => {
    const combat = new Combat();
    combat.playerTurn();
    expect(combat.turns).toEqual(1);
  })
  test('checks that the attack roll is 1-6', () => {
    const combat = new Combat();
    combat.playerTurn();
    // const attackRoll = Math.floor(Math.random() * Math.floor(6)) + 1
    expect(combat.roll).toBeGreaterThan(0);
    expect(combat.roll).toBeLessThanOrEqual(6);
  })
});