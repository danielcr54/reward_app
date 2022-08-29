import * as React from "react";
import Typography from "@mui/material/Typography";

function SubHeader(props) {
  return (
    <Typography variant="h4" component="h4" style={{ marginTop: 30 }}>
      {props.title}
    </Typography>
  );
}
export default SubHeader;
