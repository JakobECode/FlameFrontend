import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './../../assets/styles/app.css';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://localhost:7272/api/Products/Get?id=${id}`);
        if (!response.ok) {
          throw new Error('Något gick fel vid hämtning av produkt');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://localhost:7272/api/Products/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Något gick fel vid borttagning av produkt');
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="product-detail-container">
      <h2 className="product-title">{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} className="product-image" />
      <p className="product-info">Beskrivning: {product.description}</p>
      <p className="product-info">Pris: {product.price} kr</p>
      <p className="product-info">Rating: {product.Rating}</p>
      <p className="product-info">Kategori: {product.category}</p>
      <div className="action-buttons">
        <button className="action-button delete-button" onClick={handleDelete}>Delete</button>
        <Link to={`/productedit/${id}`} className="action-button edit-link">Edit Product</Link>
      </div>
    </div>
  );
}

export default ProductDetail;