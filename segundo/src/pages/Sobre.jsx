import { Link } from "react-router-dom"

const Sobre = () => {
  return (
    <div>
      <h1>Sobre</h1>
      <div><Link to="/infocard/1">INFO 1</Link></div>
      <div><Link to="/infocard/2">INFO 2</Link></div>
      <div><Link to="/infocard/3">INFO 3</Link></div>
    </div>
  )
}

export default Sobre