import React from "react";
import { FavoriteCar } from "./favorite-car/favorite-car";
import { SkeletonCar } from "./skeleton-cars";
import { IconButton, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import HomeIcon from "@material-ui/icons/Home";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svg: {
    color: theme.palette.type === "dark" ? "#fff" : "#00",
  },
}));

export const FavoriteCars = ({ cars, favorite, dispatch }) => {
  const classes = useStyles();

  return (
    <div className="mb-5">
      {/*<DataGrid pagination {...data} />*/}
      {cars.length !== 0 ? (
        cars.map((car) => (
          <FavoriteCar
            {...car}
            car={car}
            key={car.id}
            favorite={favorite}
            dispatch={dispatch}
          />
        ))
      ) : (
        <>
          <div className="d-flex">
            <Typography className="mt-auto mb-auto">
              Виберіть авто яке вам сподобалось /
            </Typography>
            <IconButton component={NavLink} to="/" className={classes.svg}>
              <HomeIcon />
            </IconButton>
          </div>
          <SkeletonCar />
          <SkeletonCar />
        </>
      )}
    </div>
  );
};
