import React, { useState } from "react";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { SimpleDialogDemo } from "./modal-window-delete";
import { BreadcrumbsDetails } from "./breadcrumbs";
import { NavLink } from "react-router-dom";
import { FavoriteBtn } from "./favorite-btn";

export const Navigation = ({
  carId,
  deleteCar,
  dispatch,
  car,
  setCar,
  favorite,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(!openModal);
  };

  const favoriteCars = favorite.favoriteCars.some(
    (favoriteCar) => favoriteCar.id === carId
  );

  return (
    <div
      className="mb-5 w-100 d-flex justify-content-between"
      style={{ height: "3rem", backgroundColor: "#e0e0e0" }}
    >
      <BreadcrumbsDetails {...car} />
      <div className="w-50 d-flex justify-content-end ">
        <FavoriteBtn
          dispatch={dispatch}
          car={car}
          active={favoriteCars}
          favorite={favorite}
        />
        <Button
          variant="outlined"
          color="primary"
          className="h-75 mt-auto mb-auto mr-3"
          component={NavLink}
          to={`/edit`}
          onClick={() => setCar({ ...car, edit: true }, dispatch)}
          endIcon={<EditIcon />}
        >
          Редагувати
        </Button>
        <SimpleDialogDemo
          handleClickOpen={handleClickOpen}
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteCar={deleteCar}
          dispatch={dispatch}
          carId={carId}
        />
      </div>
    </div>
  );
};
