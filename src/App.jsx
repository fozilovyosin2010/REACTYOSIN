import React, { useCallback, useReducer, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MenuBtn from "./Component/MenuBtn";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

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

const App = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // state → current state
  // dispatch → function to trigger updates
  // reducer → function that updates state
  // initialState → initial value, write with obj

  //////

  function reducer(state, action) {
    if (action.key === "del") {
      return {
        ...state,
        data: state.data.filter((e) => e.id !== action.value),
      };
    } else if (action.key === "check") {
      const arr = state.data.map((e) => {
        if (e.id === action.value) {
          e = { ...e, status: !e.status };
        }
        return e;
      });

      return { ...state, data: arr };
    } else if (action.key === "add") {
      return { ...state, data: [...state.data, action.value] };
    }
    // open edit
    else if (action.key === "openEdit") {
      const { id, name, age } = action.value;

      return { ...state, idxEdit: id, nameEdit: name, ageEdit: age };
    }
    // close edit
    else if (action.key === "closeEdit") {
      return { ...state, idxEdit: "", id: null, ageEdit: 0 };
    }
    // for inps of formEdit
    else if (action.key === "setNameEdit") {
      return { ...state, nameEdit: action.value };
    } else if (action.key === "setAgeEdit") {
      return { ...state, ageEdit: action.value };
    }

    // edit data
    else if (action.key === "edit") {
      const arr = state.data.map((e) => {
        if (e.id === action.value.id) {
          e = { ...e, ...action.value };
        }
        return e;
      });

      return { ...state, data: arr };
    }
  }

  const initialState = {
    data: [
      { id: 0, name: "Ali", age: 12, status: false },
      { id: 2, name: "Yosin", age: 16, status: true },
      { id: 4, name: "John", age: 18, status: true },
    ],

    idxEdit: null,
    nameEdit: "",
    ageEdit: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // delData
  const handleDelBtn = useCallback((id) => {
    dispatch({ key: "del", value: id });
  }, []);

  // checkData
  const handleChekcBtn = useCallback((id) => {
    dispatch({ key: "check", value: id });
  }, []);

  const [openAdd, setOpenAdd] = useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleSubmitAdd = (event) => {
    event.preventDefault();

    const obj = {
      id: new Date().getTime(),
      name: event.target["name"].value.trim(),
      age: event.target["age"].value.trim(),
      status: false,
    };

    dispatch({ key: "add", value: obj });
    handleCloseAdd();
  };

  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpenEdit = useCallback((elem) => {
    setOpenEdit(true);

    // setTimeout(() => {
    dispatch({
      key: "openEdit",
      value: {
        id: elem.id,
        name: elem.name,
        age: elem.age,
      },
    });
    // }, 0);
  }, []);

  const handleCloseEdit = () => {
    setOpenEdit(false);

    dispatch({ key: "closeEdit" });
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();

    const obj = {
      id: state.idxEdit,
      name: state.nameEdit.trim(),
      age: state.ageEdit,
    };

    console.log(obj);

    dispatch({ key: "edit", value: obj });
    handleCloseEdit();
  };

  console.log("parent renders");

  return (
    <div className="p-4">
      <div className="header py-4">
        <IconButton onClick={handleClickOpenAdd} sx={{ color: "blue" }}>
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Options</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state?.data?.map((elem) => (
              <StyledTableRow key={elem.id}>
                <StyledTableCell component="th" scope="row">
                  {elem.name}
                </StyledTableCell>
                <StyledTableCell align="right">{elem.age}</StyledTableCell>
                <StyledTableCell align="right">
                  <span
                    className={`${elem.status ? "bg-blue-500" : "bg-red-500"} p-[10px_15px] text-[#fff] text-[12px] font-[600] rounded-[15px]`}
                  >
                    {elem.status ? "ACTIVE" : "INACTIVE"}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <MenuBtn
                    id={elem.id}
                    name={elem.name}
                    age={elem.age}
                    btnCheck={handleChekcBtn}
                    btnDel={handleDelBtn}
                    btnEdit={handleClickOpenEdit}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* add modal */}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmitAdd} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseAdd}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" form="subscription-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* edit modal */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmitEdit} id="subscription-form">
            <TextField
              value={state?.nameEdit}
              onChange={(e) =>
                dispatch({ key: "setNameEdit", value: e.target.value })
              }
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              value={state.ageEdit}
              onChange={(e) =>
                dispatch({ key: "setAgeEdit", value: e.target.value })
              }
              autoFocus
              required
              margin="dense"
              id="age"
              name="age"
              label="Age"
              type="number"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" form="subscription-form">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
