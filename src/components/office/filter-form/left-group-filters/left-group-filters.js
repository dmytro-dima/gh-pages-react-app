import React from "react";
import { SelectParameter } from "../select-parameter";
import { AutocompleteFilter } from "../autocomplete-filter";
import * as _ from "lodash";

export const LeftGroupFilters = ({ cars, types, brand }) => {
  const optionsType = () => _.uniq(cars.map((car) => car.types));
  const optionsBrand = () => _.uniq(cars.map((car) => car.brand));

  return (
    <div className="filter-content_left" style={{ width: "28%" }}>
      <SelectParameter
        width={15}
        options={optionsType()}
        label="Тип транспорту"
        inputValue={types.types}
        setInputValue={types.addFilterCar}
        filterType="types"
      />
      <AutocompleteFilter
        options={optionsBrand()}
        label="Марка авто"
        inputValue={brand.brand}
        setInputValue={brand.addFilterCar}
        filterType="brand"
      />
    </div>
  );
};
