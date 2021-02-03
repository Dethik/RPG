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

describe('AR', () => {
  test('should check predetermined stat values to AR', () => {
    expect(AR).toEqual({
      dex: 2,
      atk: 5,
      dmg: 7
    })
  })
});

describe('SG', () => {
  test('should check predetermined stat values to Shotgun', () => {
    expect(SG).toEqual({
      str: 1,
      atk: 4,
      dmg: 2*4
    })
  })
});

// describe('Melee')

// describe('Launchers')

// (SMG, AR, SG, Melee, Launchers) Weapon Types