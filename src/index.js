import React from "react"
import ReactDOM from "react-dom/client"
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./functionBased/pages/About"
import NotMatch from "./functionBased/pages/NotMatch"
import NavBar from "./functionBased/components/NavBar"


export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<TodoContainer />}/>
          <Route path="about/*" element={<About />} />
          <Route path="*" element={<NotMatch />} />   
        </Routes>
      </Router>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)