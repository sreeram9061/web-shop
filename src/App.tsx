import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import Favorite from "./pages/Favorite"

function App() {


  return (
    <>
        <Header/>
        <Wrapper>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/product/:id" element={<Product/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/favorite" element={<Favorite/>}/>
            </Routes>
        </Wrapper>
    </>
  )
}

export default App
