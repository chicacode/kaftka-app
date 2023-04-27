import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import cartReducers from "./cartReducers";
import alertReducer from "./alertReducer";

export default combineReducers({
    cart: cartReducers,
    products: productsReducers,
    alert: alertReducer
});