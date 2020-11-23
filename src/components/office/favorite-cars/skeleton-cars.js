import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Paper,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    details: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: "1 0 auto",
      paddingBottom: 0,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      paddingLeft: theme.spacing(1),
      paddingRight: "3rem",
    },
  })
);

export const SkeletonCar = () => {
  const classes = useStyles();
  return (
    <Card
      className="d-flex justify-content-between mt-3 mb-4"
      component={Paper}
      elevation={4}
    >
      <div className="d-flex flex-column w-75">
        <CardContent className={classes.content}>
          <div className="d-flex">
            <Skeleton variant="text" width="2rem" className="mr-2" />
            <Skeleton variant="text" width="15rem" />
          </div>
          <Typography variant="subtitle1" color="textSecondary">
            <Skeleton variant="rect" width={"100%"} height={"5rem"} />
          </Typography>
        </CardContent>
        <div className="d-flex align-items-center pl-3 pr-3">
          <div className="d-flex justify-content-between flex-wrap mb-3 w-100">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="d-flex w-auto"
                style={{ height: "2rem" }}
              >
                <Skeleton variant="text" width="9rem" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <CardMedia className="w-25 h-100">
        <Skeleton variant="rect" width="100%" height="11rem" />
      </CardMedia>
    </Card>
  );
};
