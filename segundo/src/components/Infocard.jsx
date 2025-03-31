import { useNavigate, useParams } from "react-router-dom"

const Infocard = () => {
    const {id} = useParams()

    const navigate = useNavigate()

    const VoltarHome = () => {
        navigate("/")
    }
    console.log("ID:", id)

  return (
    <div>
        Infocard do cartão: {id}
        <div>
            <button onClick={VoltarHome}>Voltar</button>
        </div>
    </div>
  )
}

export default Infocard