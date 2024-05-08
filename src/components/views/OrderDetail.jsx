import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button, Card } from 'react-bootstrap';
import './OrderDetail.css';

const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:7272/api/Order/GetByOrderId/{id}';

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(API_URL.replace('{id}', orderId));
        if (!response.ok) {
          throw new Error(`Failed to fetch order details: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  if (loading) return <div className="container mt-3 text-center"><p>Loading order details...</p></div>;
  if (error) return (
    <Modal show={true} onHide={() => setError('')}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>Error loading order details: {error}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setError('')}>Close</Button>
      </Modal.Footer>
    </Modal>
  );

  const formattedDate = order ? `${new Date(order.orderDate).toLocaleDateString()} ${new Date(order.orderDate).toLocaleTimeString()}` : '';

  return (
    <div className="container mt-3">
      <h1>Order Details</h1>
      {order ? (
        <Card>
          <Card.Body>
            <Card.Text><strong>OrderId:</strong> {order.id}</Card.Text>
            <Card.Text><strong>Quantity:</strong> {order.quantity}</Card.Text>
            <Card.Text><strong>Date:</strong> {formattedDate}</Card.Text>
            {order.items && order.items.map((item, index) => (
              <Card.Text key={index}>
                <strong>Item:</strong> {item.name} - {item.quantity} {item.price}kr
                <Card.Img className="custom-image-size" src={item.imageUrl} alt={`Image of ${item.name}`} />
              </Card.Text>
            ))}
            <Button variant="secondary" onClick={() => navigate(-1)}>Back to orders</Button>
          </Card.Body>
        </Card>
      ) : <p>No order details available.</p>}
    </div>
  );
};

export default OrderDetail;