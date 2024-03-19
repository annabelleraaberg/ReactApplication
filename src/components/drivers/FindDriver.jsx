import { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";
import DriverItem from "./DriverItem";

const FindDriver = () => {
  const { getById } = useContext(DriverContext);

  const [id, setId] = useState("1");
  const [driver, setDriver] = useState([]);

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
    }
  };

  const getByIdFromContext = async () => {
    try {
      const driverFromContext = await getById(id);

      if (!driverFromContext) {
        alert("No driver with that id, sorry. Try again.");
        return;
      }
      setDriver(
        Array.isArray(driverFromContext)
          ? driverFromContext
          : [driverFromContext]
      );

      console.log(driverFromContext);
    } catch (err) {
      console.log(err);
      alert("No driver with that id");
    }
  };

  return (
    <section className="">
      <div>
        <label>Id:</label>
        <input onChange={handleChange} name="id" value={id} type="text" />
        <input
          className="btn btn-dark rounded-pill"
          onClick={getByIdFromContext}
          type="button"
          value="Get driver by id"
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

export default FindDriver;
