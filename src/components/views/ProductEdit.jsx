import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: ''
  });

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://localhost:7272/api/Products/Get?id=${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch, status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [id]);

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://localhost:7272/api/Products/Update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status} ${response.statusText}`);
      }

      navigate(`/`);
    } catch (error) {
      console.error(error); // Consider a more user-friendly error handling
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </div>
  );
}

export default ProductEdit;