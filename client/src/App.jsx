import { BrowserRouter, Routes, Route }  from "react-router-dom"
import Home from "./Pages/Home"
import Dashboard from "./Pages/Dashboard"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import About from "./Pages/About"
import Projects from "./Pages/Projects"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/SignIn" element={<SignIn />} />
         <Route path="/SignUp" element={<SignUp />} />
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/Projects" element={<Projects />} />
         
          
      </Routes>
    </BrowserRouter>
  )
}

 

