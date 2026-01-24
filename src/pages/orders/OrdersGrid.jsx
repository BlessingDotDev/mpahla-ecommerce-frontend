import { OrdersHeader } from './OrdersHeader.jsx';
import { OrdersDetailsGrid } from './OrdersDetailsGrid.jsx';

export function OrdersGrid({ orders, loadCart, loadOrder }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order._id} className="order-container">

            <OrdersHeader order={order} loadOrder={loadOrder} />

            <OrdersDetailsGrid order={order} loadCart={loadCart}  />

          </div>
        );
      })}
    </div>
  );
}