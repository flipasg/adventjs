import listGifts from './index';

describe('day 2 :: listGifts', () => {
  const letter = 'bici coche balón _playstation bici coche peluche';

  const gifts = {
    bici: 2,
    coche: 2,
    balón: 1,
    peluche: 1,
  };

  it('listGifts :: should count gifts', () => {
    expect(listGifts(letter)).toStrictEqual(gifts);
  });
});
