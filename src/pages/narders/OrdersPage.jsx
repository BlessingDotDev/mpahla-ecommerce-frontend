import axios from 'axios';
import { useEffect, useState} from 'react';
import { Header } from '../../components/Header.jsx';
import { OrdersGrid } from './OrdersGrid.jsx';
import './OrdersPage.css';
import { API_URL } from '../../config.js';

export function OrdersPage({ cart, loadCart, totalQuantity }) {
  const [orders, setOrders] = useState([]);
  
  const loadOrder = async () => {
  const response = await axios.get(`${API_URL}/api/orders`);
  setOrders(response.data);
  }

  useEffect(() => {
    loadOrder();
  }, [orders]);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <title>Orders</title>

      <Header totalQuantity={totalQuantity} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        
        <OrdersGrid orders={orders} loadCart={loadCart} loadOrder={loadOrder}/>
      </div>
    </>
  );
}