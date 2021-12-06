function createXmasTreeTop(width, treeHeight) {
  const treeRowCharacters = new Array(width).fill('_');

  return new Array(treeHeight)
    .fill(treeRowCharacters)
    .map((row, index) => {
      for (let i = treeHeight - 1 - index; i < treeHeight + index; i++) {
        row[i] = '*';
      }
      return row.join('');
    })
    .join('\n');
}

function createXmasTreeTrunk(width, treeHeight, trunkHeight) {
  const trunkRowCharacters = new Array(width).fill('_');
  trunkRowCharacters[treeHeight - 1] = '#';
  const trunkRow = trunkRowCharacters.join('');

  return new Array(trunkHeight).fill(trunkRow).join('\n');
}

export default function createXmasTree(height) {
  if (height < 1 || height > 100) return '';

  const width = height * 2 - 1;

  return (
    createXmasTreeTop(width, height) +
    '\n' +
    createXmasTreeTrunk(width, height, 2)
  );
}
