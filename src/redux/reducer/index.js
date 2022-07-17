import { combineReducers } from "redux";
import { productReducer ,selectedProductReducer} from "./productReducer";
const reducers = combineReducers({
  allProduct: productReducer,//this is the reducer key which assigne value productReducer
  product:selectedProductReducer
})
export default reducers;