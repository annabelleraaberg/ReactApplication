import React from "react";
import AddDriver from "../components/drivers/AddDriver";
import DriverList from "../components/drivers/DriverList";
import EditDriver from "../components/drivers/EditDriver";
import { DriverProvider } from "../contexts/DriverContext";
import DeleteDriver from "../components/drivers/DeleteDriver";

const EditDriverPage: React.FC = () => {
  return (
    <section className="container">
      <h3 className="common-page-title">Edit Driver</h3>
      <article className="g-3">
        <DriverProvider>
          <div className="row p-5" id="edit-driver-page">
            <EditDriver />
            <AddDriver />
          </div>

          <div className="row ">
            <DeleteDriver />
          </div>

          <div className="row">
            <DriverList />
          </div>
        </DriverProvider>
      </article>
    </section>
  );
};

export default EditDriverPage;
