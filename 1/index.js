function contarOvejas(ovejas) {
  return ovejas
    .filter(({ color }) => color === 'rojo')
    .filter(({ name }) => name.toLowerCase().indexOf('n') !== -1 && name.toLowerCase().indexOf('a')!== -1);
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
