import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// if we don't pass the message prop
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
