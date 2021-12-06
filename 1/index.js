export default function contarOvejas(ovejas) {
  return ovejas
    .filter(({ color }) => color === 'rojo')
    .filter(({ name }) => name.toLowerCase().indexOf('n') !== -1 && name.toLowerCase().indexOf('a')!== -1);
}

