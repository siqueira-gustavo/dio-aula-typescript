interface ICachorro {
  nome: string
  idade: number
  parqueFavorito?: string
}

// const meuCachorro: ICachorro = {
//   nome: 'Sheldon',
//   idade: 7
// }

type CachorroSomenteLeitura = {
  +readonly [K in keyof ICachorro]-?: ICachorro[K]
  // Ao colocar o sinal de '+' no inicio do readonly, estamos indicando a outros desenvolvedores explicitamente que estamos adionando novos itens.
  // O sinal de '-?' serve para tornar como obrigatória a inclusão de todas as chaves da interface. Neste caso, parqueFavorito deve ser incluida na classe MeuCachorro
}

class MeuCachorro implements CachorroSomenteLeitura {
  nome: string
  idade: number
  parqueFavorito!: string

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }
}

const cachorro = new MeuCachorro('Sheldon', 7)
let resultNome = cachorro.nome
let resultIdade = cachorro.idade
console.log('Nome: ', resultNome)
console.log('Idade: ', resultIdade)
