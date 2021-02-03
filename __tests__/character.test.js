import Character from "../src/js/character.js"

describe('Character', () => {

  test('Should correctly create PC object', () => {
    const character = new Character("Brute", Techromancer, SMG, light);
    expect(character.name).toEqual("Brute");
    expect(character.pcClass).toEqual(Techromancer);
    expect(character.weaponType).toEqual(SMG);
    expect(character.armorType).toEqual(light);
  })
});