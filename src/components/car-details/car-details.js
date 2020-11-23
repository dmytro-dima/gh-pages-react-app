import React from "react";
import { Typography } from "@material-ui/core";
import { AutoPlaySwipeableViewsDetails } from "./steppers-details";
import DataGrid from "./data-grid";
import Skeleton from "@material-ui/lab/Skeleton";
import { Navigation } from "./navigation";

export const CarDetails = ({ car, deleteCar, setCar, dispatch, favorite }) => {
  return car ? (
    <>
      <Navigation
        deleteCar={deleteCar}
        dispatch={dispatch}
        carId={car && car.id}
        car={car && car}
        setCar={setCar}
        favorite={favorite}
      />
      <div className="w-100 d-flex justify-content-between">
        <div className="w-50">
          <AutoPlaySwipeableViewsDetails images={car.images} />
          {[{ type: "subText", name: "subText" }].map(({ type, name }) => {
            return (
              <div key={type}>
                <Typography variant="h6" gutterBottom>
                  Опис
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {car.description.subText ? car.description : car.description}
                </Typography>
              </div>
            );
          })}
        </div>
        <DataGrid {...car} />
      </div>
    </>
  ) : (
    <>
      <Skeleton variant="rect" width={"100%"} height={50} />
      <div className="w-100 d-flex justify-content-between mt-5">
        <div className="w-50">
          <Skeleton variant="rect" width={"100%"} height={400} />
          {[1, 2, 3, 4].map((num) => {
            return <Skeleton variant="text" key={num} />;
          })}
        </div>
        <Skeleton variant="rect" width={"42%"} height={650} />
      </div>
    </>
  );
};
