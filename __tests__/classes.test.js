import { TestScheduler } from "jest"
import { soldier, techromancer, medic, scoundrel } from "../src/js/classes.js"

describe('soldier', () => {

  test('should apply predefined stat values to soldier class', () => {
    const soldier = {
      hp: '20',
      str: '6',
      dex: '1',
      con: '4',
      int: '1',
      wis: '1',
      cha: '2',
      atk: '2'
    }
    expect(soldier).toEqual(soldier);
  })
});