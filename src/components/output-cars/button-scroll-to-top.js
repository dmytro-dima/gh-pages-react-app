import React, { useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export const ButtonScrollToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div className="w-100 mt-5 mb-5 d-flex justify-content-center">
      {show && (
        <IconButton
          style={{ backgroundColor: "#DCDCDC" }}
          onClick={handleClick}
          className="mt-5 mb-5 text-dark"
          aria-label="to top"
        >
          <ArrowUpwardIcon />
        </IconButton>
      )}
    </div>
  );
};
