import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../types';

const initialState = {
    cart: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                total: state.total + action.payload.price,
                cart: [...state.cart, action.payload]
            };
        case REMOVE_FROM_CART:
            return {
                total: state.total - action.payload.price,
                // TODO: fix this
                cart: state.cart.filter((cart) => cart.id !== action.payload.is)
            };

        case CLEAR_CART:
            return {
                total: 0,
                cart: state
            };
        default:
            return state;
    }
}