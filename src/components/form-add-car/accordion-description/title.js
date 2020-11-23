import React from "react";
import { Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

export const AccordionDescriptionTitle = ({ description }) => {
  return (
    <div className="accordion-header">
      <div className="d-flex accordion-header_title">
        <div className="accordion-header_title-number">3</div>
        <h5>Опис автомобіля</h5>
        {description ? (
          <CheckCircleOutlineIcon className="ml-2" />
        ) : (
          <ErrorOutlineIcon className="ml-2" />
        )}
      </div>
      <Typography className="d-flex accordion-header_text">
        детальний опис особливостеей авто
      </Typography>
    </div>
  );
};
