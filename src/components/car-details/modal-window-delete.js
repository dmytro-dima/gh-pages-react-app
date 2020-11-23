import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { NavLink } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DeleteIcon from "@material-ui/icons/Delete";

const SimpleDialog = ({ onClose, deleteCar, open, carId, dispatch }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle
        id="simple-dialog-title"
        style={{ width: "30rem", textAlign: "center" }}
      >
        Ви підтверджуєте видалення авто
      </DialogTitle>
      <List className="d-flex justify-content-between w-100">
        <ListItem>
          <Button
            className="w-100 text-white"
            variant="contained"
            color="secondary"
            component={NavLink}
            onClick={() => {
              deleteCar.deleteStateCar(carId, dispatch);
              deleteCar.deleteFavoriteCar(carId, dispatch);
            }}
            to="/"
            endIcon={<DeleteIcon />}
          >
            Видалити
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
};

export const SimpleDialogDemo = ({
  handleClickOpen,
  openModal,
  setOpenModal,
  deleteCar,
  carId,
  dispatch,
}) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div className="h-75 mt-auto mb-auto mr-3">
      <Button
        variant="outlined"
        color="secondary"
        endIcon={<DeleteIcon />}
        className="h-100"
        onClick={handleClickOpen}
      >
        Видалити
      </Button>
      <SimpleDialog
        open={openModal}
        onClose={handleClose}
        deleteCar={deleteCar}
        dispatch={dispatch}
        carId={carId}
      />
    </div>
  );
};
