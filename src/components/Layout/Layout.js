import React from "react";
import Aux from "../../hocs/auxi";
import classes from "./Layout.module.css";

const Layout = props => (
  <Aux>
    <div> Toolbar, sidebar, backdrop</div>
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default Layout;
