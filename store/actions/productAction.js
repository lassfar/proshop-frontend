import axios from 'axios'
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR
} from 'store/actionTypes/productActionType'
import { absoluteURL } from 'config'

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST});
    const { data } = await axios.get(`${absoluteURL}/api/products`);
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});

  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_ERROR,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
      });
  }
}

