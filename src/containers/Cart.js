import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
// import css from './css/';
import '../App.css'



function Cart() {
  const productInCart = useSelector(state => state.cart);
  const dispatch = useDispatch()
  const removeCartHandler = (productId) => {
    dispatch(remove(productId))
    // <div class="content">
    //   <div class="header">Tom</div>
    //   Top Contributor
    // </div>
  }


  return (
    <div>
      <div className='cartTitle'><h3>Cart</h3></div>
      <div className="">
        {productInCart.map(product => (
          <div className="cart_container" key={product.id}>
            <div className='cartItem'>
              <img src={product.image} style={{ width: '200px', height:"200px",padding:"20px"}} alt="img"/>
            </div>
            <div className='cartItem'>
              <p>details</p>
              <h2 className="">{product.title}</h2>
            </div>
            <div className='cartItem'>
              <p>Price</p>
              <h2>{product.price}</h2>              
            </div>
            <div className='cartItem'>
              <button  className="ui red button"   onClick={()=>removeCartHandler(product.id)}>Remove cart</button>
            </div>

          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Cart