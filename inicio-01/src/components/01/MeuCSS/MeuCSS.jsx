import "./MeuCSS.css"

const MeuCSS = () => {
  return (
    <>
        <h1>Titulo</h1>
        <p className="azul">p1</p>
        <p>p2</p>
        <p style={{
            color: "green",
            backgroundColor: "yellow",
            fontSize: "80px"
        }}>
            p2
        </p>
    </>
  )
}

export default MeuCSS