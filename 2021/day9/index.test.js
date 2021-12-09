import groupBy from './index';

describe('day 9 :: groupBy', () => {
  const testArguments = [
    { collection: [6.1, 4.2, 6.3], it: Math.floor },
    { collection: ['one', 'two', 'three'], it: 'length' },
    { collection: [{ age: 23 }, { age: 24 }], it: 'age' },
    {
      collection: [1397639141184, 1363223700000],
      it: (timestamp) => new Date(timestamp).getFullYear(),
    },
    {
      collection: [
        { title: 'JavaScript: The Good Parts', rating: 8 },
        { title: 'Aprendiendo Git', rating: 10 },
        { title: 'Clean Code', rating: 9 },
      ],
      it: 'rating',
    },
  ];
  const expectedResults = [
    { 6: [6.1, 6.3], 4: [4.2] },
    { 3: ['one', 'two'], 5: ['three'] },
    { 23: [{ age: 23 }], 24: [{ age: 24 }] },
    { 2013: [1363223700000], 2014: [1397639141184] },
    {
      8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
      9: [{ title: 'Clean Code', rating: 9 }],
      10: [{ title: 'Aprendiendo Git', rating: 10 }],
    },
  ];

  it('groupBy :: should group by a prop or function', () => {
    testArguments.forEach(({collection, it}, index) =>
      expect(groupBy(collection, it)).toStrictEqual(expectedResults[index])
    );
  });
});
