const Cantores = (props) => {
  console.log(props);
  return (
    <div>
        <h3>Cantor: {props.name}</h3>
        <h3>Genero: {props.musicStile}</h3>
        {props.primium && 
        <h3>Premiado</h3> 
        ||
        <h3>Não premiado</h3>}
        <hr />
    </div>
  )
}

export default Cantores