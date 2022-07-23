const { createSlice } = require('@reduxjs/toolkit');

export  const STATUSES = Object.freeze({
  IDLE: "idel",
  
  ERROR: 'error',
  
  LOADING :'loading'
})
const productSlice = createSlice({

  name: "products",
  initialState: {
    data: [],
    status:STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action){
        state.data = action.payload;
      },
         setStatus(state, action){
        state.status = action.payload;
      },
        //  remove(state, action){
        //    return state.filter((item)=>item.id !== action.payload)
        // },
    }
});
// const { actions, reducer } = createSlice.action;
export const { setProducts,setStatus} =  productSlice.actions;
export default productSlice.reducer;

// Thanks
export function fetchProduct() {
  return async function fetchProductThank(dispatch,getState){
  dispatch(setStatus(STATUSES.LOADING));
  try {
     const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    dispatch(setProducts(data));
    dispatch(setStatus(STATUSES.IDLE));
  } catch (error){
    console.log(error);
    dispatch(setStatus(STATUSES.ERROR));

  }
  }
}