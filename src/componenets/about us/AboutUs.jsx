import React, { useEffect } from "react";
import "./AboutUs.css";
import UserCard from "../userCard/UserCard";

const AboutUs = ({users}) => {
   useEffect(()=>{
          window.scrollTo({
          top: 0
      })
  
      },[])
  return (
    <>
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About <img src="/Logo.png" alt="Store Logo" /></h1>
        <p>Your trusted destination for quality products.</p>
      </div>
      <div className="about-us-content">
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            At Huzefah Store, our mission is to provide exceptional quality
            products that enhance your lifestyle. We aim to ensure customer
            satisfaction through excellent service and trustworthiness.
          </p>
        </div>
        <div className="about-us-section">
          <h2>What We Offer</h2>
          <p>
            We specialize in offering a wide range of products from trusted
            manufacturers, ensuring the best value for your money. Whether
            you're looking for electronics, fashion, or home goods, we've got
            you covered.
          </p>
        </div>
        <div className="about-us-section">
          <h2>Why Choose Us?</h2>
          <p>
            We believe in transparency, quality, and commitment. With a focus on
            customer satisfaction, we strive to make your shopping experience
            seamless and enjoyable.
          </p>
        </div>
      </div>
      <div className="about-logo-container">

    <img className="about-logo" src="Logo.png" alt="store logo" />
      </div>
    </div>
    <hr />
    <div className="review-container">
      <h1>Customers reviews </h1>
      <UserCard users={users}/>  
   </div>
    </>
  );
};

export default AboutUs;
