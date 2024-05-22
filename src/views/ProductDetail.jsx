import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './ProductDetail.css';

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
    const token = localStorage.getItem('token'); 
    try {
      const response = await fetch(`https://localhost:7272/api/Products/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}` 
        }
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
      <Card>
        <Card.Header as="h2" className="text-center">{product.name}</Card.Header>
        <Card.Body>
          <div className="text-center">
            <img 
              src={product.imageUrl} 
              alt={product.title} 
              className="img-fluid mb-3 custom-image custom-image-border custom-image-shadow" 
            />
          </div>
          <Card.Text><strong>Name:</strong> {product.name}</Card.Text>
          <Card.Text><strong className="text">Description:</strong> {product.description}</Card.Text>
          <Card.Text><strong>Price:</strong> {product.price} kr</Card.Text>
          <Card.Text><strong>Rating:</strong> {product.Rating}</Card.Text>
          <Card.Text className="text"><strong>Category:</strong> {product.category}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content">
          <Button className="custom-button-size btn-danger" onClick={handleDelete}>Delete Product</Button>
          <Link to={`/productedit/${product.id}`} className="btn custom-button btn-primary">Edit Product</Link>
          <Link to={`/createorder/${product.id}`} className="btn custom-button btn-primary">BUY</Link>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProductDetail;