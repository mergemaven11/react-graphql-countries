import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => (
  <div className="full-page-loader">
    <ClipLoader sizeUnit={"px"} size={150} color={"#fc1303"} loading={true} />
  </div>
);

export default Loader;
