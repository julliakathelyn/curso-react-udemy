import React from 'react'
import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')

    const handleName = (e) => {
        console.log(e.target.value)
    }

    console.log(name)


  return (
    <div>
        {/*  1 criacao de form */}
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={handleName}/>
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
