import React from "react";
import IDriver from "../../interfaces/IDriver";
import ImageTooltip from "../other/ImageTooltip";

interface DriverItemProps extends IDriver {}

const DriverItem: React.FC<DriverItemProps> = ({
  name,
  image,
  age,
  nationality,
}) => {
  return (
    <article className="col-12 col-md-6 col-lg-4 col-xl-3">
      <div className="text-center h-100">
        <h3>{name}</h3>
        <img
          className="img-fluid"
          src={`http://localhost:5282/images/${image}`}
          alt={`${name}`}
        />
        <ImageTooltip name={name} />

        <p>Age: {age}</p>
        <p>{nationality}</p>
      </div>
    </article>
  );
};

export default DriverItem;
