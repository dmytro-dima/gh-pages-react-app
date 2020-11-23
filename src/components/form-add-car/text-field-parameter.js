import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import DoneIcon from "@material-ui/icons/Done";

export const TextFieldParameter = ({
  name,
  width,
  label,
  setInputValue,
  inputValue,
  type,
  typeParameter,
}) => {
  const [err, setErr] = useState("");

  const onSubmitText = (value) => {
    if (type === "number") {
      if (isNaN(value)) {
        setErr("Введіть числове значення!");
      } else {
        setInputValue(typeParameter, value);
        setErr("");
      }
    } else setInputValue(typeParameter, value);
  };

  return (
    <div className="d-flex mt-1 details">
      <Typography className="details-title w-50">{name}</Typography>
      <div className="d-flex details-type w-50">
        {!inputValue ? (
          <NewReleasesIcon className="details-icon" />
        ) : (
          <DoneIcon className="details-icon" />
        )}
        <TextField
          value={inputValue}
          label={label}
          variant="outlined"
          style={{ width: width + "rem" }}
          onChange={(e) => onSubmitText(e.target.value)}
        />
        {err && <p className="text-danger m-auto">{err}</p>}
      </div>
    </div>
  );
};
