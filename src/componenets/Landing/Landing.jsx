import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import UserCard from "../userCard/UserCard";
import { NavLink } from "react-router-dom";
const Landing = () => {

  const landingPhotosContainer = useRef(null)
  
  useEffect(()=>{
    const interval = setInterval(()=>{
      console.log(landingPhotosContainer.current.scrollWidth , landingPhotosContainer.current.scrollLeft + landingPhotosContainer.current.clientWidth)
      
        if (landingPhotosContainer.current.scrollWidth !== landingPhotosContainer.current.scrollLeft + landingPhotosContainer.current.clientWidth) {
          
       
            landingPhotosContainer.current.scrollBy({
              left: landingPhotosContainer.current.clientWidth,
              behavior: "smooth",
            }) 
          }else{
            landingPhotosContainer.current.scrollTo({
              left: 0,
              behavior: "smooth",
          })        
        }
      
      
      }, 7000) 
      
      return ()=> clearInterval(interval)
    },[landingPhotosContainer])


  return (
    <>
    <div className="landing-page">
      {/* Hero Section */}
        <div className="hero-content" ref={landingPhotosContainer}>
          <div className="img1 img">
          <div className="content">
        <h1>Your Ultimate Shopping Destination</h1>
       <p>Find everything you love, in one place.</p>
        <NavLink to="/products"><button>Shop Now</button></NavLink>
        </div>
          </div>
          <div className="img2 img">
          <div className="content">
            <h1>New Arrivals Are Here</h1>
            <p>Check out the latest trends and styles.</p>
            <NavLink to="/products">
              <button>See What's New</button>
            </NavLink>
          </div>
          </div>
          <div className="img3 img">
          <div className="content">
            <h1>Discover Timeless Classics</h1>
            <p>Explore products that never go out of style.</p>
            <NavLink to="/products">
              <button>Shop Classics</button>
            </NavLink>
          </div>

          </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <h2>Explore Categories</h2>
        <div className="categories">
          <div className="category">
            <img src="electronics.avif" alt="Electronics" />
            <p>Electronics</p>
          </div>
          <div className="category">
            <img src="fashion.jpg" alt="Fashion" />
            <p>Fashion</p>
          </div>
          <div className="category">
            <img src="home.jpg" alt="Home Essentials" />
            <p>Home Essentials</p>
          </div>
        </div>
      </div>
      <div className="hero-secondary">
  <div className="secondary-content">
    <h1>Shop the Best Deals</h1>
    <p>
      Explore a wide range of premium products at unbeatable prices. From electronics to clothing, we've got you covered.
    </p>
    <NavLink to="/products"><button className="hero-btn">Start Shopping</button></NavLink>
  </div>
  <div className="secondary-image">
    <img
      src="https://plus.unsplash.com/premium_photo-1661368873079-5ccd41284d1d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Shopping Deals"
      />
  </div>
</div>
  <div className="review-container">
      <h1>Customers' reviews for our store</h1>
      <UserCard />  
   </div>
    </div>
      </>
  );
};

export default Landing;
