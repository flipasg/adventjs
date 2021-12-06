import isValid from './index';

describe('day 3 :: isValid', () => {
  const letters = [
    'bici coche (balón) bici coche peluche',
    '(muñeca) consola bici',
    'bici coche (balón bici coche',
    'peluche (bici [coche) bici coche balón',
    '(peluche {) bici',
    '() bici',
  ];

  const validity = [true, true, false, false, false, false];

  it('isValid :: should check the validity of the letter', () => {
    letters.forEach((letter, index) =>
      expect(isValid(letter)).toBe(validity[index])
    );
  });
});
