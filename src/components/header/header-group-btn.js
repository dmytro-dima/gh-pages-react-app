import React from "react";
import { Button, Icon, IconButton } from "@material-ui/core";
import { HeaderSwitch } from "./header-switch";
import { NavLink } from "react-router-dom";
import { AuthMenu } from "./auth-menu";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const HeaderGroupBtn = ({
  setCar,
  dispatch,
  theme,
  setTheme,
  favorites,
}) => {
  return (
    <div className="header-btn_group d-flex justify-content-between">
      <Button
        className="mt-auto mb-auto mr-3"
        style={{ height: "2rem" }}
        variant="contained"
        color="secondary"
        startIcon={<Icon fontSize="large">add</Icon>}
        component={NavLink}
        onClick={() => setCar({}, dispatch)}
        to="/announcement"
      >
        добавити авто
      </Button>
      <IconButton
        className="text-white mr-3 text-decoration-none"
        edge="end"
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        color="inherit"
        component={NavLink}
        to="/office"
      >
        <FavoriteIcon fontSize="large" />
        <span
          style={{
            fontSize: "0.8rem",
            marginTop: "1.2rem",
          }}
        >
          {favorites.length === 0 ? "" : favorites.length}
        </span>
      </IconButton>

      <HeaderSwitch
        theme={theme}
        onClick={(theme) => setTheme({ theme }, dispatch)}
      />
      <AuthMenu />
    </div>
  );
};
