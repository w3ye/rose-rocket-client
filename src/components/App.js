import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import ColumnList from "./ColumnList";

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
      <ColumnList drivers={drivers} />
    </div>
  );
}

export default App;
