import dayjs from 'dayjs';

export function DeliveryDate({ selectedDeliveryOption }) {
  if (!selectedDeliveryOption) return null;

  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}
