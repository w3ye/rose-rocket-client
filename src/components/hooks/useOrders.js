import axios from "axios";
import { useState } from "react";

export default function useOrders() {
  // State to track all drivers and their orders
  const [driversOrders, setDriversOrders] = useState([]);

  // GET request to get all drivers and their orders
  function getDriversOrders() {
    axios
      .get("https://rocket-assignment.herokuapp.com/api")
      .then((result) => setDriversOrders(result.data))
      .catch((err) => err);
  }

  function updateOrder(order) {
    axios
      .put("https://rocket-assignment.herokuapp.com/api/orders", order)
      .then((result) => {
        getDriversOrders();
      })
      .catch((err) => {
        return err;
      });
  }

  function deleteDriver(driverId) {
    axios
      .delete(
        `https://rocket-assignment.herokuapp.com/api/delete/driver/${driverId}`
      )
      .then((result) => {
        getDriversOrders();
      })
      .catch((err) => {
        return err;
      });
  }

  return {
    driversOrders,
    setDriversOrders,
    getDriversOrders,
    updateOrder,
    deleteDriver,
  };
}
