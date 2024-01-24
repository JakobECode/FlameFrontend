import React, { useState, useEffect } from 'react';

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
      <ul>
        {products.map((product) => (
          <li key={product.id}><a href={`https://localhost:7272/api/Products/id/${product.id}`}>{product.title}</a> </li>
        ))}
        
      </ul>
    </>
  );
}

export default Home;