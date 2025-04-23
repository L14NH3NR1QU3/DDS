// Importação dos componentes do Bootstrap
import Col from "react-bootstrap/esm/Col";

// Importação dos componentes para criar a pagina
import Cadastro from "../components/Cadastro";
import Tabela from "../components/Tabela";
import Excluir from "../components/Excluir";
import Editar from "../components/editar";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const Home = () => {

  const [editar, setEditar] = useState(true)

  const alterOp = () => {
    setEditar(!editar)
  }

  return (
      <div className="d-flex flex-wrap" style={{width: "900px"}} >
        <Col xs={6} style={{ backgroundColor: "#eee" }}>
          <Button onClick={alterOp} className="mb-4" style={{margin: "10px 25px", justifyContent: "center"}}> {editar ? "Editar" : "Cadastrar"} </Button>

          {
            editar ? <Cadastro /> : <Editar />
          }
          <Excluir />
        </Col>
        <Col xs={6} style={{ backgroundColor: "#eee" }}>
          <Tabela />
        </Col>
      </div>
  );
};

export default Home;
