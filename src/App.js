// Em App.js
import './App.css';
import React from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';

function App() {
  const [productsOnCart, setProductsOnCart] = React.useState([]);

  return (
    <div className="App">
      <Header />
      <Home />
      <Products addToCart={setProductsOnCart} productsOnCart={productsOnCart} />
      <Cart productsOnCart={productsOnCart} setProductsOnCart={setProductsOnCart} />
    </div>
  );
}

export default App;
