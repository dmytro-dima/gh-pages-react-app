import React, { useContext } from "react";
import { Container, Breadcrumbs, Link, Typography } from "@material-ui/core";
import DataContext from "../../context/store";
import HomeIcon from "@material-ui/icons/Home";
import { NavLink } from "react-router-dom";
import { Office } from "../../components/office/office";
import { actions } from "../../store/store";

export const OfficeUser = () => {
  const { state, dispatch } = useContext(DataContext);

  return (
    <Container maxWidth="md" className="mt-5" id="office-user">
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={NavLink} to="/" className="d-flex" color="inherit">
          <HomeIcon className="mt-auto mb-auto mr-2" />
          React car search
        </Link>
        <Typography>Блокнот</Typography>
      </Breadcrumbs>
      <Office
        state={state}
        actions={actions}
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
