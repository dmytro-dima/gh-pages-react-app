import React, { useContext } from "react";
import { Toolbar, AppBar } from "@material-ui/core";
import { HeaderTitle } from "./header-title";
import { HeaderGroupBtn } from "./header-group-btn";
import DataContext from "../../context/store";
import { actions } from "../../store/store";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.type === "dark" ? "#0d47a1" : "#536dfe",
  },
}));

export const PrimarySearchAppBar = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(DataContext);

  return (
    <div className="header">
      <AppBar position="static" className={classes.root}>
        <Toolbar className="header-toolbar d-flex justify-content-between">
          <HeaderTitle cars={state.cars} />
          <HeaderGroupBtn
            favorites={state.favoriteCar}
            dispatch={dispatch}
            setCar={actions.setCar}
            theme={state.theme}
            setTheme={actions.setTheme}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};
