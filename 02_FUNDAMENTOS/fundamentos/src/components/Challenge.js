const Challenge = () => {
    
    const valor1 = 10;
    const valor2 = 30;

    const handleCalcula = () =>{
        alert(valor1 + valor2)
        console.log(valor1 + valor2)
    }

    return (
        <div>


        <h1>Desafio 2</h1>
        <h1>{valor1 + valor2}</h1>
        <div>
            <button onClick={handleCalcula} >Clique aqui para ver a soma</button>
        </div>


        </div>
    )


};

export default Challenge;