import Backdrop from "@mui/material/Backdrop";
import React from "react";
// import "./Spinner.css";
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
  loading: boolean;
}

const Spinner = ({ loading }: Props) => {
  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress size={100} />
    </Backdrop>
  );
};

export default React.memo(Spinner);
