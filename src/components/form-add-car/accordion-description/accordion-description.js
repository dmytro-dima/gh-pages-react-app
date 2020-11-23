import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AccordionDescriptionTitle } from "./title";
import { AccordionDescriptionDetails } from "./details";

export const AccordionDescription = ({ description, setDescription }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="accordion-header"
      >
        <AccordionDescriptionTitle description={description} />
      </AccordionSummary>
      <AccordionDetails>
        <AccordionDescriptionDetails
          description={description}
          setDescription={setDescription}
        />
      </AccordionDetails>
    </Accordion>
  );
};
