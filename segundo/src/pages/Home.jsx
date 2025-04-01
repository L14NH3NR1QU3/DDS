import { Navigate } from "react-router-dom"

const Home = () => {
  const isAuth = false

  return (
    <div>
      {isAuth ? <Navigate to="/"/> : <Navigate to="/login"/>}
      Home
    </div>
  )
}

export default Home