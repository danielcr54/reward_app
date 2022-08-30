import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MonthDropdown(props) {
  const monthData = [
    { id: 1, select: "All Months" },
    { id: 2, select: "January" },
    { id: 3, select: "February" },
    { id: 4, select: "March" },
    { id: 5, select: "April" },
    { id: 6, select: "May" },
    { id: 7, select: "June" },
    { id: 8, select: "July" },
    { id: 9, select: "August" },
    { id: 10, select: "September" },
    { id: 10, select: "October" },
    { id: 10, select: "November" },
    { id: 10, select: "December" },
  ];
  return (
    <div>
      <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.month}
            label="month"
            onChange={props.handleChange}
          >
            {monthData.map((e, index) => <MenuItem key={index} value={e.select}>{e.select}</MenuItem> )}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
export default MonthDropdown;
