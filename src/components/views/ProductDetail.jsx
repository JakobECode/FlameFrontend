import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

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
      <div className="card">
        <h2 className="card-header text-center">{product.title}</h2>
        <div className="card-body">
          <div className="text-center">
          <img 
  src={product.imageUrl} 
  alt={product.title} 
  className="img-fluid mb-3 custom-image-size custom-image-border custom-image-shadow custom-image-rotate" 
/>
          </div>
          <p className="font-weight-bold">Name: {product.name}</p>
          <p className="text-muted">Description: {product.description}</p>
          <p className="font-weight-normal">Price: {product.price} kr</p>
          <p className="font-italic">Rating: {product.Rating}</p>
          <p className="text-uppercase">Category: {product.category}</p>
        </div>
        <div className="card-footer d-flex justify-content-around">
          <button className="btn btn-danger" onClick={handleDelete}>Delete Product</button>
          <Link to={`/productedit/${product.id}`} className="btn btn-primary">Edit Product</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;