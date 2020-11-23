import React from "react";
import { TextareaAutosizeDesc } from "./textarea-autosize";

export const AccordionDescriptionDetails = ({
  description,
  setDescription,
}) => {
  return (
    <div className="accordion-details w-100">
      <div className="accordion-details_specifications">
        <TextareaAutosizeDesc
          placeholder={"Опис"}
          inputValue={description}
          setInputValue={setDescription}
        />
      </div>
    </div>
  );
};
