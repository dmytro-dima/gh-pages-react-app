import React from "react";
import { Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

export const AccordionImageTitle = ({ saveImages }) => {
  return (
    <div className="accordion-header">
      <div className="d-flex accordion-header_title">
        <div className="accordion-header_title-number">1</div>
        <h5>Додайте 2-3 фото</h5>
        {saveImages.length !== 0 ? (
          <CheckCircleOutlineIcon className="ml-2" />
        ) : (
          <ErrorOutlineIcon className="ml-2" />
        )}
      </div>
      <div className="d-flex ">
        <Typography className="accordion-header_text m-auto">
          щоб авто було простіше запам`ятати
        </Typography>
      </div>
    </div>
  );
};
