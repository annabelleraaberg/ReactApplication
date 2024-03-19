import { useContext, useState } from "react";
import { DriverContext } from "../../contexts/DriverContext";

const DeleteDriver = () => {
  const { deleteDriver } = useContext(DriverContext);

  const [id, setId] = useState("1");
  const [deleteStatus, setDeleteStatus] = useState("...");

  const handleChange = (e) => {
    setId(e.currentTarget.value);
  };

  const handleClick = async () => {
    try {
      const deleteSuccess = await deleteDriver(id);
      if (deleteSuccess === true) {
        setDeleteStatus(" Successfully deleted driver");
      } else {
        setDeleteStatus("Something went wrong while deleting");
      }
      setTimeout(() => {
        setDeleteStatus("");
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="mb-3">
      <h3 className="common-page-title">Delete driver by id</h3>
      <div>
        <label>Id:</label>
        <input onChange={handleChange} name="id" value={id} type="text" />
        <p>{deleteStatus}</p>
      </div>
      <input
        onClick={handleClick}
        className="btn btn-danger"
        type="button"
        value="Delete"
      />
    </section>
  );
};

export default DeleteDriver;
