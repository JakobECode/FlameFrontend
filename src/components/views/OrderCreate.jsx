import React, { useState } from 'react';
import { Form, Button, Container, Alert, InputGroup } from 'react-bootstrap';

const CreateOrder = () => {
  const [orderDetails, setOrderDetails] = useState({
    id: 0,
    customerName: '',
    orderDate: '',
    quantity: 0,
    orderStatus: 'Pending', // Default to 'Pending'
    email: '',
    streetName: '',
    postalCode: '',
    city: '',
    country: '',
    items: []
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "items") {
      setOrderDetails({ ...orderDetails, [name]: value.split(',').map(item => item.trim()) });
    } else if (name === "quantity") {
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

      console.log(response);

      if (!response.ok) {
        // throw new Error(`HTTP error! status: ${response.status}`);
        setError('Failed to create order: ');
      }
      else {
        setError('Det blev rätt: ');
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
          items: []
        });
      }
    } 
    catch (error) 
    {
    } 
    finally {
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
        <Form.Group className="mb-3">
          <Form.Label>Items (comma-separated):</Form.Label>
          <Form.Control
            type="text"
            name="items"
            placeholder="Item1, Item2, Item3"
            value={orderDetails.items}
            onChange={handleInputChange}
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