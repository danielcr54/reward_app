import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CollapsibleTable from "./Table";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

export default function SimpleContainer() {
  const [month, setMonth] = React.useState("");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography variant="h4" component="h4" style={{ marginTop: 30 }}>
          Customer and their Reward points
        </Typography>
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
            <Box sx={{ minWidth: 200 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={month}
                  label="month"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>All Months</MenuItem>
                  <MenuItem value={"January"}>January</MenuItem>
                  <MenuItem value={"February"}>February</MenuItem>
                  <MenuItem value={"March"}>March</MenuItem>
                  <MenuItem value={"April"}>April</MenuItem>
                  <MenuItem value={"May"}>May</MenuItem>
                  <MenuItem value={"June"}>June</MenuItem>
                  <MenuItem value={"July"}>July</MenuItem>
                  <MenuItem value={"August"}>August</MenuItem>
                  <MenuItem value={"September"}>September</MenuItem>
                  <MenuItem value={"October"}>October</MenuItem>
                  <MenuItem value={"November"}>November</MenuItem>
                  <MenuItem value={"December"}>December</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Box>
        {/* <Box sx={{ bgcolor: '#E6E6E6', height: '100vh' }} /> */}
        <Box mt={2}>
          <CollapsibleTable month={month} />
        </Box>
      </Container>
    </React.Fragment>
  );
}
