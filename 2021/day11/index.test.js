import shouldBuyFidelity from './index';

describe('day 11 :: shouldBuyFidelity', () => {
  const testArguments = [3, 1, 100];
  const expectedResults = [
    false,
    false,
    true
  ];

  it('shouldBuyFidelity :: should return if is better to buy tickets with or without fidelity', () => {
    testArguments.forEach((times, index) =>
      expect(shouldBuyFidelity(times)).toBe(expectedResults[index])
    );
  });
});
