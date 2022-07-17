import { ActionTypes } from "../constant/action-types";
import fakestoreapi from "../../api/fakestoreapi"

export const fetchProduct = () => async (dispatch)=> {
  const response = await fakestoreapi.get("/products")
  dispatch({
     type: ActionTypes.FETCH_PRODUCT,
    payload: response.data
  })
}


export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products
  }
};
export const fetchSingleProduct = (id) => async (dispatch)=> {
  const response = await fakestoreapi.get(`/products/${id}`)
  dispatch({
     type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data
  })
}
export const removeselectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    
  }
};