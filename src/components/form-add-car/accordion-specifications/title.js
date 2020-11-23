import React from "react";
import { Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

export const AccordionSpecificationsTitle = ({
  types,
  brand,
  year,
  fuel,
  body,
}) => {
  return (
    <div className="accordion-header">
      <div className="d-flex accordion-header_title">
        <div className="accordion-header_title-number">2</div>
        <h5>Основна інформація</h5>
        {types && brand && year && fuel && body ? (
          <CheckCircleOutlineIcon className="ml-2" />
        ) : (
          <ErrorOutlineIcon className="ml-2" />
        )}
      </div>
      <Typography className="d-flex accordion-header_text">
        тип транспорту, марка, модель, регіон
      </Typography>
    </div>
  );
};
