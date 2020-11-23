import React, { useEffect, useReducer, useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider, Paper } from "@material-ui/core";
import DataContext from "./context/store";
import { reducer, actions } from "./store/store";
import { initialState } from "./store/initialState";
import { Main } from "./pages/main-page/main";
import { FormNewCar } from "./pages/form-new-car/form-new-car";
import { PrimarySearchAppBar } from "./components/header/header";
import { ViewCarDetails } from "./pages/view-car-details/view-car-details";
import { OfficeUser } from "./pages/office-user/office-user";

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  useEffect(() => {
    actions.getCars(dispatch);
    actions.getTheme(dispatch);
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: state.theme ? state.theme : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <DataContext.Provider value={contextValue}>
        <Paper id="app-content">
          <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:pages/:id" component={ViewCarDetails} />
            <Route path="/:pages/:search/:parameters" component={Main} />
            <Route exact path="/announcement" component={FormNewCar} />
            <Route exact path="/office" component={OfficeUser} />
            <Route exact path="/edit" component={FormNewCar} />
            <Redirect to="/" />
          </Switch>
        </Paper>
      </DataContext.Provider>
    </ThemeProvider>
  );
};

// <Route exact path="/announcement" component={FormNewCar} />
// {/*<Route exact path="/logout" />*/}
// <Route exact path="/white" component={Main} />
// <Route exact path="/white/:filters/" component={Main} />
// {/*<Route path="/white/:filters/:carId" component={ViewCarDetails} />*/}
// <h1>content</h1>
// <Redirect to="/white" />
