import DriverService from "../../services/DriverService";
import { useContext, useEffect, useState } from "react";
import DriverItem from "./DriverItem";
import { DriverContext } from "../../contexts/DriverContext";

const DriverList = () => {
  const [drivers, setDrivers] = useState([{ name: "Max Verstappen" }]);

  useEffect(() => {
    getDriversFromService();
  }, []);

  const getDriversFromService = async () => {
    try {
      const driversFromService = await DriverService.getAll();
      setDrivers(driversFromService);
    } catch (err) {
      console.log(err);
    }
  };

  const getDriversJSX = () => {
    const driversJSX = drivers.map((_driver, i) => (
      <DriverItem
        key={i}
        name={_driver.name}
        image={_driver.image}
        age={_driver.age}
        nationality={_driver.nationality}
      />
    ));

    return driversJSX;
  };

  return (
    <section className="row ">
      <h3>Drivers</h3>
      <p>Driver count: {drivers.length}</p>
      <section>
        <ul>{getDriversJSX()}</ul>
      </section>
    </section>
  );
};

export default DriverList;
