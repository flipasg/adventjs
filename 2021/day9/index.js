export default function groupBy(collection, it) {
  return collection.reduce((groupedValues, el) => {
    const key = typeof it === 'function' ? it(el) : el[it];
    if (!groupedValues[key]) {
      groupedValues[key] = [];
    }
    groupedValues[key].push(el);
    return groupedValues;
  }, {});
}
