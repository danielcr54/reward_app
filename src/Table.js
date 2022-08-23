import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";

function createData(subData) {
  return {
    subData,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  function points(data) {
    let points;
    if (data > 100) {
      let upto100 = (data - 100) * 2 + 50;
      points = upto100;
      return points;
    } else if (data >= 50) {
      points = (data - 50) * 1;
      return points;
    } else {
      points = 0;
      return points;
    }
  }

  function totalExpences(data) {
    let priceArray = [];
    priceArray.push(data && data.map((e) => +e.amount * +e.purchasedQuantity));
    const sum =
      priceArray[0] != undefined
        ? priceArray[0].reduce((partialSum, a) => partialSum + a, 0)
        : null;
    return sum;
  }
  let totalRewardsPoints = row.subData.data.map((e) =>
    points(e.amount * e.purchasedQuantity)
  );
  const sum = totalRewardsPoints.reduce((partialSum, a) => partialSum + a, 0);

  var filter = {
    month: props.selectedMonth,
  };

  let updatedMonthData =
    filter.month != ""
      ? row.subData.data.filter(function (item) {
          for (var key in filter) {
            if (item[key] === undefined || item[key] != filter[key])
              return false;
          }
          return true;
        })
      : row.subData.data;

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.subData.name}
        </TableCell>
        <TableCell align="right">{totalExpences(row.subData.data)}</TableCell>
        <TableCell align="right">{sum}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
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
                  {updatedMonthData.map((e) => (
                    <TableRow key={e.date}>
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
                        {points(e.amount * e.purchasedQuantity)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [apiData, setApiData] = React.useState({});

  useEffect(() => {
    const getData = () => {
      fetch("sampledata.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setApiData(myJson);
        });
    };
    getData();
  }, []);
  const rows = [
    createData({
      id: 1,
      name: "Pauline T Miller",
      data: [
        {
          productId: "PERRT-1265",
          productName: "Fantastic Rubber Pizza",
          purchaseDate: "2020-01-05",
          purchasedQuantity: 2,
          amount: 20,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "French Fries",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 2,
          amount: 190,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Extra Crispy Potatose",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Golden Twirls",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 10,
          amount: 10,
          month: "August",
        },
        {
          productId: "PERRT-1265",
          productName: "Extra Crispy Potatose",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 104,
          month: "July",
        },
        {
          productId: "PERRT-1265",
          productName: "Golden Twirls",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 10,
          amount: 1040,
          month: "June",
        },
      ],
    }),
    createData({
      id: 2,
      name: "Judy R Ruiz",
      data: [
        {
          productId: "PERRT-1265",
          productName: "Rubber",
          purchaseDate: "2020-01-05",
          purchasedQuantity: 3,
          amount: 2,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "Pencil",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 4,
          amount: 40,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "Acuqarium",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Watch",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 10,
          amount: 1000,
          month: "January",
        },
      ],
    }),
    createData({
      id: 3,
      name: "Justin J Morris",
      data: [
        {
          productId: "PERRT-1265",
          productName: "Fantastic Rubber Pizza",
          purchaseDate: "2020-01-05",
          purchasedQuantity: 3,
          amount: 20,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "French Fries",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 4,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Extra Crispy Potatose",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Golden Twirls",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 10,
          amount: 1040,
          month: "February",
        },
      ],
    }),
    createData({
      id: 4,
      name: "Ruth L Chasteen",
      data: [
        {
          productId: "PERRT-1265",
          productName: "Fantastic Rubber Pizza",
          purchaseDate: "2020-01-05",
          purchasedQuantity: 3,
          amount: 20,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "French Fries",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 4,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Extra Crispy Potatose",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Golden Twirls",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 10,
          amount: 1040,
          month: "February",
        },
      ],
    }),
    createData({
      id: 5,
      name: "Arthur K Chiang",
      data: [
        {
          productId: "PERRT-1265",
          productName: "Fantastic Rubber Pizza",
          purchaseDate: "2020-01-05",
          purchasedQuantity: 3,
          amount: 20,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "French Fries",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 4,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Extra Crispy Potatose",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Golden Twirls",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 10,
          amount: 1040,
          month: "February",
        },
      ],
    }),
    createData({
      id: 6,
      name: "William T Holzman",
      data: [
        {
          productId: "PERRT-1265",
          productName: "Fantastic Rubber Pizza",
          purchaseDate: "2020-01-05",
          purchasedQuantity: 3,
          amount: 20,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "French Fries",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 4,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Extra Crispy Potatose",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Golden Twirls",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 10,
          amount: 1040,
          month: "February",
        },
      ],
    }),
    createData({
      id: 7,
      name: "Elena G Green",
      data: [
        {
          productId: "PERRT-1265",
          productName: "Fantastic Rubber Pizza",
          purchaseDate: "2020-01-05",
          purchasedQuantity: 3,
          amount: 20,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "French Fries",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 4,
          amount: 1040,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Extra Crispy Potatose",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 100,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Golden Twirls",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 10,
          amount: 1040,
          month: "February",
        },
      ],
    }),
    createData({
      id: 8,
      name: "Jerry K Donahue",
      data: [
        {
          productId: "PERRT-1265",
          productName: "Fantastic Rubber Pizza",
          purchaseDate: "2020-01-05",
          purchasedQuantity: 1,
          amount: 20,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "French Fries",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 3,
          amount: 100,
          month: "March",
        },
        {
          productId: "PERRT-1265",
          productName: "Extra Crispy Potatose",
          purchaseDate: "2020-03-05",
          purchasedQuantity: 1,
          amount: 1040,
          month: "January",
        },
        {
          productId: "PERRT-1265",
          productName: "Golden Twirls",
          purchaseDate: "2020-02-05",
          purchasedQuantity: 1,
          amount: 10,
          month: "March",
        },
      ],
    }),
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Customer Names</TableCell>
              <TableCell align="right">Total Expenses&nbsp;($)</TableCell>
              <TableCell align="right">
                Total Rewards Earn&nbsp;(point)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} selectedMonth={props.month} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    totalExpenses: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    totalRewards: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
