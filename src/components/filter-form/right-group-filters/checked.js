import React from "react";
import { Button, Checkbox } from "@material-ui/core";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

export const CheckedTypeCar = ({ checked, setChecked }) => {
  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="d-flex justify-content-between mb-1 " id="checked">
      <Button
        variant="contained"
        endIcon={<DirectionsCarIcon />}
        onClick={() => handleChecked()}
      >
        Перевірені
      </Button>
      <Checkbox
        className="mt-auto mb-auto p-0"
        checked={Boolean(checked)}
        onClick={() => handleChecked()}
        name="checkedB"
        size="medium"
        color="default"
      />
    </div>
  );
};
