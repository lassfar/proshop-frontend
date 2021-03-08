import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_ERROR,
} from 'store/actionTypes/productActionType'
import { absoluteURL } from 'config'

// FETCH PRODUCTS
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST});
    const { data } = await axios.get(`${absoluteURL}/api/products`);
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
      payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      });
  } // catch
} // fetchProducts


// FETCH PRODUCT BY ID
export const fetchProductById = (productId) => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_DETAIL_REQUEST});
    const { data } = await axios.get(`${absoluteURL}/api/products/${productId}`);
    dispatch({type: PRODUCT_DETAIL_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_ERROR,
      payload: 
        error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      });
  } // catch
} // fetchProducts
