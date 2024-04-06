import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ProductDetail= () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
 

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

  const navigate = useNavigate(); 

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
    <>
      <h2>{product.title}</h2>
      <p>Beskrivning: {product.description}</p>
      <p>Pris: {product.price} kr</p>
      <p>Rating: {product.StarRating}</p>
      <p>Category: {product.category}</p>
      <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />


      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      <Link to={`/productedit/${id}`}>Edit Product</Link>
    </>
  );
}

export default ProductDetail;