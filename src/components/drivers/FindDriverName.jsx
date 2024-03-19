import { useContext, useState, useEffect } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import DriverItem from "./DriverItem";

const FindDriverName = () => {
  const { getByName } = useContext(DriverContext);

  const [name, setName] = useState("");
  const [driver, setDriver] = useState([]);

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const getByNameFromContext = async () => {
    try {
      const driverFromContext = await getByName(name);

      if (!driverFromContext) {
        alert("No driver with that name, sorry. Try again.");
        return;
      }
      setDriver(
        Array.isArray(driverFromContext)
          ? driverFromContext
          : [driverFromContext]
      );

      console.log(driverFromContext);
    } catch (err) {
      console.log("Error in getByNameFromContext", err);
      alert("No driver with that name");
    }
  };

  return (
    <section className="">
      <div>
        <label>Name:</label>
        <input
          onChange={handleChange}
          name="name"
          value={name}
          type="text"
          placeholder="Enter driver name"
        />

        <input
          className="btn btn-dark rounded-pill"
          type="button"
          onClick={getByNameFromContext}
          value="Get driver by name"
        />
      </div>

      <div>
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

export default FindDriverName;
