export default function maxProfit(prices) {
  let count = prices.length / 2;
  let remainingPrices = prices.slice(0);
  do {
    const min = Math.min(...remainingPrices);
    const max = Math.max(...remainingPrices);
    const indexOfMinNumber = remainingPrices.indexOf(min);
    const indexOfMaxNumber = remainingPrices.indexOf(max);
    if(indexOfMaxNumber > indexOfMinNumber){
      return max - min;
    }
    remainingPrices.splice(remainingPrices.indexOf(min), 1);
    remainingPrices.splice(remainingPrices.indexOf(max), 1);
    count--;
  } while (count > 0);
  return -1;
}
