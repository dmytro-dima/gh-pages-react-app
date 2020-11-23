import React, { useContext } from "react";
import { Container } from "@material-ui/core";
import DataContext from "../../context/store";
import { actions } from "../../store/store";
import { CarDetails } from "../../components/car-details/car-details";

export const ViewCarDetails = ({ match }) => {
  const { state, dispatch } = useContext(DataContext);

  const car = state.cars.find((car) => car.id === match.params.id.slice(1));

  return (
    <Container maxWidth="lg" className="mt-5" id="view-car-details">
      <CarDetails
        car={car}
        deleteCar={{
          deleteStateCar: actions.deleteCar,
          deleteFavoriteCar: actions.deleteFavoriteCar,
        }}
        setCar={actions.setCar}
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
