import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "../../Asset/CSS/New_dash.css";
import { FaRegEdit } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoIosMail } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Donut from "../Doughnet_chart";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { hover } from "@testing-library/user-event/dist/hover";
import { TablePagination } from "@mui/material";
import axios from "axios";

const New_Dash = (props) => {
  // const [uploadProgress, setUploadProgress] = React.useState(0);

  // axios.post('/upload', formData, {
  //   onUploadProgress: (progressEvent) => {
  //     const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
  //     setUploadProgress(percentCompleted);
  //   }
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(error => {
  //   console.error(error);
  // });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#64b5f6",
      color: "#f5f5f5",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(
    contractcode,
    contractid,
    staff,
    dept,
    start,
    end,
    signday
  ) {
    return { contractcode, contractid, staff, dept, start, end, signday };
  }

  const rows = [
    createData("Contract Code", 1, 2, 3, 4, 5, 6, 7),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <h3 className="dash_heading">HRM DASHBOARD</h3>
        <div className="card_position">
          <Card className="card_content" sx={{ maxHeight: 150 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="green"
                component="div"
              >
                <FaRegEdit /> TOTAL STAFF
              </Typography>
              <div className="progress_bar_position">
                <div
                  className="progress-bar bg-success"
                  id="progressbar_1"
                  style={{
                    height: "3px",
                    width: "40%",
                  }}
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card className="card_content" sx={{ maxHeight: 150 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="#ffc107"
              >
                <FaRegEdit /> TOTAL STAFF
              </Typography>
              <div className="progress_bar_position">
                <div
                  class="progress-bar bg-warning"
                  id="progressbar_1"
                  style={{
                    height: "3px",
                    width: "40%",
                  }}
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card className="card_content" sx={{ maxHeight: 150 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="#0BC6F3"
                component="div"
              >
                <FaRegEdit /> TOTAL STAFF
              </Typography>
              <div className="progress_bar_position">
                <div
                  class="progress-bar bg-info"
                  id="progressbar_1"
                  style={{
                    height: "3px",
                    width: "40%",
                  }}
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card className="card_content" sx={{ maxHeight: 150 }}>
            <CardContent>
              <Typography gutterBottom variant="h6" color="red" component="div">
                <FaRegEdit /> TOTAL STAFF
              </Typography>
              <div className="progress_bar_position">
                <div
                  class="progress-bar bg-danger"
                  id="progressbar_1"
                  style={{
                    height: "3px",
                    width: "40%",
                  }}
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="donut_position">
          <Donut />
          <Donut />
        </div>

        <div className="dash_table">
          <h4>Expired contracts that need to be extended</h4>
          <TableContainer component={Paper}>
            <Table
              sx={{
                minWidth: 700,
                "& .MuiTableRow-root:hover": {
                  backgroundColor: "#80deea",
                },
              }}
              aria-label="customized table"
            >
              <TableHead>
                <TablePagination
                  className="pagination_dash"
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={0}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  slotProps={{
                    select: {
                      "aria-label": "rows per page",
                    },
                    actions: {
                      showFirstButton: true,
                      showLastButton: true,
                    },
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
                <TableRow>
                  <StyledTableCell>Contract Code</StyledTableCell>
                  <StyledTableCell>Contract id</StyledTableCell>
                  <StyledTableCell>Staff</StyledTableCell>
                  <StyledTableCell>Departments</StyledTableCell>
                  <StyledTableCell>Start</StyledTableCell>
                  <StyledTableCell>End</StyledTableCell>
                  <StyledTableCell>Sign day</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.contractcode}
                    </StyledTableCell>
                    <StyledTableCell>{row.contractid}</StyledTableCell>
                    <StyledTableCell>{row.staff}</StyledTableCell>
                    <StyledTableCell>{row.dept}</StyledTableCell>
                    <StyledTableCell>{row.start}</StyledTableCell>
                    <StyledTableCell>{row.end}</StyledTableCell>
                    <StyledTableCell>{row.signday}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* <div className="upload_dash">
        <form>
      
      <Button variant="contained" color="primary" component="span">
        Upload
      </Button>
    </form>
        </div> */}
      </Container>
    </React.Fragment>
  );
};

export default New_Dash;
