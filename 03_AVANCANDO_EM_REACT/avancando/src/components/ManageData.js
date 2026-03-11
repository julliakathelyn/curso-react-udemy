import { useState } from "react";

const ManageData = ()=>{
    let someData = 10;
    console.log(someData)

    const[number, setNumber] = useState(20);
    console.log(number)

    return (
        <div>
            <div>
                <p>Valor: {someData}</p>
                <button onClick={() => 
                    someData = 15
                }> Mudar valor com variaveis

                </button>
            </div>

       

        <div>
            <p>Valor: {number} </p>
            <button onClick={() => setNumber(40)}>Mudar o state</button>
        </div>
 </div>
    )
}

export default ManageData;