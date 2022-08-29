import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CollapsibleTable from "./Table";
import Grid from "@mui/material/Grid";
import Dialog from "../Component/MonthDropdown";
import SubHeader from "../Component/SubHeader";

export default function SimpleContainer() {
  const [month, setMonth] = React.useState("All Months");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
       <SubHeader title={"Customer and their Reward points"} />
        <Box
          mt={3}
          pb={2}
          sx={{
            borderBottom: 1,
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box></Box>
            <Dialog handleChange={handleChange} month={month} />
          </Grid>
        </Box>
        <Box mt={2}>
          <CollapsibleTable month={month} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
