import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProduct,fetchProduct } from '../redux/action/productAction';
import ProductComponent from './ProductComponent'
import axios from "axios";


const ProductListing = () => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch()
  console.log(product);
  // fetch api 
  // const fetchProduct = async () => {
  //   const response = await axios
  //     .get('https://fakestoreapi.com/products')
  //     .catch((err) => {
  //       console.log("err", err)
  //     });
  //   dispatch(setProduct(response));
  //   console.log(response)
  // };
  // useEffect for calling fetc api data
  useEffect(() => {
    dispatch(fetchProduct())
  } ,[])
console.log("product : " , product)
  
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}
export default ProductListing;