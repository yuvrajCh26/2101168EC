// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// components/AllProducts.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the server API
    // Implement fetch logic here
    // Example: fetchProducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
