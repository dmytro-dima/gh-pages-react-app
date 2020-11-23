import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import DoneIcon from "@material-ui/icons/Done";

export const SelectParameter = ({
  name,
  options,
  width,
  label,
  inputValue,
  setInputValue,
  typeParameter,
}) => {
  console.log(inputValue);
  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(typeParameter, event.target.value);
  };

  return (
    <div className="d-flex mt-1 details">
      <Typography className="details-title w-50">{name}</Typography>
      <div className="d-flex details-type w-50">
        {inputValue === "" ? (
          <NewReleasesIcon className="details-icon" />
        ) : (
          <DoneIcon className="details-icon" />
        )}
        <FormControl variant="outlined">
          <InputLabel>{label}</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            value={inputValue}
            onChange={handleChange}
            style={{ width: width + "rem" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};
