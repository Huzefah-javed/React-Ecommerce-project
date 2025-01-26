// ProductPage.js
import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import "./Product.css";
import { NavLink } from "react-router-dom"
import { CartContext } from "../../App";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../api/dataApi";





function Product() {

        const [price, setPrice] = useState(1000);
        const [searchedVal, setSearchedVal] = useState("");
        const [categorySearched, setCategorySearched] = useState("")
        const [ratingSearched, setRatingSearched] = useState("")
        const [toggle, setToggle] = useState(false);
        const [productDisplay, setProductDisplay] = useState(false);

        const {addToCartData, setAddToCartData,  productViewLoading} = useContext(CartContext)

        const {data, isLoading, isError, error} =  useQuery({
            queryKey : ['products'],
            queryFn : getAllProducts
         })

  const filterRef = useRef(null)
  const filterBtn = useRef(null)



  useEffect(()=>{
            const handleFilterHideOnClickAnywhere =(e)=> {
              if(filterRef.current && !filterRef.current.contains(e.target) && !filterBtn.current.contains(e.target)){
                setToggle(false)
              }
            }
         window.addEventListener("mousedown", handleFilterHideOnClickAnywhere)
      return ()=>  window.removeEventListener("mousedown", handleFilterHideOnClickAnywhere)
  },[])


  const handleFilterDisplay =()=> {
    setToggle(!toggle)
  }


  const handleToggleProductGridDisplay =()=>{
    setProductDisplay(false)
  }
  const handleToggleProductListDisplay =()=> {
    setProductDisplay(true)
  }





const handleAddToCart =(product)=>{
      product["quantity"] = 1
    setAddToCartData((prev)=>{
      return [...prev, product]
  })
}

const handleRemoveFromCart =(product)=> {
  setAddToCartData((prev)=>{
   return prev.filter((curPrev)=>{
        return curPrev.id !== product.id
    })
  })
}


         let productData = searchedVal ? data?.filter((curElem)=>{
            return curElem.title.toUpperCase().includes(searchedVal.toUpperCase())
      }): data || [];


     const filteredData = categorySearched? productData.filter((curElem)=>{
        return curElem.category === categorySearched
  }): productData;


  const priceRange = price? filteredData.filter((curElem)=>{
    return curElem.price <= price
   }): filteredData;


   const ratingData = ratingSearched? priceRange.filter((curElem)=>{
    return curElem.rating.rate.toFixed(0) >= ratingSearched
   }): priceRange

  //  const ratingData = abcd.sort((a, b)=>{
  //    return b.price - a.price // a.price - b.price

   //  })    it help in sorting the products by price



   return (
     <div className="product-page">

         <div className="cart-on-page">
                  <NavLink to="/cart" className="cart-icon">🛒</NavLink>
                  <span className="cart-count">{addToCartData.length}</span> {/* Example cart count */}
              </div>

      <div className="product-heading">
        <h1>Explore Our Latest Products</h1>
        <p>Find the best products handpicked just for you! Browse through our latest collection and grab your favorites.</p>
      </div>

        {
          window.innerWidth <= 1000? (<div className="filter-item">
            <label htmlFor="search">Search Products:</label>
            <div className="filterMainSmallScreen">
            <input
              type="text"
              id="search"
              placeholder="Search for products..."
              className="filter-input"
              value={searchedVal}
              onChange={(e)=> setSearchedVal(e.target.value)}
              />
              <div className="filter-btns">
            <button onClick={handleFilterDisplay} className="filter-smallScreen" ref={filterBtn}><FaFilter /> {toggle? <IoIosArrowDown />: <IoIosArrowUp />}</button>

              <button disabled={!productDisplay} onClick={()=>handleToggleProductGridDisplay()} className="displayGrid"><BsGrid3X3GapFill /></button>
              <button disabled={productDisplay} onClick={()=>handleToggleProductListDisplay()} className="displayList"><FaList /></button>

              </div>

            </div>
          </div>) : ""
        }

      <div className={`product-filters ${toggle? "showFilter": "hideFilter"}`} ref={filterRef}>
        {/* Search Bar */}
       {window.innerWidth > 1000?(
         <div className="filter-item">
         <label htmlFor="search">Search Products:</label>
         <input
           type="text"
           id="search"
           placeholder="Search for products..."
           className="filter-input"
           value={searchedVal}
           onChange={(e)=> setSearchedVal(e.target.value)}
         />
       </div>
       ) : ""
      }

        {/* Category Select */}
        <div className="filter-item">
          <label htmlFor="category">Category:</label>
          <select id="category" className="filter-select"
           value={categorySearched}
           onChange={(e)=> setCategorySearched(e.target.value)}>
            <option value="">All Categories</option>
            <option value="jewelery">jewelry</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>

        {/* Price Slider */}
        <div className="filter-item">
          <label htmlFor="price">Minimum Price: <strong>${price}</strong></label>
          <input
            type="range"
            id="price"
            min="0"
            max="1000"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="filter-slider"
          />
        </div>

        {/* Rating Select */}
        <div className="filter-item">
          <label htmlFor="rating">Minimum Rating:</label>
          <select id="rating" className="filter-select" value={ratingSearched} onChange={(e)=>setRatingSearched(e.target.value)}>
            <option value="">Any Rating</option>
            <option value="1">1 and greater stars</option>
            <option value="2">2 and greater stars</option>
            <option value="3">3 and greater stars</option>
            <option value="4">4 and greater stars</option>
            <option value="5">5 stars</option>
          </select>
        </div>
      </div>





    {ratingData.length===0 && !isLoading && !isError? (<div className="noItem"><h1>No item found</h1></div>): ""}



      <div className={` ${productDisplay? "":"product-list"}`}>
        {isLoading?
        (  <>
        { [...Array(8)].map(()=>(

          <div className="loading-cart">
        <div className="loader-img"><h4>Huzefah Store</h4></div>
        <div className="loader-title"></div>
        <div className="loader-rating">★★★★★(000 reviews)</div>
        <div className="loader-price"></div>
        <div className="loader-btns">
          <button></button>
          <button></button>
        </div>
       </div>
        ))
    }
       </>)
         :
          !isError? ratingData.map((product) => {
          const { title, description, category, image, price, rating } = product;

          // Ensure rating is available and has a value
          const ratingRate = rating ? rating.rate : 0; // Default to 0 if rating is undefined
          const ratingCount = rating ? rating.count : 0; // Default to 0 if count is undefined

          return ( <>
            <div key={product.id} className={`${productDisplay? "product-details-Flex":"product-card"}`}>
              {/* Product Image */}
              <div className={`${productDisplay? "product-img-List":"product-image"}`}>
                <img src={image} alt={title} loading="lazy" />
              </div>

              {/* Product Details */}
              <div className={`${productDisplay? "product-Content-Flex": "product-Content-Grid"}`}>
                <h2 className="product-title">{productDisplay? title.substring(0, 50) + '...' : title.substring(0, 25) + '...'}</h2>
                <div className="product-rating">
                  <span className="rating-stars">
                    {[...Array(5)].map((_, index) => (

                        <span
                        key={index}
                        className={index < ratingRate.toFixed(0) ? "star-filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  </span>
                  <span className="rating-count">({ratingCount} reviews)</span>
                </div>

                <div className="product-price">
                  <span>${price}</span>
                </div>

                <div className="product-actions">

                {addToCartData.some((curItem) => curItem.id === product.id) ? (
                  <button className="remove-from-cart" onClick={() => handleRemoveFromCart(product)}>
                    Remove from Cart
                  </button>
                ) : (
                  <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                )}
                  <button className="view"><NavLink to={`/products/${product.id}`}>Detail</NavLink></button>
                </div>
              </div>
            </div>
          </>);
        }): (<div className="error-main">
             <h1>Error: {error}</h1>
             <h1>or Internet problem</h1>

             </div>)}
      </div>
    </div>
  );
  }


export default Product;
