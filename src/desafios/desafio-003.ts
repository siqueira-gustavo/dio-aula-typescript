interface IUsuario {
  id: string
  email: string
  cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor'
  // O ponto de interrogação indica que este é um item opcional
}

function redirecione(usuario: IUsuario) {
  if (usuario.cargo) {
    // se possue um cargo de chefia, será redirecionado para a área relacionada
  } else {
    // se for usuário comum (um funcionário apenas), será redirecionado para áera comum de usuários
  }
}

// interface IAdmin extends IUsuario {
//   cargo: 'gerente' | 'coordenador' | 'supervisor'
// }
//
// function redirecione(usuario: IUsuario | IAdmin) {
//   if ('cargo' in usuario) {
//     // redirecione para a área de administração
//   } else {
//     // redirecione para a área de usuario
//   }
// }
