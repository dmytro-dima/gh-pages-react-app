import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionMoreTitle } from "./title";
import { AccordionMoreDetails } from "./details";

export const AccordionMore = ({ more, setMore }) => {
  console.log(more);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="accordion-header"
      >
        <AccordionMoreTitle {...more} />
      </AccordionSummary>
      <AccordionDetails>
        <AccordionMoreDetails state={more} setMore={setMore} />
      </AccordionDetails>
    </Accordion>
  );
};
