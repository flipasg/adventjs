import createXmasTree from './index';

describe('day 4 :: isValid', () => {
  const treeRows = [5, 3];
  const trees = [
    `____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____`,
    `__*__\n_***_\n*****\n__#__\n__#__`,
  ];


  it('createXmasTree :: should create xmastree with correct rows', () => {
    treeRows.forEach((rows, index) =>
      expect(createXmasTree(rows)).toBe(trees[index])
    );
  });
});
