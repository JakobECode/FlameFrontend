import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../contexts/ApiProvider";
import { NavLink } from "react-router-dom";
import "./orderHistory.css";

const OrderHistory = () => {
  const { OrderHistoryBySignedIn } = useContext(ApiContext);
  const [orders, setOrders] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [orderAddress, setOrderAddress] = useState({});
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    GetAllOrders();
  }, []);

  const GetAllOrders = async () => {
    var list = await OrderHistoryBySignedIn();
    setOrders(list);
  };

  const showDetails = (items, address, id) => {
    setOrderItems(items);
    setOrderAddress(address);
    console.log(address);
    setOrderId(id);
  };

  const OrderDetailSection = () => {
    return (
      <>
        <div className="item-container">
          <div className="text-space mt-4">
            <div>
              <p>Order Details:</p>
            </div>
          </div>
          <hr />
          <p>Items:</p>
          {orderItems.map((item) => (
            <div key={item.id} className="row wishlist-content">
              <div className="col text-space">
                <div className="text-end">
                  {item.productName}, {item.size}, {item.color}
                </div>
                <div className="text">
                  {item.quantity} X ${item.unitPrice}
                </div>
              </div>
            </div>
          ))}
        <hr />
       {orderAddress != null && 
          <div key={orderAddress.id} className="row wishlist-content">
            <p>Shipping Details:</p>
            <div className="col text-space">
            <div className="text-left">
              {orderAddress.streetName}, {orderAddress.postalCode}, {orderAddress.city}, Sweden
              </div>
          </div>
        </div>
}
        </div>

    
      </>
    );
  };

  return (
    <div className="order-history-container">
      <div className="top-bar">
        <NavLink to="/profile" className="go-back-link">
          <i className="fas fa-arrow-left"></i>
        </NavLink>
        <h2 className="order-history-heading">Order History</h2>
      </div>
      <div className="order-list">
        {orders.map((order) => {
          const dateObject = new Date(order.orderDate);
          const formattedDate = dateObject.toLocaleDateString();
          const formattedTime = dateObject.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const isSelected = order.id === orderId;

          return (
            <div
              key={order.id}
              className={`order-item ${isSelected ? "selected" : ""}`}
              onClick={() => showDetails(order.items, order.address, order.id)}
            >
              <div className="order-info">
                <div className="order-details">
                  <div className="order-id">Order ID: {order.id}</div>
                  <div className="order-date-time">
                    Date: {formattedDate}
                  </div>
                  <div className="order-date-time">Time: {formattedTime}</div>
                </div>
                <div className="order-status-price">
                  <div className={`order-status ${order.status}`}>
                    {order.status}
                  </div>
                  <div className="order-price">Price: ${order.price}</div>
                </div>
              </div>
              {isSelected && <OrderDetailSection />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderHistory;
