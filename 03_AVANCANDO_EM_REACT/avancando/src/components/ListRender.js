import {useState} from 'react'

const ListRender = () => {

    const [list] =useState(["Jullia", "Maria", "Pedro"]);
    const [users] = useState ([
        {id: 1, name: "Kathelyn", age: 22},
        {id: 2, name: "Patricia", age: 4},
        {id: 102983, name: "Geovanna", age: 33}
    ]);

  return (
    <div>
        <h2>Renderizacao de listas</h2>
        <p>para fazer a funcao com objetos usamos () em vez de {} </p>
        <p> array list </p>
        <p> metodo map</p>
        <p> arrow function</p>
        <p> react precisa de uma key unica em cada obj iterado na lista</p>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
            <h2>abaixo usamos user.id em vez do index que gera o id sozinho </h2>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender