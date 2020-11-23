import React from "react";
import { Typography } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export const TextareaAutosizeDesc = ({
  inputValue,
  setInputValue,
  placeholder,
}) => {
  return (
    <div className="d-flex mt-1 details w-100">
      <div className="d-flex details-type w-100" style={{ height: "20rem" }}>
        <div className="accordion-details_description w-100 mb-5 p-2">
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            value={inputValue}
            onChange={(e) => setInputValue("description", e.target.value)}
            placeholder={placeholder}
            className="w-100 h-100 p-2"
          />
          <Typography>
            Доступно символів: {2000 - inputValue.length} символів
          </Typography>
        </div>
      </div>
    </div>
  );
};
