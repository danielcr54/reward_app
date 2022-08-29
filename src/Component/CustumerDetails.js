import * as React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

function CustumerDetails(props) {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={props.open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Purchase History
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Discounted Price ($)</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total price ($)</TableCell>
                  <TableCell align="right">Reward ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.updatedMonthData.map((e, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {e.purchaseDate}
                    </TableCell>
                    <TableCell>{e.productName}</TableCell>
                    <TableCell>{e.amount}</TableCell>
                    <TableCell align="right">{e.purchasedQuantity}</TableCell>
                    <TableCell align="right">
                      {e.amount * e.purchasedQuantity}
                    </TableCell>
                    <TableCell align="right">
                      {props.points(e.amount * e.purchasedQuantity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
export default CustumerDetails;
