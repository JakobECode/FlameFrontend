import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductInsert() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: ''
  });

  const navigate = useNavigate(); // Använd useNavigate här

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  const handleInsert = async () => {
    try {
      const response = await fetch('https://localhost:7272/api/Products/Add', {
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
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" placeholder="Name" onChange={handleInputChange} />
        </div>

        <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="description" placeholder="Description" onChange={handleInputChange}></textarea>
        </div>

        <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control" name="price" placeholder="Price" onChange={handleInputChange} />
        </div>

        <div className="mb-3">
        <label className="form-label">Category</label>
        <input type="number" className="form-control" name="category" placeholder="Category" onChange={handleInputChange} />
        </div>

        <div className="mb-3">
        <label className="form-label">ImageUrl</label>
        <input type="text" className="form-control" name="imageUrl" placeholder="ImageUrl" onChange={handleInputChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      
    </form>
  );
}

export default ProductInsert;