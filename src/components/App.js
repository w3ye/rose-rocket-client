import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import ColumnList from "./ColumnList";
import useOrders from "./hooks/useOrders";

function App() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/drivers")
      .then((result) => {
        setDrivers(result.data);
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <div className="App">
      <button onClick={useOrders().reset}>reset</button>
      <ColumnList drivers={drivers} />
    </div>
  );
}

export default App;
