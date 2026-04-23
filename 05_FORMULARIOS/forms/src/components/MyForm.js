import React from 'react'
import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user)

    const handleName = (e) => {
        console.log(e.target.value)
        
    }



    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Enviando o formulário')
        console.log(name, email, bio)


        {/* 7 limpando form */ }
        setName('');
        setEmail('');
        setBio('');
    };

    const [bio, setBio] = useState('')

    return (
        <div>
            {/*  1 criacao de form */}
            {/* 5 envio de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name}
                    />
                </div>
                {/* 2 label envolvendo input, esse faz a mesma coisa do que o de cima mas usa menos codigo */}

                <label>
                    <span>Email:</span>
                    {/* 4 Simplificação de manipulação de state */}
                    <input type="email"
                        name="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/* 8 textarea */}
                <label>
                    <span>Mensagem:</span>
                    <textarea
                        name="message"
                        placeholder="Digite sua mensagem"
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}
                    ></textarea>
                </label>
                <input type="submit" value="Enviar" />

            </form>

        </div>
    )
}

export default MyForm
