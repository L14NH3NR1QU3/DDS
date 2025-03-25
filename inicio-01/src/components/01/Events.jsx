const Events = () => {

  const teste = (e) => {
    //props = propriedades
    // "e" = as props do evento chamado
    console.log(e);
    console.log("Testei o segundo botão com função externa");
  };

  return (
    <>
      <button  onClick={() => {console.log("Testei o primeiro botão")}}>
        Click
      </button>
      <br/><br/>
      <button onClick={teste}>
        Click two
      </button>
    </>
  );
};

export default Events;
