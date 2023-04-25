import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import cartReducers from "./cartReducers";

export default combineReducers({
    cart: cartReducers,
    products: productsReducers
});