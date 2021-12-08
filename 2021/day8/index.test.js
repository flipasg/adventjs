import maxProfit from './index';

describe('day 8 :: maxProfit', () => {
  const testArguments = [
    [39, 18, 29, 25, 34, 32, 5],
    [10, 20, 30, 40, 50, 60, 70],
    [18, 15, 12, 11, 9, 7],
    [3, 3, 3, 3, 3],
  ];
  const expectedResults = [16, 60, -1, -1];

  it('maxProfit :: should return the benefits of the day (boughtPrice - soldPrice)', () => {
    testArguments.forEach((prices, index) =>
      expect(maxProfit(prices)).toBe(expectedResults[index])
    );
  });
});
