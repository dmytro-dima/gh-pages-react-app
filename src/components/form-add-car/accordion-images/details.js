import React, { useState } from "react";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import ProgressBar from "./progress-bar";
import { OutputImages } from "./output-images";
import { Button, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Skeleton } from "@material-ui/lab";

export const AccordionImageDetails = ({ images }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (selected) => {
    if (selected && !["image/png", "image/jpeg"].includes(selected.type)) {
      setError("Виберіть файл (png вбо jpg)");
    } else if (images.length >= 5) {
      setError("Ви вже вибрали 5 фото");
    } else {
      setFile(selected);
      setError("");
    }
  };

  const onDelete = (imageUrl) => {
    images.setImages(
      "images",
      images.images.filter((url) => url !== imageUrl)
    );
  };

  return (
    <div className="accordion-details w-100">
      <div className="accordion-details_chous d-flex mb-3">
        <div className="text" style={{ margin: "auto 0" }}>
          <Typography>
            Ви можете додвти ще: <span>{5 - images.images.length}</span> фото
          </Typography>
        </div>
        <div className="btn-group">
          <Button
            className="ml-3"
            variant="contained"
            startIcon={<AddIcon />}
            endIcon={<PhotoCameraIcon />}
          >
            <input
              type="file"
              className="accordion-details_chous-file"
              id="myfile"
              name="myfile"
              multiple="multiple"
              onChange={(e) => handleChange(e.target.files[0])}
            />
            Добавити
          </Button>
        </div>
        <div className="output w-50 mt-auto mb-auto">
          {error && <Typography>{error}</Typography>}
          {file && (
            <ProgressBar file={file} setFile={setFile} images={images} />
          )}
        </div>
      </div>
      <div className="accordion-details_images d-flex ml-5 w-100">
        <OutputImages images={images.images} onDelete={onDelete} />
        {images.images.length >= 5 ? (
          ""
        ) : (
          <Skeleton
            variant="rect"
            width={"10rem"}
            height={"9.8rem"}
            className="ml-2"
          />
        )}
      </div>
    </div>
  );
};
