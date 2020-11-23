import React, { useEffect, useState } from "react";
import { BottomNavigation, Grid } from "@material-ui/core";
import { CardCar } from "./card-car";
import { CardsSkeleton } from "./cards-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { ButtonScrollToTop } from "./button-scroll-to-top";

export const Cars = ({ state, setFiltersState, match, dispatch, favorite }) => {
  const [filters, setFilters] = useState(null);
  const [lastItemScroll, setLastItemScroll] = useState(6);
  const stepScroll = 3;

  useEffect(() => {
    if (match.params.search) {
      const url = match.params.parameters.slice(1);

      const filters = url.split("&").reduce((res, item) => {
        if (item) {
          let temp = item.split("=");
          res[temp[0]] = temp[1].split(",")[0];
        }
        return res;
      }, {});

      setFilters(filters);
      setFiltersState(filters, dispatch);
    } else setFilters(null);
  }, [match.params.parameters]);

  const filter = ({ toggle, types, brand, body, regions, yearOf, yearOn }) => {
    return state.cars
      .filter((el) => (toggle === "all" ? el : el.driven === toggle))
      .filter((el) => (types ? el.types === types : el))
      .filter((el) => (brand ? el.brand === brand : el))
      .filter((el) => (body ? el.body === body : el))
      .filter((el) => (regions ? el.regions === regions : el))
      .filter((el) => (yearOf ? el.year <= yearOf : el))
      .filter((el) => (yearOn ? el.year >= yearOn : el));
  };

  const filtersCar = filters ? filter({ ...filters }) : state.cars;

  return (
    <Grid container spacing={3} className="mb-2">
      <Grid item xs={12}>
        <BottomNavigation
          className="mt-2"
          style={{ backgroundColor: "#e0e0e0" }}
        ></BottomNavigation>
      </Grid>
      <Grid item xs={12}>
        <InfiniteScroll
          dataLength={filtersCar.slice(0, lastItemScroll).length}
          next={() =>
            setTimeout(() => {
              setLastItemScroll(lastItemScroll + stepScroll);
            }, 750)
          }
          className="d-flex flex-wrap"
          style={{ overflow: "inherit" }}
          hasMore={true}
          loader={
            lastItemScroll <= filtersCar.length ? (
              <>
                <CardsSkeleton />
                <CardsSkeleton />
                <CardsSkeleton />
              </>
            ) : (
              ""
            )
          }
        >
          {state.cars &&
            filtersCar
              .slice(0, lastItemScroll)
              .map((car, i) => (
                <CardCar
                  {...car}
                  key={i}
                  car={car}
                  dispatch={dispatch}
                  favorite={favorite}
                />
              ))}
          {lastItemScroll >= filtersCar.length && filtersCar.length > 5 ? (
            <ButtonScrollToTop />
          ) : (
            ""
          )}
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
};
