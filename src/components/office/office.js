import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FilterForm } from "./filter-form/filter-form";
import { FavoriteCars } from "./favorite-cars/favorite-cars";

export const Office = ({ state, dispatch, favorite }) => {
  const [filterFavoriteCar, setFilterFavoriteCar] = useState({
    types: "",
    brand: "",
    yearOf: null,
    yearOn: null,
    regions: "",
    body: "",
  });

  const filterCar = ({ types, brand, body, regions, yearOf, yearOn }) => {
    return state.favoriteCar
      .filter((el) => (types ? el.types === types : el))
      .filter((el) => (brand ? el.brand === brand : el))
      .filter((el) => (body ? el.body === body : el))
      .filter((el) => (regions ? el.regions === regions : el))
      .filter((el) => (yearOf ? el.year <= yearOf : el))
      .filter((el) => (yearOn ? el.year >= yearOn : el));
  };

  return (
    <div>
      <div className="d-flex mt-2">
        <FavoriteIcon fontSize="large" className="mb-auto mt-auto mr-2" />
        <Typography variant="h4">Блокнот</Typography>
      </div>
      <FilterForm
        state={state}
        filterFavoriteCar={filterFavoriteCar}
        setFilterFavoriteCar={setFilterFavoriteCar}
      />
      <FavoriteCars
        cars={filterCar({ ...filterFavoriteCar })}
        favorite={favorite}
        dispatch={dispatch}
      />
    </div>
  );
};
