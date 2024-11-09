import React, { Fragment } from "react";
import "./todo-details.css";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const TodoDetails = ({
  TodoDetails,
  openDialog,
  setOpenDialog,
  setTodoDetails,
}) => {
  return (
    <Fragment>
      <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <DialogTitle>{TodoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenDialog(false);
              setTodoDetails(null);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default TodoDetails;
