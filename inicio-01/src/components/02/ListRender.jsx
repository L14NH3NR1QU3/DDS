import { useState } from "react"

const ListRender = () => {
  
    const [lista, setLista] = useState([1, 2, 3, 4, 5]);
    const [num, setNum] = useState(lista[(lista.length)-1]+1);

    const [users] = useState([
        {
            id: 1,
            name: "Jesus",
            number: 25,
        },
        {
            id: 2,
            name: "Gabriel",
            number: 90,
        },
        {
            id: 3,
            name: "Uriel",
            number: 99,
        }
    ]);

    const removeItem = (itemToRemove) => {
        // Filtra os itens, excluindo o item que queremos remover
        const updatedItems = lista.filter(lista => lista !== itemToRemove);
        setLista(updatedItems);
    };

    return (
    <>
        {lista.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeItem(item)}>X</button>
          </li>
        ))}
        <br />
        <button onClick={() => {
            let newLista = [...lista, num];
            setLista(newLista);
            setNum(num+1);
        }}>
            +
        </button>
        {
            users.map((usuario) => (
                // console.log(usuario);
                <h2 style={{
                    textAlign: "initial"
                }}>
                    O nome é: {usuario.name}{usuario.number}
                </h2>
            ))
        }

    </>
  )
}

export default ListRender