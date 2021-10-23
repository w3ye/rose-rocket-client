import { useState } from "react";

export default function CardForm(props) {
  const { order, setMode, updateOrder } = props;
  const [revenue, setRevenue] = useState("");
  const [cost, setCost] = useState("");

  const handleSave = () => {
    const _order = order;
    _order.revenue = ((revenue * 100) / 100).toFixed(2);
    _order.cost = ((cost * 100) / 100).toFixed(2);
    updateOrder(_order);
    setMode("");
  };

  const handleCancel = () => {
    setMode("");
  };

  return (
    <div className="card">
      <form className="form" onSubmit={(event) => event.preventDefault()}>
        <span className="description">{order.description}</span>
        <input
          className="input"
          type="text"
          name="revenue"
          placeholder={order.revenue}
          onChange={(event) => setRevenue(event.target.value)}
        />
        <input
          className="input"
          type="text"
          name="cost"
          placeholder={order.cost}
          onChange={(event) => setCost(event.target.value)}
        />
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          X
        </button>
      </form>
    </div>
  );
}
