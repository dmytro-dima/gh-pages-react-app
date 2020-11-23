import React from "react";
import { Typography } from "@material-ui/core";
import { SelectParameter } from "../select-parameter";
import { typesColor } from "./types/typesColor";
import { typesDriven } from "./types/typesDriven";
import { AutocompleteFilter } from "../autocomplete-filter";
import { typesRegions } from "../accordion-specifications/types/typesRegions";
import { TextFieldParameter } from "../text-field-parameter";

export const AccordionMoreDetails = ({ state, setMore }) => {
  return (
    <div className="accordion-details w-100">
      <div
        className="accordion-details_text d-flex justify-content-between"
        style={{ width: "82%" }}
      >
        <Typography className="mt-auto mb-auto">
          Допоможе більш розібратись у авто
        </Typography>
      </div>
      <div
        className="accordion-details_specifications"
        style={{ width: "82%" }}
      >
        <SelectParameter
          name="Колір"
          width="20"
          options={typesColor}
          label={"Колір"}
          inputValue={state.color}
          setInputValue={setMore}
          typeParameter="color"
        />
        <AutocompleteFilter
          options={typesRegions}
          name="Регіон"
          width="20"
          inputValue={state.regions}
          setInputValue={setMore}
          typeParameter="regions"
        />
        <SelectParameter
          name="Стан авто"
          width="20"
          options={typesDriven}
          label={"Оберіть"}
          inputValue={state.driven}
          setInputValue={setMore}
          typeParameter="driven"
        />
        <TextFieldParameter
          name="Пробіг"
          width="10"
          label={"тис.км."}
          inputValue={state.mileage}
          setInputValue={setMore}
          typeParameter="mileage"
          type="number"
        />
      </div>
    </div>
  );
};
