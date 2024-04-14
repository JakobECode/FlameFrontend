import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './../../assets/styles/app.css'; // Ensure your custom styles don't conflict with Bootstrap

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
    <div className="container mt-5">
      <h2 className="text-center mb-4">{product.title}</h2>
      <div className="text-center">
        <img src={product.imageUrl} alt={product.title} className="img-fluid mb-3" />
      </div>
      <p className="lead">Beskrivning: {product.description}</p>
      <p className="lead">Pris: {product.price} kr</p>
      <p className="lead">Rating: {product.Rating}</p>
      <p className="lead">Kategori: {product.category}</p>
      <div className="d-flex justify-content-around mt-4">
        <button className="btn btn-danger" onClick={handleDelete}>Delete Product</button>
        <Link to={`/productedit/${id}`} className="btn btn-primary">Edit Product</Link>
      </div>
    </div>
  );
}

export default ProductDetail;