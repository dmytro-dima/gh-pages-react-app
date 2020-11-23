import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionSpecificationsTitle } from "./title";
import { AccordionSpecificationsDetails } from "./details";

export const AccordionSpecifications = ({ parameters, setParameters }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="accordion-header"
      >
        <AccordionSpecificationsTitle {...parameters} />
      </AccordionSummary>
      <AccordionDetails>
        <AccordionSpecificationsDetails
          state={parameters}
          setParameters={setParameters}
        />
      </AccordionDetails>
    </Accordion>
  );
};
