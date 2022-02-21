import React, { useEffect } from "react";
import { connect } from "react-redux";
const Users = ({ users, load }) => {
  useEffect(() => {
    load();
  }, [load]);
  return (
    <div>
      <h1>{users.length} Found</h1>
    </div>
  );
};

//Get the state from Models
const mapProps = (state) => ({
  users: state.users,
});

//Get dispatch from Models

const mapDispatch = (dispatch) => ({
  //   loaded: dispatch.users.loaded,
  load: dispatch.users.load,
});

export default connect(mapProps, mapDispatch)(Users);
