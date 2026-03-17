import React, { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import axios from "axios";
import { Button } from "antd";

const App = () => {
  const api = "http://localhost:3000/users";

  const [status, setStatus] = useState("");
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
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

  const [todo, setTodo] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(api);
      setTodo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function createData(name, city, job, age, status, opt) {
    return { name, city, job, age, status, opt };
  }

  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0, <button>hello</button>),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  // ];

  return (
    <div>
      <div className="header border-b-[2px] border-b-[#ccc]">
        <div className="max-w-[1440px] p-[10px_20px] flex justify-between items-center ">
          <TextField
            id="outlined-search"
            label="Searchs field"
            type="search"
            size="small"
          />

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={status}
              label="Age"
              onChange={handleStatus}
            >
              <MenuItem value={""}>All</MenuItem>
              <MenuItem value={"active"}>Active</MenuItem>
              <MenuItem value={"inactive"}>Inactive</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">City</StyledTableCell>
                <StyledTableCell align="right">Age</StyledTableCell>
                <StyledTableCell align="right">job</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Option</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todo.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.city}</StyledTableCell>
                  <StyledTableCell align="right">{row.age}</StyledTableCell>
                  <StyledTableCell align="right">{row.job}</StyledTableCell>
                  <StyledTableCell align="right">
                    <div
                      className={`${row.status == "active" ? "bg-red-500" : "bg-blue-500"}`}
                    >
                      {row.status}
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="flex gap-2 justify-end">
                      <Button>edit</Button>
                      <Button>del </Button>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default App;
