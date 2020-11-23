import React from "react";
import { IconButton } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

export const HeaderSwitch = ({ onClick, theme }) => {
  const nextTheme = theme === "light" ? "dark" : "light";

  return nextTheme === "light" ? (
    <IconButton
      className=" mr-3"
      edge="end"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      onClick={() => onClick(nextTheme)}
      color="inherit"
    >
      <Brightness4Icon fontSize="large" className="text-white" />
    </IconButton>
  ) : (
    <IconButton
      edge="end"
      className=" mr-3"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      onClick={() => onClick(nextTheme)}
      color="inherit"
    >
      <BrightnessHighIcon fontSize="large" className="text-white" />
    </IconButton>
  );
};
