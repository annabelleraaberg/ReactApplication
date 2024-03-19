import { FC } from "react";

const PageHeader: FC<{ pageTitle: string }> = ({ pageTitle }) => {
  return (
    <header className="row header-container">
      <div className="container-fluid">
        <img
          className="header-img"
          src={`http://localhost:5282/images/car-icon.png`}
          alt="Image of Formula 1 logo"
        />
        <h1 className="header-title">{pageTitle}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
