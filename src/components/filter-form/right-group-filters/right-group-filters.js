import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { AutocompleteFilter } from "../autocomplete-filter";
import SearchIcon from "@material-ui/icons/Search";
import { typeRegions } from "../types/typesRegions";
import { SelectPeriod } from "./select-period";
import { NavLink } from "react-router-dom";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";

export const RightGroupFilters = ({
  yearOf,
  yearOn,
  regions,
  filtersParametersUrl,
  clearFilter,
}) => {
  return (
    <Grid item sm={12} md={6} className="filter-content_right">
      <div className="d-flex  flex-wrap">
        <Typography className="mt-auto mb-auto text-white w-25">
          Регіон
        </Typography>
        <div className="w-75">
          <AutocompleteFilter
            label="Регіон"
            options={typeRegions}
            setInputValue={regions.addFilterCar}
            inputValue={regions.regions}
            filterType="regions"
          />
        </div>
      </div>
      <SelectPeriod yearOn={yearOn} yearOf={yearOf} />
      <Button
        variant="contained"
        color="secondary"
        endIcon={<SearchIcon />}
        className="w-75 text-white"
        style={{ margin: "1rem 0 0 6rem" }}
        component={NavLink}
        to={`/:pages/:search/:${filtersParametersUrl}`}
      >
        Пошук
      </Button>
      <Button
        variant="contained"
        color="primary"
        endIcon={<RotateLeftIcon />}
        className="w-75 text-white"
        style={{ margin: "1rem 0 0 6rem" }}
        component={NavLink}
        to="/"
        onClick={() => clearFilter()}
      >
        Очистити фільтр
      </Button>
    </Grid>
  );
};
