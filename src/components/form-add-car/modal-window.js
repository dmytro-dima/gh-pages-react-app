import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { NavLink } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PlusOneIcon from "@material-ui/icons/PlusOne";

function SimpleDialog(props) {
  const { onClose, createCar, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        Ви підтверджуєте створення картки авто
      </DialogTitle>
      <List className="d-flex justify-content-between w-100">
        <ListItem>
          <Button
            className="w-100 text-white"
            variant="contained"
            color="primary"
            component={NavLink}
            onClick={() => createCar()}
            to="/"
            startIcon={<PlusOneIcon />}
          >
            Добавити авто
          </Button>
        </ListItem>
        <ListItem>
          <Button
            className="w-100"
            variant="contained"
            color="primary"
            onClick={() => handleClose()}
            endIcon={<ExitToAppIcon />}
          >
            Повернутись
          </Button>
        </ListItem>
      </List>
    </Dialog>
  );
}

export const SimpleDialogDemo = ({
  handleClickOpen,
  openModal,
  setOpenModal,
  createCar,
}) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="w-25">
      <Button
        className="w-100  mt-3"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Добавити авто
      </Button>
      <SimpleDialog
        open={openModal}
        onClose={handleClose}
        createCar={createCar}
      />
    </div>
  );
};
