import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

// Import React Bottstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
      <Outlet />
      <NavBar />
    
    </>
  )
}

export default App;
