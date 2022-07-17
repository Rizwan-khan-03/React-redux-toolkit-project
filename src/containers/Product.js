import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

function Product() {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data)
    };
    fetchProduct()
  }, []);
  const addCartHandler = (product) => {
    dispatch(add(product))
    console.log(dispatch(add(product)))
}
  return (
    <div className="ui link cards">{
      product.map(product => (
        <div className="ui card" key={product.id}>
      <div className="image" >
        <img src={product.image} style={{ width: '300px', height:"350px",padding:"20px"}} />
      </div>
      <div className="content">
        <h2 className="header">{ product.title}</h2>
        <div className="content">
          <span className="">{ product.category}</span>
        </div>
        {/* <div className="description">
          <p>{ product.description}</p>
        </div> */}
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
