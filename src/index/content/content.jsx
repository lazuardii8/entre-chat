import React, { Fragment } from "react";
import style from "./content.module.scss";

import List from "../ui/filter/list";

const content = (params) => {
  const dataFilter = [
    "Entrepreneur",
    "Designer",
    "Developer",
    "Photographer",
    "Videographer",
    "Marketer",
  ];
  return (
    <Fragment>
      <section className="bg__gray-3 min-height-100 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <List type="search" title="Location" />
              <List className="mt-4" type="list" dataFilter={dataFilter} title="Interests" />
              <List className="mt-4" type="list" dataFilter={dataFilter} title="Title" />
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default content;
