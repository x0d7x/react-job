import React from "react";
import { BounceLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px auto ",
};
const Spiner = ({ loding }) => {
  return (
    <BounceLoader
      color="#3bb2ec"
      cssOverride={override}
      loading={loding}
      size={150}
      speedMultiplier={2}
    />
  );
};

export default Spiner;
