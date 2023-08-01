import { Routes, Route, Link } from "react-router-dom"
import Blue from "./Blue.jsx"
import Red from "./Red.jsx"
import Home from "./Home.jsx"
import Chimi from "./Chimi.jsx"
import Jon from "./Jon.jsx"
function App() {

  return (
    <>
      <div id="container">
        <h1></h1>
      <div id="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/blue">
          Blue
        </Link>
        <Link to="/red">
          Red
        </Link>
        <Link to="/jon">
          Jonathan
        </Link>
        <Link to="/chimi">
          Tyler
        </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/jon" element={<Jon />} />
          <Route path="/chimi" element={<Chimi />} />
        </Routes>
      </div>
      </div>
     </>
  )
}

export default App
