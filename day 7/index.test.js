import contains from './index';

describe('day 7 :: contains', () => {
  const testArguments = [
    { store: {
      'estanteria1': {
        'cajon1': {
          'producto1': 'coca-cola',
          'producto2': 'fanta',
          'producto3': 'sprite'
        }
      },
      'estanteria2': {
        'cajon1': 'vacio',
        'cajon2': {
          'producto1': 'pantalones',
          'producto2': 'camiseta'
        }
      }
    }, product: 'camiseta' },
    { store: {
      'baul': {
        'fondo': {
          'objeto': 'cd-rom',
          'otro-objeto': 'disquette',
          'otra-cosa': 'mando'
        }
      }
    }, product: 'gameboy' }
  ];
  const expectedResults = [true, false];

  it('contains :: should return if the product is in the store', () => {
    testArguments.forEach(({store, product}, index) =>
      expect(contains(store, product)).toBe(expectedResults[index])
    );
  });
});
