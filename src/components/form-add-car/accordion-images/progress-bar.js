import React, { useEffect } from "react";
import useStorage from "./hooks/useStorage";
import LinearProgress from "@material-ui/core/LinearProgress";

const ProgressBar = ({ file, setFile, images }) => {
  const { progress } = useStorage(file, images);

  useEffect(() => {
    if (progress) {
      setFile(null);
    }
  }, [progress, setFile]);

  return (
    <div className="progress-bar w-100">
      <LinearProgress style={{ color: "purple" }} />
    </div>
  );
};

export default ProgressBar;
