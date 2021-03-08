import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailReducer } from 'store/reducers/productReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer
});

const middleware = [thunk];

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(...middleware)));

export default store