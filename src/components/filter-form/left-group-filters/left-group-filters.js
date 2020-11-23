import React from "react";
import { ToggleGroup } from "./toggle-group";
import { SelectParameter } from "../select-parameter";
import { AutocompleteFilter } from "../autocomplete-filter";
import { typesCars } from "../types/typesCars";
import * as _ from "lodash";
import { Grid } from "@material-ui/core";

export const LeftGroupFilters = ({ cars, toggle, types, brand, body }) => {
  const optionsFilter = (preType, availability, type) => {
    return (
      type &&
      availability &&
      _.uniq(
        cars
          .filter((car) => car[preType] === availability)
          .map((car) => car[type]),
        true
      )
    );
  };

  const optionsParameters = (preType, availability, type, err) =>
    !preType
      ? [`Виберіть спочатку${err}`]
      : optionsFilter(preType, availability, type).length === 0
      ? [`Виберіть  ${err}`]
      : optionsFilter(preType, availability, type);

  if (cars)
    return (
      <Grid item sm={12} md={6} className="filter-content_left">
        <ToggleGroup
          inputValue={toggle.toggle}
          setInputValue={toggle.addFilterCar}
          filterType="toggle"
        />
        <SelectParameter
          width={20}
          options={
            toggle.toggle === "all"
              ? typesCars
              : optionsParameters(
                  "driven",
                  toggle.toggle,
                  "types",
                  " тип транспорту"
                )
          }
          label="Тип транспорту"
          inputValue={types.types}
          setInputValue={types.addFilterCar}
          filterType="types"
        />
        <AutocompleteFilter
          options={optionsParameters(
            "types",
            types.types,
            "brand",
            " тип транспорту"
          )}
          label="Марка авто"
          inputValue={brand.brand}
          setInputValue={brand.addFilterCar}
          filterType="brand"
        />
        <AutocompleteFilter
          options={optionsParameters(
            "brand",
            brand.brand,
            "body",
            " марку авто"
          )}
          label="Тип кузова"
          inputValue={body.body}
          filterType="body"
          setInputValue={body.addFilterCar}
        />
      </Grid>
    );
};
