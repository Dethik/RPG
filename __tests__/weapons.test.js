import { SMG, AR, SG, Melee, Launchers } from "../src/js/weapons.js"

describe('SMG', () => {
  test('should check predetermined stat values to SMG', () => {
    expect(SMG).toEqual({
      dex: 1,
      atk: 4,
      dmg: 5
    })
  })
});

// describe('AR')

// describe('SG')

// describe('Melee')

// describe('Launchers')

// (SMG, AR, SG, Melee, Launchers) Weapon Types