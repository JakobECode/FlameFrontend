import React, { useState } from 'react';


const ProductEdit = ({ product, onUpdate }) => {
    const [editedProduct, setEditedProduct] = useState(product);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedProduct({
        ...editedProduct,
        [name]: value,
      });
    };
  
    const handleUpdate = (e) => {
      e.preventDefault();
      onUpdate(editedProduct);
    };
  
    return (
      <form onSubmit={handleUpdate}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>StarRating:</label>
          <input
            type="number"
            name="starRating"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Tag:</label>
          <input
            type="text"
            name="tag"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    );
  }
  
  export default ProductEdit;