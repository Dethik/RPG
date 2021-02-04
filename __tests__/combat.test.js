import Enemy from "../src/js/combat.js"

describe('Enemy', () => {
  test('That the enemy constructor creates an enemy with stats', () => {
    const thug = new Enemy(1, 8, 3, 2, 10)
    expect(thug).toEqual({lvl: 1, hp: 8, atk: 3, dmg: 2, xp:10})
  })
})