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

// describe('')

// (Power, Heavy, Medium, Light) Armor Types