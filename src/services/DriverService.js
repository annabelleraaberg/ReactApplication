import axios from "axios";

const DriverService = (() => {
  const driverController = "http://localhost:5282/api/drivers";
  const imageUploadController = "http://localhost:5282/api/imageUpload";

  const getAll = async () => {
    try {
      const result = await axios.get(driverController);
      console.log(result);
      return result.data;
    } catch (err) {
      console.log("Contact with DriverController failed");
      return [];
    }
  };

  const getById = async (id) => {
    try {
      const result = await axios.get(`${driverController}/${id}`);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  };

  const getByName = async (name) => {
    try {
      const result = await axios.get(
        `${driverController}/GetDriverByName/${name}`
      );
      console.log(result);
      return result.data;
    } catch (error) {
      console.log(error);
      alert("No driver found");
    }
  };

  const postDriver = async (newDriver, image) => {
    try {
      const result = await axios.post(driverController, newDriver);

      const formData = new FormData();
      formData.append("formFile", image);

      const uploadResult = await axios({
        url: imageUploadController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      formData.delete("formFile");
      alert("Driver successsfully saved!");
    } catch (err) {
      console.log(err);
      alert("Something went wrong while saving new driver");
    }
  };

  const putDriver = async (driverToUpdate) => {
    try {
      const result = await axios.put(driverController, driverToUpdate);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteById = async (id) => {
    try {
      const result = await axios.delete(`${driverController}/${id}`);
      console.log(result);
      return true;
    } catch (err) {
      console.error("Error deleting driver:", err);
      return false;
    }
  };

  return {
    getAll,
    getById,
    getByName,
    postDriver,
    putDriver,
    deleteById,
  };
})();

export default DriverService;
