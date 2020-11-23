import React from "react";
import { Typography } from "@material-ui/core";
import { AutocompleteFilter } from "../autocomplete-filter";
import { SelectPeriod } from "./select-period";
import * as _ from "lodash";

export const CenterGroupFilters = ({ cars, yearOf, yearOn, body }) => {
  const optionsBody = () => _.uniq(cars.map((car) => car.body));

  return (
    <div className="filter-content_center" style={{ width: "35%" }}>
      <div className="d-flex justify-content-between">
        <Typography className="mt-auto mb-auto text-white">Кузов</Typography>
        <AutocompleteFilter
          options={optionsBody()}
          label="Тип кузова"
          inputValue={body.body}
          filterType="body"
          setInputValue={body.addFilterCar}
        />
      </div>
      <SelectPeriod yearOf={yearOf} yearOn={yearOn} />
    </div>
  );
};
