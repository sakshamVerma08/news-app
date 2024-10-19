import React from "react";
import loading from "./loading.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="Loading..." width={"99svw"} />
    </div>
  );
};

export default Spinner;
