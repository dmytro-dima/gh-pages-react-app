import React from "react";
import { NavLink } from "react-router-dom";
import { AutoPlaySwipeableViewsDetails } from "./steppers-details";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Link,
  Card,
  CardMedia,
  Typography,
  Paper,
} from "@material-ui/core";
import SpeedIcon from "@material-ui/icons/Speed";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { FavoriteBtn } from "./favorite-btn";

const useStyles = makeStyles((theme) =>
  createStyles({
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
      paddingBottom: 0,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingRight: "3rem",
    },
  })
);

export const FavoriteCar = ({
  images,
  description,
  mileage,
  fuel,
  regions,
  color,
  id,
  brand,
  year,
  car,
  favorite,
  dispatch,
}) => {
  const classes = useStyles();

  const favoriteCars =
    favorite.favoriteCars.length !== 0
      ? favorite.favoriteCars.some((favoriteCar) => favoriteCar.id === id)
      : false;

  return (
    <Card
      className="d-flex justify-content-between mt-3 mb-4"
      component={Paper}
      elevation={4}
    >
      <div className="d-flex flex-column w-75">
        <CardContent className={classes.content}>
          <div className="d-flex">
            <FavoriteBtn
              favorite={favorite}
              active={favoriteCars}
              car={car}
              dispatch={dispatch}
            />
            <Typography component="h5" variant="h5" className="mt-auto mb-auto">
              <Link color="inherit" component={NavLink} to={`/:pages/:${id}`}>
                {brand.toUpperCase()} {year} року.
              </Link>
            </Typography>
          </div>
          <Typography variant="subtitle1" color="textSecondary">
            {description.subText
              ? description.subText.substr(0, 150)
              : description.substr(0, 150)}
            ...
          </Typography>
        </CardContent>
        <div className="d-flex align-items-center pl-3 pr-3">
          <div className="d-flex justify-content-between flex-wrap mb-3 w-100">
            <div className="d-flex w-auto" style={{ height: "2rem" }}>
              <SpeedIcon className="mt-auto mb-auto ml-2" />
              <Typography className="mt-auto mb-auto ml-2" paragraph>
                {mileage} тис.км
              </Typography>
            </div>
            <div className="d-flex w-auto" style={{ height: "2rem" }}>
              <InvertColorsIcon className="mt-auto mb-auto ml-2" />
              <Typography className="mt-auto mb-auto ml-2" paragraph>
                {fuel}
              </Typography>
            </div>
            <div className="d-flex w-auto" style={{ height: "2rem" }}>
              <LocationOnIcon className="mt-auto mb-auto ml-2" />
              <Typography className="mt-auto mb-auto ml-2" paragraph>
                {regions}
              </Typography>
            </div>
            <div className="d-flex w-auto" style={{ height: "2rem" }}>
              <ColorLensIcon className="mt-auto mb-auto ml-2" />
              <Typography className="mt-auto mb-auto ml-2" paragraph>
                {color}
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <CardMedia className="w-25 h-100">
        <AutoPlaySwipeableViewsDetails images={images} />
      </CardMedia>
    </Card>
  );
};
