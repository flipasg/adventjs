export default function contains(store, product) {
  const storeSections = Object.values(store);
  let isProductInTheStore = false;
  for (
    let index = 0;
    !isProductInTheStore && index < storeSections.length;
    index++
  ) {
    const element = storeSections[index];
    if (typeof element === 'object') {
      isProductInTheStore = contains(element, product);
    } else {
      isProductInTheStore = element === product;
    }
  }
  return isProductInTheStore;
}
