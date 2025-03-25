const Time = ({
    name,
    estate,
    posicion,
    champion,
}) => {
  return (
    <div>
        <h2>Nome do time: {name}</h2>
        <h3>Estado: {estate}</h3>
        <h3>Posição: {posicion}</h3>
        {
            champion && <h3>Campeão!</h3>
            ||
            <h3>
                Não é campeão
            </h3>
        }
        <hr />
    </div>
  )
}

export default Time