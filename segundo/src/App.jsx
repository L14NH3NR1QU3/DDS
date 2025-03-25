import { useState } from 'react'
import './App.css'
import ShowUserName from './components/ShowUserName';
import Time from './components/Time';
import Cantores from './components/Cantores';

function App() {
  const name = "Lian";
  const [otherName] = useState("Henrique");

  let nj = 6;
  let titulo = true;

  const [cantores] = useState([{
    id: 1,
    name: "IceCube",
    musicStile: "Trap",
    primium: true,
  },{
    id: 2,
    name: "Mychael Jackson",
    musicStile: "Pop",
    primium: true,
  },{
    id: 3,
    name: "Pipokinha",
    musicStile: "Funk",
    primium: false,
  }]);

  return (
    <div>
      <div>
        {/* Renderizando componente com props */}
        <ShowUserName 
          name={name}
          otherName={otherName}
        />

        {/* Props com desestruturação */}
        {/* <Time 
          name="Ali"
          estate="ES"
          posicion={10}
          champion={false}
        />
        <Time 
          name="Pra La"
          estate="ES"
          posicion={11}
          champion={false}
        />
        <Time 
          name="Por Aqui"
          estate="ES"
          posicion={9}
          champion={true}
        /> */}
        </div>
        {
          cantores.map((cantor) => (
            <Cantores
              key = {cantor.id} 
              name = {cantor.name}
              musicStile = {cantor.musicStile}
              primium = {cantor.primium}
            />
          ))
        }
        <h2 
        style={nj > 5 ? 
        {
          color:"green", 
          backgroundColor:"yellow", 
          fontSize:"30px"}
        :
        {
          color:"red",
          backgroundColor:"blue",
          fontSize:"30px"
        }}>
        Dinamico
        </h2>
        <h2
        style={nj < 5 ? 
          {
            color:"green", 
            backgroundColor:"yellow", 
            fontSize:"30px"}
          :
          {
            color:"red",
            backgroundColor:"blue",
            fontSize:"30px"
          }}>
            Este css é Dinamico
        </h2>
        <h1
        className={
          titulo ? "titulo-incrivel" : "texto-paia"
        }>
          Titulo incrivel pra teste
        </h1>
    </div>
  )
}

export default App
