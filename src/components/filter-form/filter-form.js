import React from "react";
import { RightGroupFilters } from "./right-group-filters/right-group-filters";
import { LeftGroupFilters } from "./left-group-filters/left-group-filters";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    backgroundColor: theme.palette.type === "dark" ? "#0d47a1" : "#536dfe",
  },
}));

export const FilterForm = ({ state, actions, dispatch }) => {
  const classes = useStyles();
  const {
    toggle = "all",
    types = "",
    brand = "",
    body = "",
    yearOf = "",
    yearOn = "",
    regions = "",
  } = state.filters;

  const addFilterCar = (filterType, filter) => {
    actions.addFilter(filterType, filter, dispatch);
  };

  const parameters =
    Object.keys(state.filters).length !== 0
      ? Object.keys(state.filters)
          .map((filter) => (filter ? `${filter}=${state.filters[filter]}` : ""))
          .join("&")
      : `toggle=all&`;

  const filtersParametersUrl = state.filters.toggle
    ? parameters
    : `toggle=all&${parameters}`;

  const clearFilter = () => {
    actions.setFilters({}, dispatch);
  };

  return (
    <Grid container spacing={3} id="filter" className={`${classes.root}`}>
      <LeftGroupFilters
        cars={state.cars}
        toggle={{ toggle, addFilterCar }}
        types={{ types, addFilterCar }}
        brand={{ brand, addFilterCar }}
        body={{ body, addFilterCar }}
      />
      <RightGroupFilters
        filtersParametersUrl={filtersParametersUrl}
        clearFilter={clearFilter}
        yearOn={{ yearOn, addFilterCar }}
        yearOf={{ yearOf, addFilterCar }}
        regions={{ regions, addFilterCar }}
      />
    </Grid>
  );
};
