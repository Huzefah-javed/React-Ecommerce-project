import React, { useContext, useEffect, useRef, useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom"
import { CartContext } from "../../App";


const Header = () => {
  
  const {addToCartData} = useContext(CartContext)
  const [toggle, setToggle] = useState(false)

  const menuRef = useRef(null)
  const menuBar = useRef(null)
     
      
    useEffect(()=>{

      const handleMenuHideOnClickAnyWhere =(e)=>{
        if (menuRef.current && !menuRef.current.contains(e.target) && !menuBar.current.contains(e.target)) {
          setToggle(false)
        }
      }

      document.addEventListener("mousedown", handleMenuHideOnClickAnyWhere)
      return ()=> document.removeEventListener("mousedown", handleMenuHideOnClickAnyWhere)
    },[menuRef])
     

  const handleToggle =()=> {
    setToggle(!toggle)
  }


  return (
    <header className="header">
    <div className="logo"><img src="/Logo.png" alt="store logo" /></div>

    <nav className={`menu ${toggle? "showMenu": "hideMenu"}`}  ref={menuRef}>
        {window.innerWidth < 780 ?
    (<NavLink to="/cart"  className="menu-item"><div className="cart-container" onClick={handleToggle}>
      🛒
      <span className="cart-count">{addToCartData.length}</span> {/* Example cart count */}
  </div></NavLink>) : ""}
        <NavLink to="/" onClick={handleToggle} className="menu-item">Home</NavLink>
        <NavLink to="/products" onClick={handleToggle}   className="menu-item">Products</NavLink>
        <NavLink to="/blogs" onClick={handleToggle}   className="menu-item">Our Blogs</NavLink>
        <NavLink to="/about" onClick={handleToggle}  className="menu-item">About Us</NavLink>
        <NavLink to="/contact" onClick={handleToggle}   className="menu-item">Contact Us</NavLink>

    </nav>
    <div className="cart-menu">

    {window.innerWidth >= 780 ?
    (<div className="cart-container">
      <NavLink to="/cart" className="cart-icon">🛒</NavLink>
      <span className="cart-count">{addToCartData.length}</span> {/* Example cart count */}
  </div>) : ""}
    <div className="menubar" onClick={handleToggle} ref={menuBar}>
      <div className={`menuBar1 ${toggle? "menuDisplayAnimation1": "menuHideAnimation1"}`}></div>
      <div className={`menuBar2 ${toggle? "menuDisplayAnimation2": "menuHideAnimation2"}`}></div>
      <div className={`menuBar3 ${toggle? "menuDisplayAnimation3": "menuHideAnimation3"}`}></div>
    </div>
    </div>
</header>
  );
};

export default Header;

