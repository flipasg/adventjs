export default function shouldBuyFidelity(times) {
  const ticketPrice = 12;
  const fidelityCardPrice = 250;
  const discountWithFidelity = 0.75;
  const normalPrice = ticketPrice * times;
  const fidelityPrice = new Array(times + 1)
    .fill(ticketPrice)
    .reduce(
      (curr, ticketPrice, index) =>
        curr + ticketPrice * Math.pow(discountWithFidelity, index + 1),
      fidelityCardPrice
    );

  return fidelityPrice < normalPrice;
}
