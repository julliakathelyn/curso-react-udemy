import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {

  return (
    <div>
        <h1>Desafio 4</h1>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        
        {idade >= 18 ? (
            <p> Pode tirar habilitacao</p>
        ) : (
            <p> Menor de idade nao pode tirar habilitacao</p>
        )}
        
    </div>
  )
}

export default UserDetails