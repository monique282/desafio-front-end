import { BrowserRouter,Route, Routes } from "react-router-dom"
import Header from "./Component/Header";
import Home from "./Component/Home"

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
         <Route path="/" element={<Home />} ></Route> 
        </Routes>
    </BrowserRouter>
  )
}

export default App