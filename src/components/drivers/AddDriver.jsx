import { useState } from "react";
import DriverService from "../../services/DriverService";

const AddDriver = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);
        break;

      case "image":
        setImage(e.currentTarget.files[0]);
        break;

      case "age":
        setAge(e.currentTarget.value);
        break;

      case "nationality":
        setNationality(e.currentTarget.value);
        break;
    }
  };

  const saveDriver = () => {
    try {
      const newDriver = {
        name: name,
        image: image.name,
        age: age,
        nationality: nationality,
      };
      DriverService.postDriver(newDriver, image);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="col-sm-12 col-md-6 col-lg-6">
      <h3>Add new driver</h3>
      <div>
        <label>Name</label>
        <input name="name" onChange={handleChange} type="text" />
      </div>
      <div className="">
        <label>Image</label>
        <input name="image" onChange={handleChange} type="file" />
      </div>
      <div>
        <label>Age</label>
        <input name="age" onChange={handleChange} type="number" />
      </div>
      <div>
        <label>Nationality</label>
        <input name="nationality" onChange={handleChange} type="text" />
      </div>
      <input
        className="btn btn-success"
        onClick={saveDriver}
        type="button"
        value="Save driver"
      />
    </section>
  );
};

export default AddDriver;
