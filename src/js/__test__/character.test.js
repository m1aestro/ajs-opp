/* eslint-disable eol-last */
/* eslint-disable no-new */
import Character from '../character';

test('should throw error for name less than 2 symbol', () => {
  expect(() => { new Character('a', 'Bowman'); }).toThrow('Имя должно быть от 2 до 10 символов.');
});

test('should throw error for name greater than 10 symbol', () => {
  expect(() => { new Character('qwertyqwerty', 'Bowman'); }).toThrow('Имя должно быть от 2 до 10 символов.');
});

test('should throw error for unknown type', () => {
  expect(() => { new Character('Unknown', 'Unknown'); }).toThrow('Неизвестный класс персонажа');
});

test('should set health to 100 for health settings 200', () => {
  const newCharacter = new Character('Bowman', 'Bowman', 25, 25);
  newCharacter.health = 200;
  expect(newCharacter.health).toBe(200);
});

test('should set health to 0 for health settings -100', () => {
  const newCharacter = new Character('Bowman', 'Bowman', 25, 25);
  newCharacter.health = -100;
  expect(newCharacter.health).toBe(-100);
});

test('should set health to 50 for health settings 50', () => {
  const newCharacter = new Character('Bowman', 'Bowman', 25, 25);
  newCharacter.health = 50;
  expect(newCharacter.health).toBe(50);
});

test('should throw error for levelUp for dead char.', () => {
  const newCharacter = new Character('Bowman', 'Bowman', 25, 25);
  newCharacter.health = 0;
  expect(() => { newCharacter.levelUp(); }).toThrow('Нельзя повысить level умершего');
});

test('should set health to 25 for damage', () => {
  const newCharacter = new Character('Bowman', 'Bowman', 25, 25);
  newCharacter.damage(100);

  expect(newCharacter.health).toBe(25);
});

test('should set level to 2 and health to 100 and attack to 120 and defence to 120', () => {
  const newCharacter = new Character('Bowman', 'Bowman', 100, 100);
  newCharacter.health = 50;
  newCharacter.levelUp();
  const resultChar = {
    name: 'Bowman',
    type: 'Bowman',
    attack: 120,
    defence: 120,
    health: 100,
    level: 2,
  };

  expect(newCharacter).toEqual(resultChar);
});