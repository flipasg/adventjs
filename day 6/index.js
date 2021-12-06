export default function sumPairs(numbers, result) {
  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    const otherNumber = numbers
      .filter((num, otherIndex) => index !== otherIndex)
      .find((num) => num + number === result);
    if (otherNumber) {
      return [number, otherNumber];
    }
  }
  return null;
}
