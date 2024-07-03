import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetch('http://localhost:8090/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8090/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product, quantity })
    })
    .then(response => response.json())
    .then(data => {
      setProducts([...products, data]);
      setProduct('');
      setQuantity('');
    })
    .catch(error => console.error('Error adding product:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8090/products/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setProducts(products.filter(p => p.id !== id));
    })
    .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <div className="container">
      <h1 className="title">La Lista del Super</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="product" id='productotitle'>Producto: </label>
          <input type="text" id="product" value={product} onChange={(e) => setProduct(e.target.value)} />
        </div>
        <div className="input">
          <label htmlFor="quantity" id='cantidadtitle'>Cantidad: </label>
          <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button type="submit" className="add-button">Añadir</button>
      </form>
      <h2 className="title2">¿Que tengo que comprar?</h2>
      <ul className="product-list">
        {Array.isArray(products) && products.map(product => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.product}</span> 
            <span className="product-quantity">{product.quantity}</span>
            <button onClick={() => handleDelete(product.id)} className="delete-button">Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
