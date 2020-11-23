import React from "react";
import { Typography } from "@material-ui/core";
import { SelectParameter } from "../select-parameter";
import { years } from "../types/typesYear";

export const SelectPeriod = ({ yearOf, yearOn }) => {
  return (
    <div className="d-flex justify-content-between" id="select-date">
      <Typography className="mt-auto mb-auto text-white">Рік</Typography>
      <div
        className="d-flex justify-content-between"
        style={{ width: "15rem" }}
        id="year"
      >
        <SelectParameter
          label={"від"}
          options={years(yearOn.yearOn, yearOf.yearOf)}
          inputValue={yearOn.yearOn}
          setInputValue={yearOn.addFilterCar}
          filterType="yearOn"
          width="6.5"
        />
        <SelectParameter
          filterType="yearOf"
          inputValue={yearOf.yearOf}
          setInputValue={yearOf.addFilterCar}
          label={"до"}
          width="6.5"
          options={years(yearOn.yearOn, yearOf.yearOf)}
        />
      </div>
    </div>
  );
};
