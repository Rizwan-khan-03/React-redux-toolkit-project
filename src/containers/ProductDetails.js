import React, { useEffect} from "react";
//'https://fakestoreapi.com/products/1'
import { useSelector, useDispatch } from "react-redux";
import {useParams} from 'react-router-dom'
// import ProductComponent from "./ProductComponent";
import {fetchSingleProduct , removeselectedProduct} from '../redux/action/productAction'
import axios from "axios";
const ProductDetails = () => {
  const product = useSelector((state) => state);
  console.log(product);
// destructuring
  const { image, title, category, price, description } = product;
   const {productId} = useParams();
  const dispatch = useDispatch()
  console.log("productId",productId);
  // fetch api 
  // const fetchProductDetails = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .catch((err) => {
  //       console.log("err", err)
  //       console.log("response", response)
  //     })
  //   // .then(res=>res.json())   
  //   // .then(json=>console.log(json))
    
  //   dispatch(selectedProduct(response.data));
  //   console.log( 'selectedProduct',response.data)
  // };
  // useEffect for calling fetc api data  React.useEffect
  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchSingleProduct());
    return () => {
      dispatch(removeselectedProduct())
    }
  },[productId])
  return (
    <div className="ui grid container"> 
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
         <div class="ui segment">
  <div class="ui two column very relaxed grid">
    <div class="column">
      <img className="ui fluid image" src={image}></img>
    </div>
    <div class="column">
    <h1>{ title}</h1>
                <h2><a className="ui teatl tag label">${price }</a></h2>
                <h3 className="ui brown block header">{category }</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex='0'>
                  <div className='hidden content'>
                    <i className='shop icon'></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
    </div>
  </div>
  <div class="ui vertical divider">
    and
  </div>
</div>
      )}
     
    
    </div>
  )
}
export default ProductDetails