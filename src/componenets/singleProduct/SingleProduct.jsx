import { useLoaderData } from "react-router";
import "./SingleProduct.css"
import { CartContext } from "../../App";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";


const SingleProduct =()=> {


const {addToCartData,setAddToCartData, products} = useContext(CartContext)



const singleProduct = useLoaderData();


console.log(singleProduct);

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

    
    return (<div className="single-product-page">
         <div className="product-detail">
      <div className="product-image">
        <img src={singleProduct.image} alt={singleProduct.title} />
      </div>
      <div className="product-info">
        <h1>{singleProduct.title}</h1>
        <p className="category">{singleProduct.category}</p>
        <p className="price">${singleProduct.price.toFixed(2)}</p>
        <p className="description">{singleProduct.description}</p>
        <div className="rating">
          <span>{`Rating: ${singleProduct.rating.rate}`}</span>
          <span>{`(${singleProduct.rating.count} reviews)`}</span>
        </div>
        <div className="actions">
          <button className="btn buy-now">Buy Now</button>
          {addToCartData.some((curItem) => curItem.id === singleProduct.id) ? (
                  <button className="btn add-to-cart" onClick={() => handleRemoveFromCart(singleProduct)}>
                    Remove from Cart
                  </button>
                ) : (
                  <button className=" btn add-to-cart" onClick={() => handleAddToCart(singleProduct)}>
                    Add to Cart
                  </button>
                )}
        </div>
      </div>
          </div>

      
          <h1 className="related-product-heading">Related Products</h1>
        {products.length===0? (<div className="noItem"><h1>No item found</h1></div>): ""}
        <div className="product-list">
                 {
                   products.map((product) => {
                    if (product.category === singleProduct.category && product.id !== singleProduct.id) {
                      
                      const { title, description, category, image, price, rating } = product;
                      
                  // Ensure rating is available and has a value
                  const ratingRate = rating ? rating.rate : 0; // Default to 0 if rating is undefined
                  const ratingCount = rating ? rating.count : 0; // Default to 0 if count is undefined
                  
                  return (
                    <div key={product.id} className="product-card">
                      {/* Product Image */}
                      <div className="product-image">
                        <img src={image} alt={title} />
                      </div>
        
                      {/* Product Details */}
                      <div className="product-details">
                        <h2 className="product-title">{title}</h2>
                        {/* <p className="product-category">Category: {category}</p> */}
                        {/* <p className="product-description">{description}</p> */}
        
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
                          <button className="view"><NavLink to={`/products/${product.id}`}>view</NavLink></button>
                        </div>
                      </div>
                    </div>
                  ) 
                  }
                })}
              </div>

    </div>)
}

export default SingleProduct;