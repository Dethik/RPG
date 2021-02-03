import { Power, Heavy, Medium, Light } from '../src/js/armors.js'

describe('Power', () => {
  test('should check predetermined stats values to Power armor', () => {
    expect(Power).toEqual({
      con: 4,
      str: 3,
      wis: 1
    })
  })
})

describe('Heavy', () => {
  test('should check predetermined stats values to Heavy armor', () => {
    expect(Heavy).toEqual({
      con: 3,
      str: 1,
      wis: 3
    })
  })
})

describe('Medium', () => {
  test('should check predetermined stats values to Medium armor', () => {
    expect(Medium).toEqual({
      con: 2,
      dex: 3,
      cha: 1
    })
  })
})

describe('Light', () => {
  test('should check predetermined stats values to Light armor', () => {
    expect(Light).toEqual({
      con: 1,
      dex: 1,
      cha: 3
    })
  })
})

// (Power, Heavy, Medium, Light) Armor Types