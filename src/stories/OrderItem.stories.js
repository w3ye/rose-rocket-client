import OrderItem from "../components/OrderItem";
import "../components/App.scss";

export default {
  title: "Order Item",
  component: OrderItem,
};
const order = {
  id: 1,
  description: "Construction Material",
  revenue: 4200.15,
  cost: 1000.2,
  driver_id: 1,
};

export const Primary = () => <OrderItem order={order} />;
