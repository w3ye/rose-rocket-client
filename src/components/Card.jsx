import { useState, Fragment } from "react";
import { useDrag } from "react-dnd";
import CardForm from "./CardForm";
export default function OrderItem(props) {
  const { order, updateOrder } = props;
  const [mode, setMode] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: order,
    collection: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleEdit = () => {
    setMode("edit");
    console.log(order);
  };

  const revenue = ((+order.revenue * 100) / 100).toFixed(2);
  const cost = ((+order.cost * 100) / 100).toFixed(2);

  return (
    <>
      {mode === "" && (
        <div className="card" ref={drag}>
          <span className="description">{order.description}</span>
          <span className="revenue">${revenue}</span>
          <span className="cost">${cost}</span>
          {order.driver_id === null && (
            <button type="button" className="edit" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      )}
      {mode === "edit" && (
        <CardForm order={order} setMode={setMode} updateOrder={updateOrder} />
      )}
    </>
  );
}
