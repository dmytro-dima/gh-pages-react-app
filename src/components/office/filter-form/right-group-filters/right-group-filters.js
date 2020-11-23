import React from "react";
import { AutocompleteFilter } from "../autocomplete-filter";
import { Typography } from "@material-ui/core";
import * as _ from "lodash";

export const RightGroupFilters = ({ cars, regions }) => {
  const optionsRegions = () => _.uniq(cars.map((car) => car.regions));

  return (
    <div className="filter-content_right" style={{ width: "35%" }}>
      <div className="d-flex justify-content-between">
        <Typography className="mt-auto mb-auto text-white">Регіон</Typography>
        <AutocompleteFilter
          label="Регіон"
          options={optionsRegions()}
          setInputValue={regions.addFilterCar}
          inputValue={regions.regions}
          filterType="regions"
        />
      </div>
    </div>
  );
};
