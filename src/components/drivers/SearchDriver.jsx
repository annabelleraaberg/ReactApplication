import React, { useState, useContext } from "react";
import DriverItem from "./DriverItem";
import { DriverContext } from "../../contexts/DriverContext";

const SearchDriver = () => {
  const { driver: allDrivers } = useContext(DriverContext);
  const [name, setName] = useState("");
  const [filteredDrivers, setFilteredDrivers] = useState([]);

  const handleInput = (e) => {
    setName(e.currentTarget.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const partialNameLowerCase = name.toLowerCase();
    const filteredResults = allDrivers.filter((driver) =>
      driver.name.toLowerCase().includes(partialNameLowerCase)
    );

    setFilteredDrivers(filteredResults);
  };

  return (
    <section className="">
      <form className="form-inline" onSubmit={handleSearch}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search for a driver"
          aria-label="Search"
          value={name}
          onChange={handleInput}
          name="name"
        />

        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>

      <div>
        {filteredDrivers.map((_driver) => (
          <DriverItem
            key={_driver.id}
            name={_driver.name}
            image={_driver.image}
            age={_driver.age}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchDriver;
