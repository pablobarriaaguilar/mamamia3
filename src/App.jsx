import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Formulario from './components/Formulario'
import Login from './components/Login'
import Cart from './components/Cart'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav />
        <div>
 {/* <Home /> */}
      </div>


{/* <RegisterPage /> */}
{/* <LoginPage /> */}

<Cart />
      <div>

        <Footer />
      </div>
      
    </>
  )
}

export default App
