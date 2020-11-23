import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionImageTitle } from "./title";
import { AccordionImageDetails } from "./details";

export const AccordionImages = ({ images, setImages }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="accordion-header"
      >
        <AccordionImageTitle saveImages={images} />
      </AccordionSummary>
      <AccordionDetails>
        <AccordionImageDetails images={{ images, setImages }} />
      </AccordionDetails>
    </Accordion>
  );
};
