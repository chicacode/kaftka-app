import clientAxios from "../config/axios";
import { FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_START, ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAILURE, GET_PRODUCT_UPDATE, UPDATE_PRODUCT_START, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE, GET_PRODUCT_DELETE, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE } from "../types";
import Swal from "sweetalert2";
// Actions creators

export const fetchProductStart = () => {
    return {
        type: FETCH_PRODUCT_START,
        payload: true
    }
}

export const fetchProductFailure = () => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: true
})

export const fetchProductSuccess = (products) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: products
})

export const addNewProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

export const addNewProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

export const addNewProductError = (error) => ({
    type: ADD_PRODUCT_FAILURE,
    payload: error
})

export const getProductUpdate = (product) => ({
    type: GET_PRODUCT_UPDATE,
    payload: product
})

const editProduct = () => ({
    type: UPDATE_PRODUCT_START
})

const updateProductSuccess = (product) => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: product
})

const updateProductFailure = () =>({
    type: UPDATE_PRODUCT_FAILURE,
    payload: true
})

const getProductDelete = (id) => ({
    type: GET_PRODUCT_DELETE,
    payload: id
})

const deleteProductSuccess = () => ({
    type: DELETE_PRODUCT_SUCCESS
})

const deleteProductFailure = () => ({
    type: DELETE_PRODUCT_FAILURE,
    payload: true
})

export const fecthProduct = () => {
    return async (dispatch) => {
        dispatch(fetchProductStart())
        try {
            setTimeout(async () => {
                const response = await clientAxios.get("http://localhost:4000/products");
                console.log("response", response.data)
                dispatch(fetchProductSuccess(response.data))
            }, 3000)
        } catch (error) {
            dispatch(fetchProductFailure())
        }
    }
}

export const createNewProduct = (product) => {
    return async (dispatch) => {
        dispatch(addNewProduct());

        try {
            // Insert in API and state
            await clientAxios.post('http://localhost:4000/products', product)
            dispatch(addNewProductSuccess(product))

            Swal.fire(
                'Correct',
                'The Item was added',
                'success'
            )

        } catch (error) {
            dispatch(addNewProductError(true))
            Swal.fire({
                icon: 'error',
                title: 'There was an Error',
                text: 'There was an Error, try again'
            })
        }
    }
}

export const updateProductAction = (product) => {
    return (dispatch) => {
        dispatch(getProductUpdate(product))
    }
}

export const updateProduct = (product) => {
    return async (dispatch) => {
        dispatch(editProduct())
        
        try {
            await clientAxios.put(`http://localhost:4000/products/${product.id}`, product)
            dispatch(updateProductSuccess(product))
        } catch (error) {
            dispatch(updateProductFailure())
        }
    }
}


export const deleteProductAction = (id) => {

    return async (dispatch) => {
        await dispatch(getProductDelete(id));

        try {
            await clientAxios.delete(`http://localhost:4000/products/${id}`);
            dispatch(deleteProductSuccess())
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        } catch (error) {
            dispatch(deleteProductFailure())
        }
    }
}

