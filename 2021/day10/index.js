export default function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const changeInCoins = new Array(coins.length).fill(0);
  let remainingChange = change;
  let i = coins.length - 1;
  while (i >= 0) {
    const coinValue = coins[i];
    if (remainingChange >= coinValue) {
      changeInCoins[i] += Math.floor(remainingChange / coinValue);
      remainingChange = Math.floor(remainingChange % coinValue);
    }
    i--;
  }
  return changeInCoins;
}
