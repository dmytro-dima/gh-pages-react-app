import React from "react";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import { Typography } from "@material-ui/core";
import { carBrand } from "./types/typesCarBrand";
import { AutocompleteFilter } from "../autocomplete-filter";
import { years } from "./types/typesYear";
import { SelectParameter } from "../select-parameter";
import { typesBody } from "./types/typesBody";
import { typesCars } from "./types/typesCars";
import { typesFuel } from "./types/typesFuel";

export const AccordionSpecificationsDetails = ({ state, setParameters }) => {
  return (
    <div className="accordion-details  w-100">
      <div
        className="accordion-details_text d-flex justify-content-between"
        style={{ width: "82%" }}
      >
        <Typography>
          <NewReleasesIcon />
          Поля обов'язкові для заповнення
        </Typography>
      </div>
      <div
        className="accordion-details_specifications"
        style={{ width: "82%" }}
      >
        <SelectParameter
          name="Тип транспорту"
          width="20"
          options={typesCars}
          label={"Тип транспорту"}
          inputValue={state.types}
          setInputValue={setParameters}
          typeParameter="types"
        />
        <AutocompleteFilter
          options={carBrand}
          name="Марка авто"
          inputValue={state.brand}
          setInputValue={setParameters}
          typeParameter="brand"
        />
        <SelectParameter
          name="Тип кузова"
          width="20"
          options={typesBody}
          label={"Тип кузова"}
          inputValue={state.body}
          setInputValue={setParameters}
          typeParameter="body"
        />
        <SelectParameter
          name="Тип пального"
          width="20"
          options={typesFuel}
          label={"Тип пального"}
          inputValue={state.fuel}
          setInputValue={setParameters}
          typeParameter="fuel"
        />
        <SelectParameter
          name="Рік випуску"
          width="10"
          options={years()}
          label={"Рік"}
          inputValue={state.year}
          setInputValue={setParameters}
          typeParameter="year"
        />
      </div>
    </div>
  );
};
