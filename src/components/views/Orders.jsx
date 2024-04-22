// import React, { useState, useEffect } from 'react';
// import {Link, useParams, useNavigate } from 'react-router-dom';


// const API_URL = 'https://localhost:7272/api/Order/AllOrders';

// const fetchOrders = async () => {
//   const response = await fetch(API_URL);
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return await response.json();
// };

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchOrders().then(setOrders).catch(error => {
//       setError(error.message);
//     }).finally(() => {
//       setLoading(false);
//     });
//   }, []);

//   if (loading) return <div className="container mt-3"><p>Loading orders...</p></div>;
//   if (error) return <div className="container mt-3"><p>Error loading orders: {error}</p></div>;

//   return (
//     <div className="container mt-3">
//       <h1 className="mb-3">Order List</h1>
//       <div className="list-group">
//         {orders.map(order => (
//           <Link key={order.id} to={`/order/${order.id}`} className="list-group-item list-group-item-action">
//             {order.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const OrderDetail = () => {
//   const { orderId } = useParams();
//   const [order, setOrder] = useState(null);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`${API_URL}/${orderId}`)
//       .then(response => {
//         if (!response.ok) throw new Error('Failed to fetch order details');
//         return response.json();
//       })
//       .then(setOrder)
//       .catch(error => setError(error.message))
//       .finally(() => setLoading(false));
//   }, [orderId]);

//   if (loading) return <div className="container mt-3"><p>Loading order details...</p></div>;
//   if (error) return <div className="container mt-3"><p>Error loading order details: {error}</p></div>;

//   return (
//     <div className="container mt-3">
//       <h1>Order Details</h1>
//       {order && (
//         <div>
//           <p><strong>Name:</strong> {order.name}</p>
//           <p><strong>Date:</strong> {order.date}</p>
//           <p><strong>Total:</strong> {order.total}</p>
//           <button onClick={() => navigate(-1)} className="btn btn-secondary">Back to orders</button>
//         </div>
//       )}
//     </div>
//   );
// };