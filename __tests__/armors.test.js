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

// describe('')

// describe('')

// describe('')

// (Power, Heavy, Medium, Light) Armor Types