import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.type === "dark" ? "none" : "#fff",
    borderRadius: ".3rem",
  },
  input: {
    color:
      theme.palette.type === "dark"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(0, 0, 0, 0.54)",
  },
}));

export const SelectParameter = ({
  options,
  label,
  inputValue,
  setInputValue,
  filterType,
}) => {
  const classes = useStyles();
  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(filterType, event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      className={`${classes.root} text-white mt-3 w-100`}
    >
      <InputLabel
        id="demo-simple-select-outlined-label"
        className={`${classes.input}`}
      >
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        className="w-100"
        value={inputValue}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options &&
          options.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};
