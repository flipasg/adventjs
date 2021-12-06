export default function listGifts(letter) {
  return letter
    .split(/\s+/)
    .filter((gift) => !gift.startsWith('_'))
    .reduce((acc, obj) => {
      acc[obj] === undefined ? (acc[obj] = 1) : acc[obj]++;
      return acc;
    }, {});
}
