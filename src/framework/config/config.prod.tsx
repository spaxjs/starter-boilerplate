import Loading from "../components/interaction/Loading";
import React from "react";

export default {
  version: "0.0.1",
  plugins: {
    lazy: {
      fallback: <Loading />,
    },
    router: {
      NotFound: require("../components/exception/NotFound").default,
      Forbidden: require("../components/exception/Forbidden").default,
    },
  },
};
