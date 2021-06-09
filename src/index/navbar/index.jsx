import React, { Fragment } from "react";
import Image from "next/image";
import style from "./index.module.scss";

const index = (params) => {
  return (
    <Fragment>
      <div className={style.navbar__wrap + " bg__white"}>
        <div className="container d-flex justify-content-between align-items-center">
          <div
            className={
              "d-flex justify-content-start align-items-center " +
              style.navbar__brand
            }
          >
            <a href="#!" className="me-3">
              <img
                src="/images/Entre-Blue.png"
                className={style.image__navar}
              />
            </a>
            <div
              className={
                "d-flex justify-content-start align-items-center bg__gray-2 " +
                style.form__search
              }
            >
              <img
                src="/images/bx-search-alt-2 (2) 1.png"
                className="me-2"
                alt=""
              />
              <input
                type="text"
                placeholder="Search Something.."
                className="semi-bold font__size--14 color__gray-1"
              />
            </div>
          </div>
          <div className={style.navbar__menu}>
            <ul>
              <li>
                <a href="#!" className="font__size--12 semi-bold color__gray-1">
                  <img src="/images/assa.png" className="me-2" alt="" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className={
                    "font__size--12 semi-bold color__gray-1 " + style.active
                  }
                >
                  <img src="/images/asas.png" className="me-2" alt="" />
                  Network
                </a>
              </li>
              <li>
                <a href="#!" className="font__size--12 semi-bold color__gray-1">
                  <img src="/images/sas.png" className="me-2" alt="" />
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="font__size--12 semi-bold color__gray-1 d-flex justify-content-center align-items-center"
                >
                  <img src="/images/Frame.png" className="me-2" alt="" />
                  Inbox
                  <div
                    className={
                      style.notice +
                      " ms-2 color__white bg__red d-flex justify-content-center align-items-center"
                    }
                  >
                    2
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className={
                    "font__size--12 semi-bold color__white bg__blue " + style.create
                  }
                >
                  <img src="/images/Vector.png" className="me-2" alt="" />
                  Create
                </a>
              </li>
              <li>
                <a href="#!" className={style.profile}>
                  <img src="/images/Ellipse 1.png" className="me-2" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
