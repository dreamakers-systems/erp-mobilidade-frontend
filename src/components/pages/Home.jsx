import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>
        Login: <Link to="/login">Clique aqui</Link>
      </p>
    </section>
  )
}

export default Home
