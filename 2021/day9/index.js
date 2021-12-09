export default function groupBy(collection, it) {
  const groupedValues = {};
  const mappedCollection = collection.map(
    typeof it === 'function' ? it : (el) => el[it]
  );
  collection.forEach((el, index) => {
    const key = mappedCollection[index];
    if (!groupedValues[key]) {
      groupedValues[key] = [];
    }
    groupedValues[key].push(el);
  });
  return groupedValues;
}
