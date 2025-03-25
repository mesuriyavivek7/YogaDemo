import {  Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./components/Dashboard"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route  path="/dashboard" Component={Dashboard}/>
      </Routes>
    </>
  )
}

export default App
