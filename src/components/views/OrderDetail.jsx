import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, Button, Card } from 'react-bootstrap';

const API_URL = 'https://localhost:7272/api/Order/GetByOrderId/{id}';

const OrderDetail = () => {
  const { orderId } = useParams();  // Correct place to call useParams
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`${API_URL.replaceAll('{id}', orderId)}`); // Using replace to insert the orderId into the URL
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
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
  }, [orderId]);  // Dependency array ensures useEffect runs when orderId changes

  if (loading) return (
    <div className="container mt-3 text-center">
      <p>Loading order details...</p>
    </div>
  );

  if (error) return (
    <Modal show={true} onHide={() => setError('')}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>Error loading order details: {error}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setError('')}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <div className="container mt-3">
      <h1>Order Details</h1>
      {order ? (
        <Card>
          <Card.Body>
            <Card.Title>{order.name}</Card.Title>
            <Card.Text><strong>Date:</strong> {new Date(order.orderDate).toLocaleDateString()} {new Date(order.orderDate).toLocaleTimeString()}</Card.Text>
            <Card.Text><strong>Status:</strong> {order.orderStatus}</Card.Text>
            <Card.Text><strong>Price:</strong> ${order.price}</Card.Text>
            <Card.Text><strong>Address:</strong> {order.streetName}</Card.Text>
            <Card.Text><strong>Email:</strong> {order.email}</Card.Text>
            <Button variant="secondary" onClick={() => navigate(-1)}>Back to orders</Button>
          </Card.Body>
        </Card>
      ) : (
        <p>No order details available.</p>
      )}
    </div>
  );
};

export default OrderDetail;