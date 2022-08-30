import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import ButtonIcon from "../Component/ButtonIcon";
import CustumerDetails from "../Component/CustumerDetails";

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

  let totalRewardsPoints = row && row.subData && row.subData.data && row.subData.data.map((e) =>
    points(e.amount * e.purchasedQuantity)
  );
  const sum = totalRewardsPoints && totalRewardsPoints.reduce((partialSum, a) => partialSum + a, 0);

  var filter = {
    month: props.selectedMonth,
  };

  let updatedMonthData =
    filter.month != "All Months"
      ? row.subData.data.filter(function (item) {
          for (var key in filter) {
            if (item[key] === undefined || item[key] != filter[key])
              return false;
          }
          return true;
        })
      : row && row.subData && row.subData.data;

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <ButtonIcon open={open} onClick={() => setOpen(!open)} />
        </TableCell>
        <TableCell component="th" scope="row">
          {row && row.subData && row.subData.name}
        </TableCell>
        <TableCell align="right">{totalExpences(row && row.subData && row.subData.data)}</TableCell>
        <TableCell align="right">{sum}</TableCell>
      </TableRow>
      <CustumerDetails
        updatedMonthData={updatedMonthData}
        open={open}
        points={points}
      />
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
          console.log("apiDataapiDataapiDataapiDataapiData", myJson);
          setApiData(myJson);
        });
    };
    getData();
  
  }, []);
  console.log("apiDataapiDataapiDataapiDataapiData123456", apiData, apiData && apiData.data ? apiData : "apiDataapiDataapiDataapiDataapiData789")
  let finalData = apiData && apiData.data &&  apiData
  console.log("finaData", finalData)
  const rows = [
    createData(finalData != null && finalData),
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
            {rows.map((row, index) => (
              <Row key={index} row={row} selectedMonth={props.month} />
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
