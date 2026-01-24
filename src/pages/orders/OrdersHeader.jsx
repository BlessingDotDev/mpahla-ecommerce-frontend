import axios from 'axios';
import dayjs from 'dayjs';
import { formartCurrency } from '../../utils/money.js';
import {useEffect} from 'react';

export function OrdersHeader({ order, loadOrder }) {

  const deleteorder = async (orderId) => {
    await axios.delete(`api/orders/${orderId}`);
    await loadOrder;
  }

  return (

    <div className="order-header">
      <div className="order-header-left-section">
        <div className="order-date">
          <div className="order-header-label">Order Placed:</div>
          <div>
            {dayjs(order.orderTimeMs).format('MMMM D ')}
          </div>
        </div>
        <div className="order-total">
          <div className="order-header-label">Total:</div>
          <div>
            {formartCurrency(order.totalPriceCents)}
          </div>
        </div>
      </div>

      <div className="order-header-right-section">
        <div className="order-header-label">Order ID:</div>
        <div>
          {order._id}
        </div>
          <button className="order-delete-button" onClick={() => deleteorder(order._id)}>
            Delete Oder
          </button>
      </div>
    </div>
  );
}
