import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Typography } from "@material-ui/core";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import DoneIcon from "@material-ui/icons/Done";

export const AutocompleteFilter = ({
  options,
  name,
  setInputValue,
  inputValue,
  typeParameter,
}) => {
  const [value, setValue] = useState(inputValue ? inputValue : "");

  return (
    <div className="d-flex mt-1 details">
      <Typography className="details-title w-50">{name}</Typography>
      <div className="d-flex details-type w-50">
        {inputValue ? (
          <DoneIcon className="details-icon" />
        ) : (
          <NewReleasesIcon className="details-icon" />
        )}
        <Autocomplete
          style={{ width: "20rem" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(typeParameter, newInputValue);
          }}
          options={options}
          renderInput={(params) => (
            <TextField label="Оберіть" {...params} variant="outlined" />
          )}
        />
      </div>
    </div>
  );
};
