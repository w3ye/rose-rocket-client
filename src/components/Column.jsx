import { Fragment } from "react";
import CardList from "./CardList";
import { useDrop } from "react-dnd";
import Total from "./Total";

export default function DriverColumnItem(props) {
  const { driverOrder, updateOrder, deleteDriver } = props;

  const [, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => handleDrop(item),
  }));

  // Assign drop area driver to draged item
  const handleDrop = (order) => {
    const _order = order;
    _order.driver_id = driverOrder.id;
    updateOrder(_order);
  };

  const handleDelete = () => {
    deleteDriver(driverOrder.id);
  };

  return (
    <>
      {driverOrder.id === null ? (
        <div className="column driver-col-first" ref={drop}>
          <div className="column-header">Unassigned Orders</div>
          <div className="list">
            <CardList orders={driverOrder.orders} updateOrder={updateOrder} />
            <Total orders={driverOrder.orders} />
          </div>
        </div>
      ) : (
        <div className="column" ref={drop}>
          <div className="column-header">
            Drivers {driverOrder.first_name} {driverOrder.last_name}{" "}
            <div>
              <button onClick={handleDelete}>Delete </button>
            </div>
          </div>
          <div className="list">
            <CardList orders={driverOrder.orders} updateOrder={updateOrder} />
            <Total orders={driverOrder.orders} />
          </div>
        </div>
      )}
    </>
  );
}
