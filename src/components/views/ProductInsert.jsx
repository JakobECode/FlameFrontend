import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductInsert() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    starRating: 0,
    categoryId: 0,
    tag: '',
    imageUrl: ''
  });

  const navigate = useNavigate(); // Använd useNavigate här

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const handleInsert = async () => {
    try {
      const response = await fetch('https://localhost:7272/api/Products/insert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Något gick fel vid läggning till ny produkt');
      }

      await response.json();
      navigate(`/`); // Använd navigate här
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleInsert(); }}>
        <h2>Lägg till ny produkt</h2>      
        <div className="mb-3">
        <label className="form-label">Titel</label>
        <input type="text" className="form-control" name="title" placeholder="Titel" onChange={handleInputChange} />
        </div>

        <div className="mb-3">
            <label className="form-label">Beskrivning</label>
            <textarea className="form-control" name="description" placeholder="Beskrivning" onChange={handleInputChange}></textarea>
        </div>

        <div className="mb-3">
        <label className="form-label">Pris</label>
        <input type="number" className="form-control" name="price" placeholder="Pris" onChange={handleInputChange} />
        </div>

        <div className="mb-3">
        <label className="form-label">Star Rating</label>
        <input type="number" className="form-control" name="starRating" placeholder="Star Rating" onChange={handleInputChange} />
        </div>

        <div className="mb-3">
        <label className="form-label">Kategori ID</label>
        <input type="number" className="form-control" name="categoryId" placeholder="Kategori ID" onChange={handleInputChange} />
        </div>

        <div className="mb-3">
        <label className="form-label">Tagg</label>
        <input type="text" className="form-control" name="tag" placeholder="Tagg" onChange={handleInputChange} />
        </div>

        <div className="mb-3">
        <label className="form-label">Bild URL</label>
        <input type="text" className="form-control" name="imageUrl" placeholder="Bild URL" onChange={handleInputChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      
    </form>
  );
}

export default ProductInsert;