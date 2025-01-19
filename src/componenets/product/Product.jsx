// ProductPage.js
import React, { useContext, useEffect, useRef, useState } from "react";
import "./Product.css"; 
import { NavLink } from "react-router-dom"
import { CartContext } from "../../App";





function Product() {

  const [price, setPrice] = useState(1000); 
        const [searchedVal, setSearchedVal] = useState("");
        const [categorySearched, setCategorySearched] = useState("")
        const [ratingSearched, setRatingSearched] = useState("") 
        const [loading, setLoading] = useState(true); 
        const [error, setError] = useState(null); 
        const {addToCartData, setAddToCartData, products, setProducts, productViewLoading} = useContext(CartContext)
        const [toggle, setToggle] = useState(false); 
        const [productDisplay, setProductDisplay] = useState(false); 
        
        console.log(addToCartData);
        
  

  const filterRef = useRef(null)
  const filterBtn = useRef(null)
  console.log("filterRef", filterRef);
  


  useEffect(()=>{
            const handleFilterHideOnClickAnywhere =(e)=> {
              if(filterRef.current && !filterRef.current.contains(e.target) && !filterBtn.current.contains(e.target)){
                setToggle(false)
              }
            }
         window.addEventListener("mousedown", handleFilterHideOnClickAnywhere)
      return ()=>  window.removeEventListener("mousedown", handleFilterHideOnClickAnywhere)
  },[filterRef])


  const handleFilterDisplay =()=> {
    setToggle(!toggle)
  }


  const handleToggleProductGridDisplay =()=>{
    setProductDisplay(false)
  }
  const handleToggleProductListDisplay =()=> {
    setProductDisplay(true)
  }


  const fetchProductsData = async () => {
    setLoading(true);
    try {
      const responseProduct = await fetch("https://fakestoreapi.com/products");

      if (!responseProduct.ok) {
        throw new Error('Network response was not ok');
      }
      const productData = await responseProduct.json();
           setProducts(productData)  
    } catch (err) {
     return setError(err.message);
    } finally {
     return setLoading(false); 
    }
  };






useEffect(()=>{
  fetchProductsData()
},[])




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


         let data = searchedVal ? products.filter((curElem)=>{
            return curElem.title.toUpperCase().includes(searchedVal.toUpperCase())   
      }): products;
    

     const filteredData = categorySearched? data.filter((curElem)=>{
        return curElem.category === categorySearched
  }): data;

  
  const priceRange = price? filteredData.filter((curElem)=>{
    return curElem.price <= price
   }): filteredData;


   const ratingData = ratingSearched? priceRange.filter((curElem)=>{
    return curElem.rating.rate.toFixed(0) <= ratingSearched
   }): priceRange
   
  //  const ratingData = abcd.sort((a, b)=>{
  //    return b.price - a.price // a.price - b.price
      
   //  })    it help in sorting the products by price 
    
       if (error) return <p>Error: {error}</p>;


   return (
     <div className="product-page">


      <div className="product-heading">
        <h1>Explore Our Latest Products</h1>
        <p>Find the best products handpicked just for you! Browse through our latest collection and grab your favorites.</p>
      </div>

        {
          window.innerWidth <= 1000? (<div className="filter-item">
            <label htmlFor="search">Search Products:</label>
            <input
              type="text"
              id="search"
              placeholder="Search for products..."
              className="filter-input"
              value={searchedVal}
              onChange={(e)=> setSearchedVal(e.target.value)}
            />
          </div>) : ""
        }
            <div className="filterMainSmallScreen">
            <button onClick={handleFilterDisplay} className="filter-smallScreen" ref={filterBtn}>Filter {toggle? "↓": "↑"}</button>
            
              <button onClick={()=>handleToggleProductGridDisplay()} className="displayGrid">Grid Display</button>
              <button onClick={()=>handleToggleProductListDisplay()} className="displayList">List display</button>
              
          
            </div>

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
          <label htmlFor="price">Minimum Price:</label>
          <input
            type="range"
            id="price"
            min="0"
            max="1000"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            className="filter-slider"
          />
          <h3>{price}$</h3>
        </div>
      
        {/* Rating Select */}
        <div className="filter-item">
          <label htmlFor="rating">Minimum Rating:</label>
          <select id="rating" className="filter-select" value={ratingSearched} onChange={(e)=>setRatingSearched(e.target.value)}>
            <option value="">Any Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
      </div>
      
     
       
    
   
    {ratingData.length===0 && !loading? (<div className="noItem"><h1>No item found</h1></div>): ""}
   


      <div className={` ${productDisplay? "":"product-list"}`}>
        {loading?
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
          ratingData.map((product) => {
          const { title, description, category, image, price, rating } = product;

          // Ensure rating is available and has a value
          const ratingRate = rating ? rating.rate : 0; // Default to 0 if rating is undefined
          const ratingCount = rating ? rating.count : 0; // Default to 0 if count is undefined

          return (
            <div key={product.id} className={`${productDisplay? "product-details-Flex":"product-card"}`}>
              {/* Product Image */}
              <div className={`${productDisplay? "product-img-List":"product-image"}`}>
                <img src={image} alt={title} />
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
          );
        })}
      </div>
    </div>
  );
  }


export default Product;
