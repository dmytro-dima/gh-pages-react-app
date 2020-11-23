import React from "react";
import { CenterGroupFilters } from "./center-group-filters/center-group-filters";
import { LeftGroupFilters } from "./left-group-filters/left-group-filters";
import { makeStyles } from "@material-ui/core/styles";
import { RightGroupFilters } from "./right-group-filters/right-group-filters";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "96%",
    backgroundColor: theme.palette.type === "dark" ? "#0d47a1" : "#536dfe",
  },
}));

export const FilterForm = ({
  state,
  filterFavoriteCar,
  setFilterFavoriteCar,
}) => {
  const classes = useStyles();
  const { types, brand, yearOf, yearOn, regions, body } = filterFavoriteCar;

  const addFilterCar = (filterType, filter) => {
    setFilterFavoriteCar({ ...filterFavoriteCar, [filterType]: filter });
  };

  return (
    <div
      maxWidth="md"
      id="filter"
      className={`${classes.root} d-flex justify-content-between`}
    >
      <LeftGroupFilters
        cars={state.favoriteCar}
        types={{ types, addFilterCar }}
        brand={{ brand, addFilterCar }}
      />
      <CenterGroupFilters
        cars={state.favoriteCar}
        body={{ body, addFilterCar }}
        yearOf={{ yearOf, addFilterCar }}
        yearOn={{ yearOn, addFilterCar }}
      />
      <RightGroupFilters
        cars={state.favoriteCar}
        regions={{ regions, addFilterCar }}
      />
    </div>
  );
};
