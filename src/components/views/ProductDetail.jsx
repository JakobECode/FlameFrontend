import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail= () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://localhost:7272/api/Products/id/${id}`);
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

  return (
    <>
      <h2>{product.title}</h2>
      <p>Beskrivning: {product.description}</p>
      <p>Pris: {product.price} kr</p>
      <p>StarRating: {product.StarRating}</p>
      <p>Tag: {product.Tag}</p>
      <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
      {/* Lägg till fler detaljer beroende på din produktmodell */}
    </>
  );
}

export default ProductDetail;