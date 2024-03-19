import { useState } from "react";
import DriverItem from "./DriverItem";
import DriverService from "../../services/DriverService";

const ShowDriver = () => {
  const [driver, setDriver] = useState([]);

  const showAllDrivers = async () => {
    try {
      const data = await DriverService.getAll();
      setDriver(data);
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  return (
    <section className="text-center">
      <input
        className="btn btn-danger rounded-pill mb-3"
        onClick={showAllDrivers}
        type="button"
        value="Show all drivers"
      />
      <div className="row g-3 show-driver-item">
        {driver.map((_driver) => (
          <DriverItem
            key={_driver.id}
            name={_driver.name}
            image={_driver.image}
            age={_driver.age}
            nationality={_driver.nationality}
          />
        ))}
      </div>
    </section>
  );
};

export default ShowDriver;
