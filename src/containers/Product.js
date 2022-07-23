import React, { useState, useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProduct } from '../store/ProductSlice';
import {STATUSES} from '../store/ProductSlice'
function Product() {
  // const [product, setProduct] = useState([]);
  const {data,status} = useSelector((state)=>state.products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct())
    // const fetchProduct = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProduct(data)
    // };
    // fetchProduct()
  }, []);
  const addCartHandler = (product) => {
    dispatch(add(product))
    // console.log(dispatch(add(product)))
   console.log(dispatch(product))
  }
  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>
  }
   if (status === STATUSES.ERROR) {
    return <h2>something went wrong</h2>
  }
  return (
    <div className="ui link cards">
      {
      data.map(product => (
        <div className="ui card" key={product.id}>
      <div className="image" >
        <img src={product.image} style={{ width: '300px', height:"350px",padding:"20px"}} />
      </div>
      <div className="content">
        <h2 className="header">{ product.title}</h2>
        <div className="content">
          <span className="">{ product.category}</span>
        </div>
      </div>
      <div className="">
            <h2 className="header" style={{ padding:"20px"}} >{product.price}</h2>
      </div>
        <div className="extra content">
          <button className="ui green button" onClick={()=>addCartHandler(product)}>Add cart</button>
        </div>
    </div>
      ))
    }
    </div>
  )
}

export default Product;
