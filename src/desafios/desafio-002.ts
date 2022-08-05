// const input = document.getElementById('input') as HTMLInputElement
//
// input.addEventListener('input', (event) => {
//   // console.log('Digitei')
//   const i = event.currentTarget as HTMLInputElement
//   console.log(i.value)
// })

// Generic types

function adicionarApendiceALista<T>(array: T[], valor: T) {
  // return array.map((item) => item + valor)
  return array.map(() => valor)
}

adicionarApendiceALista([1, 2, 3], 1)
adicionarApendiceALista(['A', 'B', 'C'], 'd')
// adicionarApendiceALista([1, 2, 3], 'd')
