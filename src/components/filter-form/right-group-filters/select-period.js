import React from "react";
import { Typography } from "@material-ui/core";
import { SelectParameter } from "../select-parameter";
import { years } from "../types/typesYear";

export const SelectPeriod = ({ yearOf, yearOn }) => {
  return (
    <div className="d-flex flex-wrap" id="select-date">
      <Typography className="mt-auto mb-auto text-white w-25">Рік</Typography>
      <div className="d-flex justify-content-between w-75" id="year">
        <div style={{ width: "45%" }}>
          <SelectParameter
            label={"від"}
            options={years(yearOn.yearOn, yearOf.yearOf)}
            inputValue={yearOn.yearOn}
            setInputValue={yearOn.addFilterCar}
            filterType="yearOn"
          />
        </div>
        <div style={{ width: "45%" }}>
          <SelectParameter
            filterType="yearOf"
            inputValue={yearOf.yearOf}
            setInputValue={yearOf.addFilterCar}
            label={"до"}
            options={years(yearOn.yearOn, yearOf.yearOf)}
          />
        </div>
      </div>
    </div>
  );
};
