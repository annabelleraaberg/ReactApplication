import { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";

const EditDriver = () => {
  const { getById, editDriver } = useContext(DriverContext);

  const [id, setId] = useState("1");
  const [driverToUpdate, setDriverToUpdate] = useState({
    name: "name",
    age: 20,
    nationality: "country",
  });

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(e.currentTarget.value);
        break;
      case "name":
        setDriverToUpdate({ ...driverToUpdate, name: e.currentTarget.value });
        break;
      case "age":
        setDriverToUpdate({ ...driverToUpdate, age: e.currentTarget.value });
        break;
      case "nationality":
        setDriverToUpdate({
          ...driverToUpdate,
          nationality: e.currentTarget.value,
        });
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
      setDriverToUpdate(driverFromContext);
      console.log(driverFromContext);
    } catch (err) {
      console.log(err);
      alert("Error in getting id");
    }
  };

  const saveChanges = async () => {
    try {
      const result = await editDriver(driverToUpdate);

      if (result && result.status === 200) {
        return { status: 200, message: "Changes saved successfully" };
      } else {
        return { status: 400, message: "Failed to save changes" };
      }
    } catch (err) {
      console.log(err);
      return { status: 500, message: "Internal Server Error" };
    }
  };

  return (
    <section className="col-sm-12 col-md-6 col-lg-6 edit-driver-section">
      <h3>Edit driver</h3>
      <div className="">
        <label>Id:</label>
        <input onChange={handleChange} type="text" name="id" value={id} />
        <input onClick={getByIdFromContext} type="button" value="Get by id" />
      </div>
      <div>
        <label>Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={driverToUpdate.name}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          onChange={handleChange}
          type="number"
          name="age"
          value={driverToUpdate.age}
        />
      </div>
      <div>
        <label>Nationality</label>
        <input
          onChange={handleChange}
          type="text"
          name="nationality"
          value={driverToUpdate.nationality}
        />
      </div>
      <input
        className="btn btn-success"
        onClick={saveChanges}
        type="button"
        value="Save changes"
      />
    </section>
  );
};

export default EditDriver;
