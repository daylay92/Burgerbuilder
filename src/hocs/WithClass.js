import React from "react";

const withClass = props => (
  <div className={props.classes.join(" ")}>{props.children}</div>
);

export default withClass;
