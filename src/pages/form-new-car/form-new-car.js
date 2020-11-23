import React, { useContext, useEffect } from "react";
import { FormAddCar } from "../../components/form-add-car/form-add-car";
import DataContext from "../../context/store";
import { actions } from "../../store/store";

export const FormNewCar = ({ match }) => {
  const { state, dispatch } = useContext(DataContext);

  console.log(match);
  useEffect(() => {
    if (match.path === "/edit") {
      actions.getCar(dispatch);
    }
  }, [actions, match.path]);

  return (
    <div id="form-new-car">
      <FormAddCar
        state={state}
        edit={state.newCar[0]}
        actions={actions}
        dispatch={dispatch}
        setCar={actions.setCar}
        updateCar={actions.updateCar}
      />
    </div>
  );
};
