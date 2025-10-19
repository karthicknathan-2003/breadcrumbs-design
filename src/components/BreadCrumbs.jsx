import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  //  Locating the current path.
  const { pathname } = useLocation();
  const pathNameArray = pathname.split("/").filter((name) => name);
  var breadCrumbPathName = "";

  return (
    <div className="breadCrumbs">
      {/* No need to show the links in home page. */}
      {pathNameArray.length > 0 && <Link to={"/"}>Home</Link>}
      {pathNameArray.map((pathName, index) => {
        breadCrumbPathName += `/${pathName}`;
        const isLast = index === pathNameArray.length - 1;

        return isLast ? (
          <span key={breadCrumbPathName}>/ {pathName}</span>
        ) : (
          <span>
            /{" "}
            <Link key={breadCrumbPathName} to={breadCrumbPathName}>
              {pathName}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
