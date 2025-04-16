// Importação dos componentes do Bootstrap
import Table from "react-bootstrap/Table";
import { getFuncionarios } from "../hooks/useApi";

const Tabela = () => {

  const funcionarios = getFuncionarios()

  return (
    <div>
      <h1>Tabela</h1>
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
              funcionarios.map((funcionario) => (
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
