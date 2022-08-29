import * as React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";

function ButtonIcon(props) {
  return (
    <IconButton aria-label="expand row" size="small" onClick={props.onClick}>
      {props.open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    </IconButton>
  );
}
export default ButtonIcon;
