import dayjs from 'dayjs';
import { formartCurrency } from '../../utils/money.js';
import {useEffect} from 'react';

export function OrdersHeader({ order }) {
  useEffect(() => {
    console.log(order)
  })

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
      </div>
    </div>
  );
}
