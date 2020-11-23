import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export const FavoriteBtn = ({ active, car, dispatch, favorite }) => {
  return active ? (
    <IconButton onClick={() => favorite.deleteFavoriteCar(car.id, dispatch)}>
      <FavoriteIcon />
    </IconButton>
  ) : (
    <IconButton onClick={() => favorite.addFavoriteCar(car, dispatch)}>
      <FavoriteBorderIcon />
    </IconButton>
  );
};
