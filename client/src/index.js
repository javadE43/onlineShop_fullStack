import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import {useSelector,useDispatch,Provider} from 'react-redux';
import {store} from './containers/store' 
import './index.css'
import { productsFatch } from './containers/featcher/product/productSlice';
import { categoryApi } from './containers/featcher/category/categorySlice';
store.dispatch(productsFatch())
store.dispatch(categoryApi())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
</React.StrictMode>
);

