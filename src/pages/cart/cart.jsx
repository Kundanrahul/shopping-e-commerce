import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
import { Product } from '../shop/product';
import {CartItem} from "./CartItem";
import { ShopContext } from '../../context/Shopcontext';
import {useNavigate} from "react-router-dom"
import { TextAlignCenter } from 'phosphor-react';

function Cart() {
  const {cartItems,getTotalCartAmount}= useContext(ShopContext);
  const totalAmount=getTotalCartAmount();
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1 className='ci' style={{textAlign:"center"}}>CART ITEMS</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id]!==0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount>0 ?
      <div className='checkout'>
        <p>SUBTOTAL:₹{totalAmount}</p>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
      : <h3 style={{textAlign:"center"}}>EMPTY!</h3>}
    </div>
  )
}

export default Cart;