import React from "react";
import ShowDriver from "../components/drivers/ShowDriver";
import ColorToggle from "../components/other/ColorToggle";

const HomePage: React.FC = () => {
  return (
    <section className="home-page-cont">
      <div>
        <ColorToggle />
      </div>
      <div className="container" id="home-con">
        <h3 id="home-title">Home page</h3>
        <div className="row">
          <ShowDriver />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
