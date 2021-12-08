
import contarOvejas from './index';

describe('day 1 :: contarOvejas', () => {
  const allSheeps = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
  ];

  const filteredSheeps = [
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
  ];

  it('contarOvejas :: should filter sheeps', () => {
    expect(contarOvejas(allSheeps)).toStrictEqual(filteredSheeps);
  });
});
