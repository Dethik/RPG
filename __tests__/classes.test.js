import { soldier, techromancer, medic, scoundrel } from "../src/js/classes.js"

describe('soldier', () => {
  test('should apply predefined stat values to soldier class', () => {
    expect(soldier).toEqual({
      hp: 20,
      str: 6,
      dex: 1,
      con: 4,
      int: 1,
      wis: 1,
      cha: 2,
      atk: 2
    })
  })
});
describe('techromancer', () => {
  test('should check predefined stat values of the techromancer', () => {
    expect(techromancer).toEqual({
      hp: 12,
      str: 1,
      dex: 3,
      con: 4,
      int: 2,
      wis: 1,
      cha: 6,
      atk: 3
    })
  })
});
describe('medic', () => {
  test('should check predefined stat values of the medic', () => {
    expect(medic).toEqual({
      hp: 16,
      str: 1,
      dex: 1,
      con: 5,
      int: 3,
      wis: 6,
      cha: 2,
      atk: 1
    })
  })
});
describe('scoundrel', () => {
  test('should check predefined stat values of the scounrel', () => {
    expect(scoundrel).toEqual({
      hp: 12,
      str: 1,
      dex: 6,
      con: 3,
      int: 2,
      wis: 3,
      cha: 2,
      atk: 3
    })
  })
});