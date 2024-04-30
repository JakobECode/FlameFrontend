import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Card } from 'react-bootstrap';

const API_URL = 'https://localhost:7272/api/Order/AllOrders';

const fetchOrders = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders().then(setOrders).catch(error => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <div className="container mt-3 text-center">
      <p>Loading orders...</p>
    </div>
  );

  if (error) return (
    <Modal show={true} onHide={() => setError('')}>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>Error loading orders: {error}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setError('')}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className="container mt-3">
      <h1 className="mb-3">Order List</h1>
      <div className="d-flex flex-wrap justify-content-start">
        {orders.map(order => (
          <Card key={order.id} className="m-2" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{order.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Order Date: {formatDate(order.orderDate)}</Card.Subtitle>
              <Card.Text>
                Status: {order.orderStatus}<br/>
                Address: {order.streetName}
              </Card.Text>
              <Link to={`/OrderDetail/${order.id}`} className="btn btn-primary">View Details</Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderList;