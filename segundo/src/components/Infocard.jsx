import { useNavigate, useParams } from "react-router-dom"

const Infocard = () => {
    const {id} = useParams()

    const navigate = useNavigate()

    const VoltarHome = () => {
        navigate("/sobre")
    }
    console.log("ID:", id)

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        Infocard do cartão: {id}
        <button onClick={VoltarHome}>Voltar</button>
    </div>
  )
}

export default Infocard