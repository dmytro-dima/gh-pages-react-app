import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";
import { AccordionImages } from "./accordion-images/accordion-images";
import { AccordionSpecifications } from "./accordion-specifications/accordion-specifications";
import { AccordionDescription } from "./accordion-description/accordion-description";
import { AccordionMore } from "./accordion-additional-features/accordion-additional-features";
import { SimpleDialogDemo } from "./modal-window";
import { NavLink } from "react-router-dom";
import { Edit } from "@material-ui/icons";

export const FormAddCar = ({ setCar, state, actions, dispatch, updateCar }) => {
  const [err, setErr] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const {
    id = null,
    edit = false,
    images = [],
    types = "",
    brand = "",
    year = "",
    body = "",
    fuel = "",
    description = "",
    color = "",
    driven = "",
    mileage = "",
    regions = "",
  } = state.newCar;

  const addParameterCar = (parameter, data) => {
    actions.addParameter(parameter, data, dispatch);
  };

  const handleClickOpen = () => {
    if (!Boolean(images.length !== 0)) {
      setErr("Добавте фото хочаб 1 фото");
    } else if (!Boolean(types)) {
      setErr("Ви не заповнили types авто");
    } else if (!Boolean(brand)) {
      setErr("Ви не заповнили brand авто");
    } else if (!Boolean(year)) {
      setErr("Ви не заповнили year авто");
    } else if (!Boolean(fuel)) {
      setErr("Ви не заповнили fuel авто");
    } else if (!Boolean(body)) {
      setErr("Ви не заповнили body авто");
    } else if (!Boolean(regions)) {
      setErr("Ви не заповнили regions авто");
    } else if (!Boolean(description)) {
      setErr("Ви не заповнили fuel авто");
    } else if (!Boolean(color)) {
      setErr("Ви не заповнили color авто");
    } else if (!Boolean(driven)) {
      setErr("Ви не заповнили driven авто");
    } else if (!Boolean(mileage)) {
      setErr("Ви не заповнили mileage авто");
    } else {
      setOpenModal(true);
      setErr("");
    }
  };

  const handleClickUpdate = () => {
    updateCar(id, { ...state.newCar }, dispatch);
    setCar({}, dispatch);
  };

  const createCar = () => {
    actions.createCar(
      {
        ...state.newCar,
      },
      dispatch
    );
  };

  return (
    <Container maxWidth="md">
      <div className="form-info_top" id="form-info_top">
        <div className="form-info_top_title d-flex">
          <h1 className="mt-auto mb-auto">
            {edit ? "Редагувати" : "Додавання"} авто
          </h1>
          {err && <h3 className=" text-danger mt-auto mb-auto ml-3">{err}</h3>}
        </div>
        <div className="progressive-bar">
          <ul className="progressive-bar_top">
            <li className="active">
              <p>Основна інформація</p>
            </li>
            <li>
              <p>{edit ? "Редагування" : "Добавити"}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="form-info_accordion" id="form-info_bottom">
        <AccordionImages images={images} setImages={addParameterCar} />
        <AccordionSpecifications
          parameters={{ types, brand, year, fuel, body }}
          setParameters={addParameterCar}
        />
        <AccordionMore
          more={{ color, regions, driven, mileage }}
          setMore={addParameterCar}
        />
        <AccordionDescription
          description={description}
          setDescription={addParameterCar}
        />
      </div>
      <div className="d-flex justify-content-between mt-2 form-info_bottom">
        <div className="progressive-bar" style={{ width: "70%" }}>
          <ul className="progressive-bar_bottom">
            <li>
              <p>Основна інформація</p>
            </li>
            <li className="active">
              <p>{edit ? "Редагування" : "Добавити"}</p>
            </li>
          </ul>
        </div>
        {edit ? (
          <Button
            className="w-25 text-white mt-2"
            variant="contained"
            color="primary"
            component={NavLink}
            onClick={() => handleClickUpdate()}
            to={`/:pages/:${id}`}
            startIcon={<Edit />}
          >
            Редагувати авто
          </Button>
        ) : (
          <SimpleDialogDemo
            createCar={createCar}
            handleClickOpen={handleClickOpen}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        )}
      </div>
    </Container>
  );
};
