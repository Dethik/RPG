import { armors } from '../src/js/armors.js'

describe('Power', () => {
  test('should check predetermined stats values to Power armor', () => {
    expect(armors.Power).toEqual({
      con: 4,
      str: 3,
      wis: 1
    })
  })
})

describe('Heavy', () => {
  test('should check predetermined stats values to Heavy armor', () => {
    expect(armors.Heavy).toEqual({
      con: 3,
      str: 1,
      wis: 3
    })
  })
})

describe('Medium', () => {
  test('should check predetermined stats values to Medium armor', () => {
    expect(armors.Medium).toEqual({
      con: 2,
      dex: 3,
      cha: 1
    })
  })
})

describe('Light', () => {
  test('should check predetermined stats values to Light armor', () => {
    expect(armors.Light).toEqual({
      con: 1,
      dex: 1,
      cha: 3
    })
  })
})

// (Power, Heavy, Medium, Light) Armor Types