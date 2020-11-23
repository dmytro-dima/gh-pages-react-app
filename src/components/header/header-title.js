import React, { useState } from "react";
import { Button, CardContent, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import * as _ from "lodash";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    height: "2.5rem",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  select: {
    width: "17rem",
  },
  btn: {
    color:
      theme.palette.type === "dark"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(0, 0, 0, 0.54)",
  },
}));

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "none" }),
  option: (styles) => ({ ...styles, backgroundColor: "white", zIndex: 2 }),
  input: (styles) => ({ ...styles, color: "rgba(255, 255, 255, 1)" }),
  placeholder: (styles) => ({ ...styles, color: "rgba(255, 255, 255, 0.7)" }),
  multiValueLabel: (styles) => ({
    ...styles,
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "#000",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "#000",
    ":hover": {
      backgroundColor: "red",
      color: "#fff",
    },
  }),
};

export const HeaderTitle = ({ cars }) => {
  const classes = useStyles();
  const [parameters, setParameters] = useState(null);

  const optionsBrand = _.uniq(
    cars.map((car) => (car ? car.brand : ""))
  ).map((brand) =>
    brand ? { value: brand, label: brand, type: "brand" } : ""
  );

  const optionsYears = _.sortedUniqBy(
    _.sortBy(
      _.groupBy(cars, (car) =>
        parameters ? car.brand === parameters[0].value : ""
      ).true,
      "year"
    ),
    "year"
  ).map(({ year }) => (year ? { value: year, label: year, type: "year" } : ""));

  const options = () => {
    if (!parameters) {
      return optionsBrand;
    } else if (parameters.length === 1) {
      return optionsYears;
    } else if (parameters.length === 2) {
      return [];
    }
  };

  const handleChange = (parameter) => {
    if (parameter) {
      setParameters(parameter.length === 0 ? null : parameter);
    } else setParameters(null);
  };

  const urlSearch = parameters
    ? parameters
        .map((filter) => (filter.type ? `${filter.type}=${filter.value}` : ""))
        .join("&")
    : "";

  return (
    <div className="header_title_group d-flex ">
      <Button
        component={NavLink}
        to="/"
        className="w-50 text-white h-100 mb-auto mt-auto"
      >
        <Typography className="header-title" variant="h6" noWrap>
          React car search
        </Typography>
      </Button>
      {cars ? (
        <div className={classes.search}>
          <Select
            isMulti
            options={options()}
            className={`${classes.select} text-dark mb-auto mt-auto ml-2`}
            classNamePrefix="search"
            onChange={(e) => handleChange(e)}
            styles={colourStyles}
          />
          <Button
            variant="outlined"
            className={`${classes.btn} mb-auto mt-auto ml-2`}
            startIcon={<SearchIcon />}
            component={NavLink}
            to={`/:pages/:search/:toggle=all&${urlSearch}`}
          >
            Search
          </Button>
        </div>
      ) : (
        <Skeleton variant="text" width="20rem" />
      )}
    </div>
  );
};
