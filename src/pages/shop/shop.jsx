import React from 'react'
import {PRODUCTS} from "../../products";
import {Product} from "./product";
import './shop.css';
function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h2 style={{fontFamily:"sans-serif"}} className='sname' >KUNDAN ONLINE STORE</h2>
      </div>
      <div className='products'>
        {PRODUCTS.map((product)=> <Product data ={product}/>)}</div>
    </div>
  )
}

export default Shop;