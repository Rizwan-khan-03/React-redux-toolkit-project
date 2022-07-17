import { ActionTypes } from "../constant/action-types";
const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCT:
      return { ...state , product:payload};
    default:
      return state;
  }
}
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.FETCH_PRODUCT:
    return {  ...state, ...payload }
    default: 
      return state;
  }
}