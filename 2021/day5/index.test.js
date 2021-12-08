import daysToXmas from './index';

describe('day 5 :: daysToXmas', () => {
  const dateStrings = [
    'Dec 1, 2021',
    'Dec 24, 2021 00:00:01',
    'Dec 24, 2021 23:59:59',
    'December 20, 2021 03:24:00',
    'Dec 25, 2021',
    'Dec 26, 2021',
    'Dec 31, 2021',
    'Jan 1, 2022 00:00:01',
    'Jan 1, 2022 23:59:59',
  ];
  const days = [24, 1, 1, 5, 0, -1, -6, -7, -7];

  it('daysToXmas :: should count remaining days to xmas', () => {
    dateStrings.forEach((dateString, index) =>
      expect(daysToXmas(new Date(dateString))).toBe(days[index])
    );
  });
});
