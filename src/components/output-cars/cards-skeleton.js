import React from "react";
import { Card, CardActionArea, CardContent, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

export const CardsSkeleton = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className="ml-auto mr-auto mt-2" style={{ width: "97%" }}>
        <CardActionArea>
          <Skeleton variant="rect" width={"100%"} height={200} />
          <CardContent>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </CardContent>
        </CardActionArea>
        <CardContent className="d-flex justify-content-between ">
          <Skeleton variant="rect" width={"10rem"} height={"2rem"} />
          <Skeleton variant="rect" width={"10rem"} height={"2rem"} />
        </CardContent>
      </Card>
    </Grid>
  );
};
