import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import Filters from './components/Filters';
import './styles.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ search: '', category: '', price: 0 });

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filters.search.toLowerCase()) &&
    (!filters.category || p.category === filters.category) &&
    (filters.price === 0 || p.price <= filters.price)
  );

  return (
    <div className="container">
      <h1>Product Listing</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default App;