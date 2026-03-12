import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("Jullia")

  return (
    <div>
        <h1>Isso sera exibido? Condicionais </h1>
        <p>isso e uma condicional usando && </p>
        {x && <p> se x for true , sim</p>}
        {!x && <p> agora x e falso</p>}
        <hr />
        {name === "Jullia" ? (
            <div> 
                <p>O nome e Jullia</p>
            </div>
        ) : (
            <div> 
                <p>Nome nao encontrado</p>
            </div>
        )}
        <button onClick={() => setName("Joao")}> Clica aqui para rerenderizar o nome jullia para joao e fazer a verificacao condicional </button>

    </div>
  )
}

export default ConditionalRender