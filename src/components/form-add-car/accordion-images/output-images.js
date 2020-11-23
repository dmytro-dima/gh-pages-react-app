import React from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Skeleton from "@material-ui/lab/Skeleton";

export const OutputImages = ({ images, onDelete }) => {
  return (
    <GridList style={{ width: "auto" }}>
      {images.map((url) =>
        url ? (
          <GridListTile key={url} style={{ width: "10rem", height: "10rem" }}>
            <img src={url} alt="uploaded pic" />
            <GridListTileBar
              actionIcon={
                <IconButton aria-label="star" onClick={() => onDelete(url)}>
                  <DeleteOutlineIcon style={{ color: "white" }} />
                </IconButton>
              }
            />
          </GridListTile>
        ) : (
          <Skeleton variant="rect" width={"10rem"} height={"10rem"} />
        )
      )}
    </GridList>
  );
};
