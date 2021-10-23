import { useEffect } from "react";
import axios from "axios";
import Column from "./Column";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useOrders from "./hooks/useOrders";

export default function DriverColumnList(props) {
  const {
    driversOrders,
    getDriversOrders,
    updateOrder,
    deleteDriver,
  } = useOrders();
  useEffect(() => {
    getDriversOrders();
  }, []);

  const parsedDriverOrders = driversOrders.map((driverOrder, index) => {
    return (
      <Column
        driverOrder={driverOrder}
        key={index}
        updateOrder={updateOrder}
        deleteDriver={deleteDriver}
      />
    );
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="driver-col">{parsedDriverOrders}</div>
    </DndProvider>
  );
}
