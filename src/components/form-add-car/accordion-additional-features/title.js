import React from "react";
import { Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

export const AccordionMoreTitle = ({ color, driven, mileage, regions }) => {
  return (
    <div className="accordion-header">
      <div className="d-flex accordion-header_title">
        <div className="accordion-header_title-number">4</div>
        <h5>Додаткові характеристики</h5>
        {color && driven && mileage && regions ? (
          <CheckCircleOutlineIcon className="ml-2" />
        ) : (
          <ErrorOutlineIcon className="ml-2" />
        )}
      </div>
      <Typography className="d-flex accordion-header_text">
        більше детальна інформація авто
      </Typography>
    </div>
  );
};
