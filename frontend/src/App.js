import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import banner_mens from './Components/Assets/banner_mens.png'
import banner_women from './Components/Assets/banner_women.png'
import banner_kids from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Shop/>} />
              <Route path='/mens' element={<ShopCategory banner={banner_mens} category='men'/>} />
              <Route path='/womens' element={<ShopCategory banner={banner_women} category='women' />} />
              <Route path='/kids' element={<ShopCategory banner={banner_kids} category='kid' />} />
              <Route path='/product' element={<Product/>} >
                <Route path=':productId' element={<Product/>} />
              </Route>
              <Route path='/login' element={<LoginSignUp/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
