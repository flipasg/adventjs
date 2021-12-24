import getCoins from './index';

describe('day 10 :: getCoins', () => {
  const testArguments = [51, 3, 5, 16, 100];
  const expectedResults = [
    [1, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [1, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 2],
  ];

  it('getCoins :: should return the change with the count of coins of each quantity', () => {
    testArguments.forEach((change, index) =>
      expect(getCoins(change)).toStrictEqual(expectedResults[index])
    );
  });
});
