import { createBrowserRouter } from "react-router-dom";

//Importação das páginas
import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Cadastro from "./pages/Cadastro.jsx"
import Contato from "./pages/Contato.jsx"
import Sobre from "./pages/Sobre.jsx"
import Infocard from "./components/Infocard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/contato",
        element: <Contato />
      },
      {
        path: "/sobre",
        element: <Sobre />
      },
      {
        path: "/infocard/:id",
        element: <Infocard />
      },
    ],
  },
]);

export default router