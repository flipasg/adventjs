export default function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  const changeInCoins = new Array(coins.length).fill(0);
  let remainingChange = change;
  let i = coins.length - 1;
  while (remainingChange > 0) {
    const coinValue = coins[i];
    if(coinValue >= remainingChange) {

      changeInCoins[i]+=remainingChange/coinValue;
      remainingChange = remainingChange%coinValue
    }
    i--;
  }
  return remainingChange;
}
