// Importação dos componentes do Bootstrap
import Table from "react-bootstrap/Table";
import { getFuncionarios } from "../hooks/useApi";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

const Tabela = () => {

  const [pesquisa, setPesquisa] = useState("")

  const funcionarios = getFuncionarios()

  return (
    <div>
      <h1>Tabela</h1>
      <input type="text" style={{borderRadius: "5px", margin: "10px", border: "none", height: "50px", padding: "10px"}} placeholder="id" onChange={(id) => {
        setPesquisa(id.target.value)
      }}/>
      <Button style={{margin: "10px"}}>Pesquisar</Button>
      <div  style={{ overflow: "auto"}}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {
              funcionarios
              // Aqui você está filtrando os funcionários. O filter() vai percorrer todo o array e retornar apenas os que atendem à condição
              .filter((item) => item.id.toString().includes(pesquisa))
              .map((funcionario) => (
                <tr key={funcionario.id}>
                  <td>{funcionario.id}</td>
                  <td>{funcionario.nome}</td>
                  <td>{funcionario.email}</td>
                  <td>{funcionario.tipo}</td>
                </tr>
            ))
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Tabela;
