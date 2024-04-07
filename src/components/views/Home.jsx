import React, { useState, useEffect } from 'react';
import './../../assets/styles/app.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Funktion för att hämta produkter från API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://localhost:7272/api/Products/all');
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av produkter');
        }
        const data = await response.json();
        setProducts(data); // Sätt produkter i state
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts(); // Anropa funktionen vid montering
    
  }, []); // Tomt beroendearray för att anropa endast vid montering

  return (
    <>
      <h3>Produkter</h3>
      <p>Välj bland märken och produkter:</p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <a href={`http://localhost:3000/productdetail/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>{product.price} SEK</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;