import React from "react";
import Loading from "../components/interaction/Loading";

export default {
  version: "0.0.1",
  plugins: {
    lazy: {
      fallback: <Loading />,
    },
    router: {
      NotFound: require("../components/exception/NotFound").default,
    },
  },
};
