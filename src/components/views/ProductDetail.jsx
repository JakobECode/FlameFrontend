import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail= () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();  

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

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://localhost:7272/api/Products/delete/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Något gick fel vid borttagning av produkt');
      }

      // Uppdatera UI eller navigera användaren till en annan sida efter borttagning
      // Här tar jag användaren tillbaka till en lista över produkter som ett exempel
      navigate.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleInsert = async () => {
    try {
      // Lägg till nödvändig logik för att skapa en ny produkt och hantera responsen
      const response = await fetch('https://localhost:7272/api/Products/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: 'Ny produkt',
          description: 'Beskrivning av den nya produkten',
          price: 2,  // Ange önskat pris
          starRating: 3,  // Ange önskat StarRating
          categoryId: 2,  // Ange önskat CategoryId
          tag: 'new',
          imageUrl: ''
        }),
    });
  
      if (!response.ok) {
        throw new Error('Något gick fel vid läggning till ny produkt');
      }
  
      // Hantera responsen, t.ex. uppdatera UI eller navigera användaren
      const data = await response.json();
      navigate(`/product/${data}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>{product.title}</h2>
      <p>Beskrivning: {product.description}</p>
      <p>Pris: {product.price} kr</p>
      <p>StarRating: {product.StarRating}</p>
      <p>Tag: {product.Tag}</p>
      <img src={product.imageUrl} alt={product.title} style={{ maxWidth: '100%', height: 'auto' }} />
      
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      <button className="btn btn-success" onClick={handleInsert}>Insert Product</button>
      {/* Lägg till fler detaljer beroende på din produktmodell */}

    </>
  );
}

export default ProductDetail;