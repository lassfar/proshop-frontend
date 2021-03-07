const initialState = {
  products: []
}

export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCT_LIST_REQUEST': 
      return { loading: true, products: [] }
    case 'PRODUCT_LIST_SUCCESS': 
      return { loading: false, products: action.payload }
    case 'PRODUCT_LIST_ERROR': 
      return { loading: false, error: action.payload }
    default: return {...state}
  }
}