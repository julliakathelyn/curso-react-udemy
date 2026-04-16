import React from 'react'
import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/*  1 criacao de form */}
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome"/>
            </div>
            {/* 2 label envolvendo input, esse faz a mesma coisa do que o de cima mas usa menos codigo */}

            <label>
                <span>Email:</span>
                <input type="email" name="email" placeholder="Digite seu email"/>
            </label>
            <input type="submit" value="Enviar"/>

        </form>
      
    </div>
  )
}

export default MyForm
