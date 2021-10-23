export default function Total({ orders }) {
  const totalRevenue = (
    (orders.reduce((prev, current) => {
      return prev + current.revenue;
    }, 0) *
      100) /
    100
  ).toFixed(2);

  const totalCost = (
    (orders.reduce((prev, current) => {
      return prev + current.cost;
    }, 0) *
      100) /
    100
  ).toFixed(2);

  return (
    <div className="total">
      <span>
        Revenue: <span style={{ color: "green" }}>{totalRevenue}</span>
      </span>
      <span>
        Cost: <span style={{ color: "red" }}>{totalCost}</span>
      </span>
    </div>
  );
}
