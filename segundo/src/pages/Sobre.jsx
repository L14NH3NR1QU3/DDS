import { Link } from "react-router-dom"

const Sobre = () => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <h1>Sobre</h1>
      <Link to="/infocard/1">INFO 1</Link>
      <Link to="/infocard/2">INFO 2</Link>
      <Link to="/infocard/3">INFO 3</Link>
    </div>
  )
}

export default Sobre