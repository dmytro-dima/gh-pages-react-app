import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.type === "dark" ? "none" : "#fff",
  },
  button: {
    color:
      theme.palette.type === "dark"
        ? "rgba(255, 255, 255, 0.7)"
        : "rgba(0, 0, 0, 0.54)",
  },
}));

export const ToggleGroup = ({ inputValue, setInputValue, filterType }) => {
  const classes = useStyles();

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment) setInputValue(filterType, newAlignment);
  };

  const width = 100 / 4 + "rem";

  return (
    <ToggleButtonGroup
      className={`${classes.root} filter-content_toggle mt-3 w-100`}
      value={inputValue}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      style={{ width: 20 + "rem" }}
    >
      <ToggleButton
        className={classes.button}
        value="all"
        aria-label="one"
        style={{ width }}
      >
        всі
      </ToggleButton>
      <ToggleButton
        className={classes.button}
        value="Був у використані"
        aria-label="two"
        style={{ width }}
      >
        вживані
      </ToggleButton>
      <ToggleButton
        className={classes.button}
        value="Новий"
        aria-label="three"
        style={{ width }}
      >
        нові
      </ToggleButton>
      <ToggleButton
        className={classes.button}
        value="Пригнаний"
        aria-label="three"
        style={{ width }}
      >
        пригнані
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
