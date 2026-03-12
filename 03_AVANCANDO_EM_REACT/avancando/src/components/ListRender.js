import {useState} from 'react'

const ListRender = () => {

    const [list] =useState(["Jullia", "Maria", "Pedro"]);
    const [users, setUsers] = useState ([
        {id: 1, name: "Kathelyn", age: 22},
        {id: 2, name: "Patricia", age: 4},
        {id: 102983, name: "Geovanna", age: 33}
    ]);

    const deleterandom = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

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

        <p>quando queremos consultar um valor antigo e fazer uma manipulacao baseada nesse valor</p>
        <button onClick={deleterandom}>Delete random user</button>
    </div>
  )
}

export default ListRender