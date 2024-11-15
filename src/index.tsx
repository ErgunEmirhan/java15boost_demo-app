import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import Yarisma from './pages/Yarisma';
import Hitopya from './pages/Hitopya';

import {Provider} from 'react-redux'
import store from './store';
import ProductList from './pages/ProductList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <Provider store={store}>
    <ProductList />
 </Provider>
);
