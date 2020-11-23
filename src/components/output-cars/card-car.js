import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Link,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Grid,
  IconButton,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SpeedIcon from "@material-ui/icons/Speed";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { SwipeableTextMobileStepper } from "./steppers";

import { FavoriteBtn } from "./favorite-btn";
import { CardsSkeleton } from "./cards-skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "97%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export const CardCar = ({
  id,
  images,
  brand,
  fuel,
  year,
  mileage,
  description,
  regions,
  color,
  dispatch,
  favorite,
  car,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const favoriteCars = favorite.favoriteCars.some((car) => car.id === id);

  return car ? (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={`${classes.root} ml-auto mr-auto mt-2`}>
        <SwipeableTextMobileStepper images={images} />
        <CardHeader subheader="September 14, 2016" />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.link}
          >
            <Link color="inherit" component={NavLink} to={`/:pages/:${id}`}>
              {brand.toUpperCase()} {year} року.
            </Link>
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="d-flex justify-content-between">
          <FavoriteBtn
            car={car}
            favorite={favorite}
            dispatch={dispatch}
            active={favoriteCars}
          />
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <div className="d-flex justify-content-between">
              <Typography paragraph>
                {description.subText
                  ? description.subText.substr(0, 100)
                  : description.substr(0, 100)}
              </Typography>
            </div>
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
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  ) : (
    <CardsSkeleton />
  );
};
