import React from "react";

import { DriverProvider } from "../contexts/DriverContext";

import SearchDriver from "../components/drivers/SearchDriver";

const SearchPage: React.FC = () => {
  return (
    <section className="container">
      <h3 className="common-page-title">Search</h3>
      <article className="row g-3">
        <DriverProvider>
          <SearchDriver />
        </DriverProvider>
      </article>
    </section>
  );
};

export default SearchPage;
