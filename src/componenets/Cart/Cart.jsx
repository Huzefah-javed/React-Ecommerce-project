import { useContext, useEffect, useRef, useState } from "react"
import { CartContext } from "../../App"
import "./Cart.css"

export const Cart =()=> {


    
    
    
    const {addToCartData, setAddToCartData} = useContext(CartContext)
    

    const handleAddToCartDel =(id)=> {
     setAddToCartData((prev)=>{
      return  prev.filter((singleItm)=>{
            return singleItm.id !== id;
        })
     })
     
    }


    const handleQuantityInc =(productId)=> {
       
            setAddToCartData((prev)=>{
             return prev.map((curPrev)=>{
                if (curPrev.id === productId) {
                   console.log(prev);
                   return {...curPrev, price: curPrev.price + (curPrev.price / curPrev.quantity), quantity: curPrev.quantity + 1};
                }
                return curPrev;
              })
            })
        }
    const handleQuantityDec =(productId)=> {
            setAddToCartData((prev)=>{
             return prev.map((curPrev)=>{
                if (curPrev.id === productId) {
                   console.log(prev);
                   return {...curPrev, price: curPrev.price - (curPrev.price / curPrev.quantity), quantity: curPrev.quantity - 1};
                }
                return curPrev;
              })
            })
        }


    let totalPrice = 0

    return(
        <>
        <div className="main">
            <table>
            <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product price</th>
            <th>Product quantity</th>
            <th>Remove Product</th>
          </tr>
        </thead>
        <tbody>
            {
               addToCartData.map((singleCartItem, index)=>{
                 totalPrice += singleCartItem.price
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><p><img className="itemImg" src={singleCartItem.image} alt="item image" /> {singleCartItem.title.slice(1, 25)+ "..."}</p></td>
                            <td>{singleCartItem.category}</td>
                            <td>${singleCartItem.price.toFixed(2)}</td>
                            <td>
                                <div className="QuantityNo"><h2>{singleCartItem.quantity}</h2></div>
                                <div className="quantityActions">
                                    <button className="btn"  onClick={()=>handleQuantityInc(singleCartItem.id)}>+</button>
                                    <button className="btn" disabled={singleCartItem.quantity === 1} onClick={()=>handleQuantityDec(singleCartItem.id)}>-</button>
                                </div>
                            </td>
                                <td><button className="remove-btn btn" onClick={()=>handleAddToCartDel(singleCartItem.id)}>remove</button></td>
                        </tr>
                    )
                })
                    
            }
        </tbody>
            </table>
            {addToCartData.length === 0? (<div className="noItem"><h1>No item in the cart</h1></div>): ""}
            <div className="total">
                <div className="total-written">
                <p>Subtotal: $<span>{totalPrice.toFixed(2)}</span>
                </p>
                <p>Total Product{addToCartData.length > 1? "s": ""}: {addToCartData.length}</p>
                </div>
                <button className="button" disabled={addToCartData.length === 0}>Buy now</button>
            </div>
        </div>
        </>
    )

}