import React from "react";
import { connect } from "react-redux";

const Count = ({ count }) => {
  return <div>Count-{count}</div>;
};

const mapProps = (state) => ({
  count: state.users.length,
});

export default connect(mapProps)(Count);
