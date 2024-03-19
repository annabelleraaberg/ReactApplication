import React from "react";
import FindDriver from "../components/drivers/FindDriver";
import { DriverProvider } from "../contexts/DriverContext";
import FindDriverName from "../components/drivers/FindDriverName";

const ShowDriverPage: React.FC = () => {
  return (
    <section className="container">
      <h3 className="common-page-title">Find Drivers</h3>
      <article className="row">
        <h4>Search for a driver</h4>
        <DriverProvider>
          <div className="d-flex">
            <FindDriver />
            <FindDriverName />
          </div>
        </DriverProvider>
      </article>
    </section>
  );
};

export default ShowDriverPage;
