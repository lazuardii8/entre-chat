import React, { Fragment, useState } from "react";

import style from "./list.module.scss";

const list = (props) => {
  const dataFilter = props.dataFilter;

  const [accordion, setAccordion] = useState(false);

  const ToogleFilter = () => {
    setAccordion(!accordion);
  };

  return (
    <Fragment>
      <div
        className={
          "bg__white " + style.wrapper__filter_list + " " + props.className
        }
      >
        <div
          className={
            "d-flex justify-content-between align-items-center " +
            (props.type == "list" ? "pointer" : "")
          }
          onClick={props.type == "list" ? ToogleFilter : ""}
        >
          <h5 className="bold font__size--16 text-capitalize">{props.title}</h5>
          {props.type == "list" ? (
            <img
              src="/images/asadds.png"
              className={accordion ? style.rotate : ""}
              alt=""
            />
          ) : (
            ""
          )}
        </div>

        {props.type == "search" ? (
          <div
            className={
              " d-flex justify-content-start align-items-center mt-3 " +
              style.wrapper__search
            }
          >
            <img src="/images/bx-search-alt-2 (2) 1.png" alt="" />
            <input
              type="text"
              className="ms-3 color__black  semi-bold font__size--12"
              placeholder="Search..."
            />
          </div>
        ) : (
          ""
        )}

        {props.type == "list" ? (
          <div
            className={
              style.wrapper__list +
              " " +
              (accordion ? style.list__active + " mt-3" : "")
            }
          >
            <ul>
              {dataFilter.map(function (object, i) {
                return (
                  <li className="d-flex w-100 align-items-center">
                    <input
                      type="radio"
                      id={"filter" + i}
                      className="d-none"
                      name="filter"
                    />
                    <label
                      htmlFor={"filter" + i}
                      className={style.circle}
                    ></label>
                    <label
                      htmlFor={"filter" + i}
                      className="font__size--16 meidum ms-3 color__gray-4 text-capitalize"
                    >
                      {object}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

list.defaultProps = {
  type: "list",
  title: "Interests",
  className: "",
  dataFilter: [],
};

export default list;
