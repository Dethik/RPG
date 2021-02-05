import { weapons } from "../src/js/weapons.js"

describe('SMG', () => {
  test('should check predetermined stat values to SMG', () => {
    expect(weapons.SMG).toEqual({
      dex: 1,
      atk: 4,
      dmg: 5
    })
  })
});

describe('AR', () => {
  test('should check predetermined stat values to AR', () => {
    expect(weapons.AR).toEqual({
      dex: 2,
      atk: 5,
      dmg: 7
    })
  })
});

describe('SG', () => {
  test('should check predetermined stat values to Shotgun', () => {
    expect(weapons.SG).toEqual({
      str: 1,
      atk: 4,
      dmg: 2*4
    })
  })
});

describe('Melee', () => {
  test('should check predetermined stat values to Melee', () => {
    expect(weapons.Melee).toEqual({
      str: 2,
      atk: 3,
      dmg: 7
    })
  })
});

describe('Launchers', () => {
  test('should check predetermined stat values to Kaboomers', () => {
    expect(weapons.Launchers).toEqual({
      wis: 3,
      atk: 3,
      dmg: 15
    })
  })
});

// (SMG, AR, SG, Melee, Launchers) Weapon Types