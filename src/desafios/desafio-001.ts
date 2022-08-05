// console.log('DIO')
// console.log('TypeScript')
// 
// let i = 2
// let j = 2
// 
// function soma(a: number, b: number) {
//   return a + b
// }
// 
// let result = soma(i, j)
// 
// console.log(result)

// type IAnimal = {
//   name: string;
//   type: 'terrestre' | 'aquático';
//   makeSounding(volume: number): void
// }

interface IAnimal {
  name: string;
  type: 'terrestre' | 'aquático';
  domestic: boolean
  // makeSounding(volume: number): void
}

interface IFeline extends IAnimal {
  nightVision: boolean;
}

interface ICanine extends IAnimal {
  sizes: 'small' | 'medium' | 'large'
}

type IDomestic = ICanine | IFeline;

// const animal: IAnimal = {
//   domestic: false,
//   name: 'Elephant',
//   type: 'terrestre',
//   // makeSounding: (volume) => (`${volume}dB`)
// }

// animal.makeSounding(50)

const animal: IDomestic = {
  name: 'Dog',
  type: 'terrestre',
  sizes: 'medium',
  domestic: false,
  // makeSounding: (volume) => (`${volume}dB`)
}

const feline: IFeline = {
  name: 'Tiger',
  type: 'terrestre',
  nightVision: true,
  domestic: true
  // makeSounding: (volume) => (`${volume}dB`)
}

console.log(feline)
console.log(feline.name)
console.log(feline.type)
console.log(feline.nightVision)
// console.log(feline.makeSounding(50))
console.log(animal)
console.log(animal.name)
console.log(animal.type)
// console.log(animal.makeSounding(50))

