import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Import useParams

const CreateOrder = () => {
  const { productId } = useParams(); // Get productId from the URL
  const [orderDetails, setOrderDetails] = useState({
    id: 0,
    customerName: '',
    orderDate: '',
    quantity: 0,
    orderStatus: 'Pending',
    email: '',
    streetName: '',
    postalCode: '',
    city: '',
    country: '',
    items: [productId] // Set initial items array with productId from the URL
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "quantity") {
      setOrderDetails({ ...orderDetails, [name]: parseInt(value, 10) });
    } else {
      setOrderDetails({ ...orderDetails, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://localhost:7272/api/Order/CreateOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      });

      if (!response.ok) {
        setError('Failed to create order: ');
      } else {
        setError('Order created successfully!');
        setOrderDetails({
          id: 0,
          customerName: '',
          orderDate: '',
          quantity: 0,
          orderStatus: 'Pending',
          email: '',
          streetName: '',
          postalCode: '',
          city: '',
          country: '',
          items: [productId] // Reset items to only include productId
        });
      }
    } catch (error) {
      setError('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="mt-3">
      <h2>Create Order</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Customer Name:</Form.Label>
          <Form.Control
            type="text"
            name="customerName"
            value={orderDetails.customerName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Order Date:</Form.Label>
          <Form.Control
            type="date"
            name="orderDate"
            value={orderDetails.orderDate}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            name="quantity"
            value={orderDetails.quantity}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={orderDetails.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Street Name:</Form.Label>
          <Form.Control
            type="text"
            name="streetName"
            value={orderDetails.streetName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Postal Code:</Form.Label>
          <Form.Control
            type="text"
            name="postalCode"
            value={orderDetails.postalCode}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={orderDetails.city}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={orderDetails.country}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Create Order'}
        </Button>
      </Form>
    </Container>
  );
};

export default CreateOrder;