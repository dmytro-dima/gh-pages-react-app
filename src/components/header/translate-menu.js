import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const MenuTranslate = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mt-auto mb-auto mr-3">
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        style={{ color: "white" }}
        size="medium"
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
      >
        українська
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "15ch",
          },
        }}
      >
        <MenuItem onClick={handleClose}>Українська</MenuItem>
        <MenuItem onClick={handleClose}>English</MenuItem>
      </Menu>
    </div>
  );
};
