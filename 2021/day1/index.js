export default function contarOvejas(sheeps) {
  return sheeps
    .filter(({ color }) => color === 'rojo')
    .filter(({ name }) => name.toLowerCase().indexOf('n') !== -1 && name.toLowerCase().indexOf('a')!== -1);
}

