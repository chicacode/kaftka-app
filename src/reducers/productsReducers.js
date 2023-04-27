import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_START, FETCH_PRODUCT_FAILURE, ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, GET_PRODUCT_UPDATE, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, GET_PRODUCT_DELETE, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from "../types";

const initialState = {
    products: [],
    error: null,
    loading: false,
    productDelete: null,
    productUpdate: null,
}

export default function (state = initialState, action) {
    // Type narrowing
    switch (action.type) {
        case FETCH_PRODUCT_START:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload,
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            };
        case ADD_PRODUCT_FAILURE:
        case FETCH_PRODUCT_FAILURE:
        case UPDATE_PRODUCT_FAILURE:
        case DELETE_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_PRODUCT_UPDATE:
            return {
                ...state,
                productUpdate: action.payload
            }

        case UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                productUpdate: null,
                products: state.products.map((product) => {
                   return product.id === action.payload.id ? product = action.payload : product
                })
           }
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                productDelete: action.payload
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productDelete),
                productDelete: null
            }
        default:
            return state;
    }
}