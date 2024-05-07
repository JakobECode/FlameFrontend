import React, { useState, useEffect } from 'react';
import './Home.css';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://localhost:7272/api/Products/all');
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av produkter');
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container mt-4"><p>Loading...</p></div>;
  }

  if (error) {
    return <div className="container mt-4"><p>Error: {error}</p></div>;
  }

  return (
    <div className="container mt-4">
      <h3>Produkter</h3>
      <p>Välj bland märken och produkter:</p>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100"> {/* Adjust card height */}
              <img src={product.imageUrl} alt={product.name} className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>{product.price} SEK</strong></p>
                <a href={`http://localhost:3000/productdetail/${product.id}`} className="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;