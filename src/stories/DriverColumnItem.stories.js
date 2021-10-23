import DriverColumnItem from "../components/DriverColumnItem";
import "../components/DriverColumnItem.scss";

export default {
  title: "Driver Column Item",
  component: DriverColumnItem,
};

const orders = [
  {
    id: 2,
    description: "Construction Material",
    driver_id: 1,
    revenue: 3948.45,
    cost: 71.38,
  },
  {
    id: 3,
    description: "Wood and Lumber",
    driver_id: 1,
    revenue: 1950.52,
    cost: 263.88,
  },
  {
    id: 4,
    description: "Wood and Lumber",
    driver_id: 1,
    revenue: 4991.45,
    cost: 116.98,
  },
];

export const Primary = () => <DriverColumnItem orders={orders} />;
