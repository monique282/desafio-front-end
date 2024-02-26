import { BrowserRouter, Routes } from "react-router-dom"
import Header from "./Component/Header";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} ></Route> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App