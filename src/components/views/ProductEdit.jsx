import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ProductEdit() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: ''
  });
  const navigate = useNavigate();
  

   
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
        const errorMessage = `An error occurred: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }

      navigate(`/`); // Assuming you want to redirect the user to the homepage or product list
    } catch (error) {
      alert(error); // Or handle this more gracefully in your UI
    }
  };

  // Your form structure
  return (
    <form onSubmit={handleUpdate}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={product.imageUrl}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Update Product</button>
    </form>
  );
}

export default ProductEdit;