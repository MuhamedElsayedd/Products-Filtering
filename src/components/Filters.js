import React from 'react';

export default function Filters({ filters, setFilters }) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by name..."
        value={filters.search}
        onChange={e => setFilters({ ...filters, search: e.target.value })}
      />
      <select
        value={filters.category}
        onChange={e => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">All Categories</option>
        <option value="Phones">Phones</option>
        <option value="Laptops">Laptops</option>
      </select>
      <input
        type="range"
        min="0"
        max="1500"
        step="100"
        value={filters.price}
        onChange={e => setFilters({ ...filters, price: Number(e.target.value) })}
      />
      <span>Max Price: ${filters.price || 'Any'}</span>
    </div>
  );
}