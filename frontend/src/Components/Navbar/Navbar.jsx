import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo_icon from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop');
    const {getTotalCartCount} = useContext(ShopContext);
    
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <Link to={'/'} ><img src={logo_icon} alt=""/></Link>
            <h1>SHOPPING</h1>
        </div>

        <ul className="navbar-menu">
            <li onClick={()=>{setMenu('shop')}}> <Link style={{textDecoration: 'none' }} to={'/'} >Shop</Link> {menu==='shop' ? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu('mens')}} > <Link style={{textDecoration: 'none' }} to={'/mens'} >Men</Link> {menu==='mens' ? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu('womens')}}> <Link style={{textDecoration: 'none' }} to={'/womens'} >Women</Link> {menu==='womens' ? <hr/> : <></>} </li>
            <li onClick={()=>{setMenu('kids')}}> <Link style={{textDecoration: 'none' }} to={'/kids'} >Kids</Link> {menu==='kids' ? <hr/> : <></>} </li>
        </ul>

        <div className="navbar-signin-cart">
            {localStorage.getItem('auth-token')
            ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>
            :<Link to={'/login'}><button>Sign In</button></Link> }
            <Link to={'/cart'} ><img src={cart_icon} alt="" /></Link>
            <div className="navbar-cart-count">{getTotalCartCount()}</div>
        </div>
    </div>
  )
}

export default Navbar
