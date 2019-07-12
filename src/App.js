import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import products from './data/products'

function App() {
  return (
    <div className="App">
      <ProductList list={products}/>
    </div>
  );
}

export default App;
