function listGifts(letter) {
  return letter
    .split(/\s+/)
    .filter((gift) => !gift.startsWith('_'))
    .reduce((acc, obj) => {
      acc[obj] === undefined ? acc[obj] = 1 : acc[obj]++;
      return acc;
    }, {});
}

const carta = 'bici coche balón _playstation bici coche peluche';

const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
