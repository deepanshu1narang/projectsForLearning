import React from 'react';
import classes from "./Badge.module.css";

export default function Badge(props) {
  return (
    <h6 className={classes.badge}>{props.children}</h6>
  );
}
