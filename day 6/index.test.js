import sumPairs from './index';

describe('day 6 :: sumPairs', () => {
  const numberLists = [
    { numbers: [3, 5, 7, 2], result: 10 },
    { numbers: [-3, -2, 7, -5], result: 10 },
    { numbers: [2, 2, 3, 1], result: 4 },
    { numbers: [6, 7, 1, 2], result: 8 },
    { numbers: [0, 2, 2, 3, -1, 1, 5], result: 6 },
  ];
  const expectedNumbers = [[3, 7], null, [2, 2], [6, 2], [1, 5]];

  it('sumPairs :: should find two numbers that add up to the expected result', () => {
    numberLists.forEach(({numbers, result}, index) =>
      expect(sumPairs(numbers, result)).toStrictEqual(expectedNumbers[index])
    );
  });
});
