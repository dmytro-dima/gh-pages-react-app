import React, { useContext } from "react";
import { FilterForm } from "../../components/filter-form/filter-form";
import { Cars } from "../../components/output-cars/output-cars";
import DataContext from "../../context/store";
import { Container } from "@material-ui/core";
import { actions } from "../../store/store";

export const Main = ({ match }) => {
  const { state, dispatch } = useContext(DataContext);

  return (
    <Container maxWidth="lg" style={{ minHeight: "140vh" }}>
      <FilterForm
        state={state}
        actions={actions}
        dispatch={dispatch}
        theme={state.them}
      />
      <Cars
        state={state}
        match={match}
        setFiltersState={actions.setFilters}
        dispatch={dispatch}
        favorite={{
          favoriteCars: state.favoriteCar,
          addFavoriteCar: actions.addFavoriteCar,
          deleteFavoriteCar: actions.deleteFavoriteCar,
        }}
      />
    </Container>
  );
};
