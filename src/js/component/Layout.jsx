import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Layout = ({ children }) => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-xl-6 col-lg-7 col-sm-10">
          <div className="card">
            <div className="card-body">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
